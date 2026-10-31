import type { Course, Lesson, LessonProgress, Progress, Word } from "../types";
import { addDays, dayKey, today } from "./dates";

export const PASS = 0.8;
export const REVIEW_MAX = 20;
const INTERVALS = [1, 3, 7, 14, 30, 60];

export const freshProgress = (): Progress => ({ profile: null, lessons: {}, learned: {}, days: {}, srs: {} });

const emptyLesson = (): LessonProgress => ({ seen: false, cards: false, done: false, best: 0, attempts: 0 });

export const lessonProgress = (p: Progress, id: string) => p.lessons[id] ?? emptyLesson();

export const editLesson = (p: Progress, id: string) => (p.lessons[id] ||= emptyLesson());

export function countExercise(p: Progress) {
  p.days[today()] = (p.days[today()] || 0) + 1;
}

export function streak(p: Progress) {
  const goal = p.profile?.goal || 20, d = new Date();
  let n = 0;
  if ((p.days[today()] || 0) < goal) d.setDate(d.getDate() - 1);
  while ((p.days[dayKey(d)] || 0) >= goal) {
    n++;
    d.setDate(d.getDate() - 1);
  }
  return n;
}

export function schedule(p: Progress, id: string, right: boolean) {
  const c = p.srs[id];
  if (right && c && c.due > today()) return;
  const n = right ? Math.min((c?.n || 0) + 1, INTERVALS.length) : 0;
  p.srs[id] = { n, due: addDays(right ? INTERVALS[n - 1] : 1) };
}

export const levelIndex = (course: Course, L: Lesson) => course.levels.findIndex(x => x.id === L.level);

export const startLevel = (p: Progress) => p.startLevel || 0;

export function isUnlocked(course: Course, p: Progress, i: number) {
  const { lessons } = course;
  if (i === 0 || lessonProgress(p, lessons[i - 1].id).done) return true;
  const lv = levelIndex(course, lessons[i]);
  return lv < startLevel(p) || (lv === startLevel(p) && lessons[i - 1].level !== lessons[i].level);
}

export const positionInLevel = (course: Course, i: number) =>
  course.lessons.slice(0, i + 1).filter(x => x.level === course.lessons[i].level).length;

export const allDone = (course: Course, p: Progress) => course.lessons.every(L => lessonProgress(p, L.id).done);

export function currentLevel(course: Course, p: Progress) {
  const i = course.lessons.findIndex((L, j) => levelIndex(course, L) >= startLevel(p) && isUnlocked(course, p, j) && !lessonProgress(p, L.id).done);
  if (i >= 0) return levelIndex(course, course.lessons[i]);
  return Math.max(startLevel(p), allDone(course, p) ? course.levels.length - 1 : 0);
}

export const interestWords = (course: Course, p: Progress) =>
  (p.profile?.interests || []).flatMap(k => course.interests[k].words);

export const lessonWords = (course: Course, p: Progress, L: Lesson) =>
  L.pack === "words" ? [...L.words, ...interestWords(course, p)] : L.words;

export const allWords = (course: Course): Word[] =>
  [...course.lessons.flatMap(L => L.words), ...Object.values(course.interests).flatMap(P => P.words)];

export const wordsUpTo = (course: Course, lessonId: string) =>
  course.lessons.slice(0, course.lessons.findIndex(L => L.id === lessonId) + 1).flatMap(L => L.words);

export const dueWords = (course: Course, p: Progress) =>
  allWords(course)
    .filter(w => p.srs[w.id]?.due <= today())
    .sort((a, b) => p.srs[a.id].due.localeCompare(p.srs[b.id].due));

export const lessonsInLevel = (course: Course, levelId: string) =>
  course.lessons.map((L, i) => [L, i] as const).filter(([L]) => L.level === levelId);
