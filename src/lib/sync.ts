import type { Course, Progress } from "../types";
import { isAccountId } from "./accounts";
import { cloudDb } from "./auth";
import { freshProgress } from "./progress";
import { store } from "./storage";

export type SyncStatus = "wait" | "cloud" | "local" | "readonly" | "error";

interface CloudDoc {
  get(): Promise<{ exists: boolean; data(): Progress }>;
  set(value: Progress): Promise<void>;
}

export interface CloudDb {
  doc(path: string): CloudDoc;
}

declare global {
  interface Window {
    claude?: { use?: (name: "db") => Promise<CloudDb | null> };
  }
}

interface Target {
  doc: string;
  localKey: string;
}

const localKey = (course: Course, account: string) => course.key + ":" + account;

export function readLocalProgress(course: Course, account: string): Progress | null {
  try {
    const saved = JSON.parse(store.get(localKey(course, account)) || "null");
    return saved ? { ...freshProgress(), ...saved } : null;
  } catch {
    return null;
  }
}

export function copyLegacyProgress(courses: Course[], from: string, to: string) {
  let copied = 0;
  for (const c of courses) {
    const old = readLocalProgress(c, from);
    if (!old?.profile) continue;
    const current = readLocalProgress(c, to);
    if (current && (current.updatedAt || 0) >= (old.updatedAt || 0)) continue;
    store.set(localKey(c, to), JSON.stringify(old));
    copied++;
  }
  return copied;
}

export function removeLocalProgress(courses: Course[], account: string) {
  courses.forEach(c => store.set(localKey(c, account), null));
}

const dbFor = async (account: string, shared: CloudDb | null) => {
  if (isAccountId(account)) return shared;
  try {
    return await cloudDb(account);
  } catch {
    return null;
  }
};

class ProgressSync {
  status: SyncStatus = "wait";
  private shared: CloudDb | null = null;
  private db: CloudDb | null = null;
  private ready: Promise<void>;
  private listeners = new Set<() => void>();
  private target: Target | null = null;
  private latest: Progress | null = null;
  private timer: ReturnType<typeof setTimeout> | undefined;
  private writing = false;
  private dirty = false;

  constructor() {
    const use = window.claude?.use;
    this.ready = (use ? use("db") : Promise.resolve(null)).then(
      db => {
        this.shared = db;
        if (!db && this.status === "wait") this.setStatus("local");
      },
      () => this.setStatus("local")
    );
    addEventListener("pagehide", () => void this.flush());
    document.addEventListener("visibilitychange", () => document.hidden && void this.flush());
  }

  subscribe = (fn: () => void) => {
    this.listeners.add(fn);
    return () => void this.listeners.delete(fn);
  };

  getStatus = () => this.status;

  private setStatus(s: SyncStatus) {
    if (s === this.status) return;
    this.status = s;
    this.listeners.forEach(fn => fn());
  }

  async load(course: Course, account: string): Promise<Progress> {
    await this.flush();
    this.setStatus("wait");
    await this.ready;
    this.db = await dbFor(account, this.shared);
    this.target = { doc: course.doc + "/" + account, localKey: localKey(course, account) };
    this.latest = null;
    let remote: Progress | null = null;
    const local = readLocalProgress(course, account);
    if (this.db) {
      try {
        const s = await this.db.doc(this.target.doc).get();
        if (s.exists) remote = s.data();
        this.setStatus("cloud");
      } catch {
        this.setStatus("error");
      }
    } else this.setStatus("local");
    const useLocal = !!local && (!remote || (local.updatedAt || 0) > (remote.updatedAt || 0));
    const progress: Progress = { ...freshProgress(), ...structuredClone((useLocal ? local : remote) || {}) };
    if (useLocal && this.db) {
      this.latest = progress;
      this.queueRemote();
    }
    return progress;
  }

  async pullAll(courses: Course[], account: string) {
    if (isAccountId(account)) return;
    const db = await dbFor(account, null);
    if (!db) return;
    await Promise.all(courses.map(async c => {
      try {
        const s = await db.doc(c.doc + "/" + account).get();
        if (!s.exists) return;
        const remote = s.data(), local = readLocalProgress(c, account);
        if (!local || (remote.updatedAt || 0) > (local.updatedAt || 0)) store.set(localKey(c, account), JSON.stringify(remote));
      } catch {
        return;
      }
    }));
  }

  discard() {
    clearTimeout(this.timer);
    this.dirty = false;
    this.latest = null;
    this.target = null;
    this.db = null;
  }

  save(progress: Progress) {
    if (!this.target) return;
    store.set(this.target.localKey, JSON.stringify(progress));
    this.latest = progress;
    this.queueRemote();
  }

  close() {
    void this.flush();
    this.target = null;
  }

  private queueRemote() {
    if (!this.db || this.status === "readonly") return;
    this.dirty = true;
    clearTimeout(this.timer);
    this.timer = setTimeout(() => void this.flush(), 1200);
  }

  async flush() {
    clearTimeout(this.timer);
    if (!this.db || !this.dirty || this.writing || !this.target || !this.latest) return;
    this.writing = true;
    this.dirty = false;
    try {
      await this.db.doc(this.target.doc).set(structuredClone(this.latest));
      this.setStatus("cloud");
    } catch (e) {
      if ((e as { code?: string })?.code === "invalid_argument") this.setStatus("readonly");
      else {
        this.setStatus("error");
        this.dirty = true;
      }
    }
    this.writing = false;
    if (this.dirty && this.status === "error") this.timer = setTimeout(() => void this.flush(), 5000);
  }
}

export const progressSync = new ProgressSync();
