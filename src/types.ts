import type { IconName } from "./components/Icon";

export type Gender = "en" | "ei" | "et";
export type LevelId = "A0" | "A1" | "A2" | "B1" | "B2" | "C1";
export type CourseId = "no" | "en";
export type Pair = [string, string];

export interface WordDef {
  no: string;
  tr: string;
  say: string;
  ex: Pair;
  g?: Gender;
  def?: string;
  pl?: string;
  note?: string;
  tts?: string;
  lit?: string;
  pic?: string;
}

export interface Word extends WordDef {
  id: string;
  lesson: string;
  interest?: string;
}

export interface QuizItem {
  q: string;
  o: string[];
  a: number;
  e: string;
}

export interface Note {
  h: string;
  p: string;
  table?: string[][];
}

export interface LessonDef<W = WordDef> {
  id: string;
  title: string;
  no: string;
  icon: IconName;
  pack?: "words" | "sentences";
  intro: string;
  notes: Note[];
  tip: string;
  words: W[];
  dialogue: [string, string, string][];
  quiz: QuizItem[];
  review: string[];
}

export interface Lesson extends LessonDef<Word> {
  level: LevelId;
}

export interface LevelInfo {
  id: LevelId;
  title: string;
  d: string;
}

export interface InterestDef<W = WordDef> {
  label: string;
  words: W[];
  sentences: Pair[];
}

export type Interest = InterestDef<Word>;

export interface CourseDef {
  id: CourseId;
  name: string;
  lang: string;
  yourLang: string;
  key: string;
  doc: string;
  voice: RegExp;
  voiceName: string;
  letters?: string[];
  hero: string;
  sub: string;
  about: string;
  sentenceNote: string;
  lessons: (LessonDef & { level: LevelId })[];
  levels: LevelInfo[];
  interests: Record<string, InterestDef>;
  placement: Record<LevelId, QuizItem[]>;
}

export interface Course extends Omit<CourseDef, "lessons" | "interests"> {
  lessons: Lesson[];
  interests: Record<string, Interest>;
}

export type Flow = "a0" | "a0plus";

export interface Profile {
  lang: "tr";
  level: Flow;
  goal: number;
  interests: string[];
}

export interface LessonProgress {
  seen: boolean;
  cards: boolean;
  done: boolean;
  best: number;
  attempts: number;
}

export interface SrsEntry {
  n: number;
  due: string;
}

export interface Placement {
  date: string;
  rec: number;
  scores: number[];
}

export interface Progress {
  profile: Profile | null;
  lessons: Record<string, LessonProgress>;
  learned: Record<string, boolean>;
  days: Record<string, number>;
  srs: Record<string, SrsEntry>;
  placements?: Placement[];
  startLevel?: number;
  updatedAt?: number;
}
