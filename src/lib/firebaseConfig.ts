export interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  appId: string;
  storageBucket?: string;
  messagingSenderId?: string;
}

export const FIREBASE_CONFIG: FirebaseConfig | null = {
  apiKey: "AIzaSyBB_MuMntONb3scvrRv2mw6zwydYIl4BeI",
  authDomain: "learn-language-949f7.firebaseapp.com",
  projectId: "learn-language-949f7",
  storageBucket: "learn-language-949f7.firebasestorage.app",
  messagingSenderId: "438247264807",
  appId: "1:438247264807:web:fe42ac81c2b1a149f43402"
};
