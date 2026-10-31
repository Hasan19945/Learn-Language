import type { Flow } from "../types";

interface Option<T> {
  v: T;
  t: string;
  d: string;
}

export const GOALS: Option<number>[] = [
  { v: 10, t: "Rahat", d: "Günde 10 alıştırma · ~5 dk" },
  { v: 20, t: "Düzenli", d: "Günde 20 alıştırma · ~10 dk" },
  { v: 40, t: "Yoğun", d: "Günde 40 alıştırma · ~20 dk" }
];

export const START_LEVELS: Option<Flow>[] = [
  { v: "a0", t: "Hiç bilmiyorum", d: "Her ders: öğren → kartlar → test" },
  { v: "a0plus", t: "Biraz biliyorum", d: "Seviye testiyle uygun seviyeni bul" }
];

export const FLOWS: Option<Flow>[] = [
  { v: "a0", t: "Adım adım", d: "Her derste sırayla: öğren → kartlar → test" },
  { v: "a0plus", t: "Serbest", d: "Kartları atlayıp doğrudan teste geçebilirsin" }
];
