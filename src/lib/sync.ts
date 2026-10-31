import type { Course, Progress } from "../types";
import { freshProgress } from "./progress";
import { store } from "./storage";

export type SyncStatus = "wait" | "cloud" | "local" | "readonly" | "error";

interface CloudDoc {
  get(): Promise<{ exists: boolean; data(): Progress }>;
  set(value: Progress): Promise<void>;
}

interface CloudDb {
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

class ProgressSync {
  status: SyncStatus = "wait";
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
        this.db = db;
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
    this.target = { doc: course.doc + "/" + account, localKey: course.key + ":" + account };
    this.latest = null;
    let remote: Progress | null = null, local: Progress | null = null;
    try {
      local = JSON.parse(store.get(this.target.localKey) || "null");
    } catch {
      local = null;
    }
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
