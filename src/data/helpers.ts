import type { Gender, LessonDef, LevelId, QuizItem, WordDef } from "../types";

export const W = (no: string, tr: string, say: string, exNo: string, exTr: string, x: Partial<WordDef> = {}): WordDef =>
  ({ no, tr, say, ex: [exNo, exTr], ...x });

export const N = (g: Gender, no: string, def: string, pl: string, tr: string, say: string, exNo: string, exTr: string): WordDef =>
  W(no, tr, say, exNo, exTr, { g, def, pl });

export const I = (no: string, tr: string, lit: string, pic: string, exNo: string, exTr: string): WordDef =>
  W(no, tr, "", exNo, exTr, { lit, pic });

export const Q = (q: string, o: string[], e: string): QuizItem => ({ q, o, a: 0, e });

export const atLevel = (level: LevelId, lessons: LessonDef[]) => lessons.map(L => ({ ...L, level }));

export const asExtra = (level: LevelId, lessons: LessonDef[]) => lessons.map(L => ({ ...L, level, extra: true }));

const LEVEL_ORDER: LevelId[] = ["A0", "A1", "A2", "B1", "B2", "C1"];

export const inLevelOrder = <T extends { level: LevelId }>(lessons: T[]) =>
  [...lessons].sort((a, b) => LEVEL_ORDER.indexOf(a.level) - LEVEL_ORDER.indexOf(b.level));
