import type { Lang, Progress } from "../types";
import { FIREBASE_CONFIG } from "./firebaseConfig";
import { EMAIL_KEY, store } from "./storage";
import type { CloudDb } from "./sync";

export const emailAuthEnabled = !!FIREBASE_CONFIG;

const TIMEOUT = 8000;

function withTimeout<T>(work: Promise<T>): Promise<T> {
  return Promise.race([
    work,
    new Promise<T>((_, reject) => setTimeout(() => reject(new Error("timeout")), TIMEOUT))
  ]);
}

async function start() {
  const [app, authMod, fs] = await Promise.all([import("firebase/app"), import("firebase/auth"), import("firebase/firestore")]);
  const firebase = app.initializeApp(FIREBASE_CONFIG!);
  const auth = authMod.getAuth(firebase);
  await auth.authStateReady();
  return { auth, authMod, fs, db: fs.getFirestore(firebase) };
}

let services: ReturnType<typeof start> | null = null;
const load = () => services ||= start();

export interface EmailUser {
  uid: string;
  email: string;
  verified: boolean;
}

const remember = (uid: string, email: string | null): string => {
  store.set(EMAIL_KEY, email);
  return uid;
};

export async function currentUser(): Promise<EmailUser | null> {
  const { auth } = await load();
  const u = auth.currentUser;
  return u ? { uid: u.uid, email: u.email || "", verified: u.emailVerified } : null;
}

export async function signUp(email: string, password: string) {
  const { auth, authMod } = await load();
  auth.languageCode = "en";
  const { user } = await authMod.createUserWithEmailAndPassword(auth, email, password);
  void authMod.sendEmailVerification(user).catch(() => undefined);
  return remember(user.uid, user.email);
}

export async function signIn(email: string, password: string) {
  const { auth, authMod } = await load();
  const { user } = await authMod.signInWithEmailAndPassword(auth, email, password);
  return remember(user.uid, user.email);
}

export async function resetPassword(email: string, lang: Lang) {
  const { auth, authMod } = await load();
  auth.languageCode = lang === "nb" ? "no" : "tr";
  await authMod.sendPasswordResetEmail(auth, email);
}

export async function resendVerification() {
  const { auth, authMod } = await load();
  auth.languageCode = "en";
  if (auth.currentUser) await authMod.sendEmailVerification(auth.currentUser);
}

export async function checkVerified() {
  const { auth } = await load();
  const user = auth.currentUser;
  if (!user) return false;
  await user.reload();
  const verified = !!auth.currentUser?.emailVerified;
  if (verified) await auth.currentUser?.getIdToken(true);
  return verified;
}

export async function signOutUser() {
  const { auth, authMod } = await load();
  store.set(EMAIL_KEY, null);
  await authMod.signOut(auth);
}

export async function cloudDb(uid: string): Promise<CloudDb> {
  const { db, fs } = await load();
  return {
    doc(path) {
      const ref = fs.doc(db, "users", uid, "progress", path.split("/")[0]);
      return {
        async get() {
          const snap = await withTimeout(fs.getDoc(ref));
          return { exists: snap.exists(), data: () => JSON.parse(snap.get("json")) as Progress };
        },
        async set(value) {
          await withTimeout(fs.setDoc(ref, { json: JSON.stringify(value), updatedAt: value.updatedAt || 0 }));
        }
      };
    }
  };
}

export async function deleteEmailAccount(password: string, docs: string[]) {
  const { auth, authMod, db, fs } = await load();
  const user = auth.currentUser;
  if (!user?.email) throw new Error("no user");
  await authMod.reauthenticateWithCredential(user, authMod.EmailAuthProvider.credential(user.email, password));
  await withTimeout(Promise.all(docs.map(d => fs.deleteDoc(fs.doc(db, "users", user.uid, "progress", d)))));
  await authMod.deleteUser(user);
  store.set(EMAIL_KEY, null);
}

export function authErrorKey(e: unknown) {
  const code = (e as { code?: string })?.code || "";
  if (code === "auth/email-already-in-use") return "taken";
  if (code === "auth/invalid-email") return "badEmail";
  if (code === "auth/weak-password") return "weak";
  if (["auth/invalid-credential", "auth/wrong-password", "auth/user-not-found", "auth/invalid-login-credentials"].includes(code)) return "badLogin";
  if (code === "auth/too-many-requests") return "tooMany";
  if (code === "auth/network-request-failed") return "network";
  return "unknown";
}
