import type { Lesson, StoryHero, StoryMood, StoryPlace, Talk, Word } from "../types";

export const HERO_NAMES: Record<StoryHero, string> = { mira: "Mira", emil: "Emil", sara: "Dr. Sara", hansen: "Hansen", berg: "Berg" };

export const HERO_PITCH: Record<StoryHero, number> = { mira: 1.1, emil: 0.9, sara: 1.2, hansen: 0.7, berg: 1.05 };

export const splitSentences = (text: string) =>
  (text.match(/[^.!?]+[.!?]+[”"]?\s*/g) || [text]).map(s => s.trim());

export interface StoryPart {
  text: string;
  word?: Word;
}

const escapeRegExp = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

export function markWords(text: string, words: Word[]): StoryPart[] {
  const names = words.map(w => w.no).sort((a, b) => b.length - a.length).map(escapeRegExp);
  const re = new RegExp(`(^|[^\\p{L}])(${names.join("|")})(\\p{L}*)`, "giu");
  const parts: StoryPart[] = [];
  let last = 0;
  for (const m of text.matchAll(re)) {
    const start = m.index + m[1].length;
    if (start > last) parts.push({ text: text.slice(last, start) });
    parts.push({ text: m[2] + m[3], word: words.find(w => w.no.toLowerCase() === m[2].toLowerCase()) });
    last = start + m[2].length + m[3].length;
  }
  if (last < text.length) parts.push({ text: text.slice(last) });
  return parts;
}

export type Cue = {
  kind: "title" | "line" | "recap";
  scene: number;
  place: StoryPlace;
  mood: StoryMood;
  text: string;
  tr: string;
  words: Word[];
  who?: 0 | 1;
  moods?: [StoryMood, StoryMood];
};

const wordsIn = (text: string, words: Word[]) => [...new Set(markWords(text, words).flatMap(p => p.word ? [p.word] : []))];

function buildTalkCues(lesson: Lesson, talk: Talk): Cue[] {
  let moods: [StoryMood, StoryMood] = ["happy", "happy"];
  const lines = talk.lines.map((l): Cue => {
    moods = l.who ? [moods[0], l.mood] : [l.mood, moods[1]];
    return { kind: "line", scene: -1, place: l.place || talk.place, mood: l.mood, text: l.text, tr: l.tr, words: wordsIn(l.text, lesson.words), who: l.who, moods };
  });
  const last = lines.at(-1)!;
  const recap = lesson.review.map((text): Cue => (
    { kind: "recap", scene: -1, place: last.place, mood: "proud", text, tr: "", words: [], moods: ["proud", "proud"] }
  ));
  const opening: Cue = { kind: "title", scene: -1, place: lines[0].place, mood: "happy", text: lesson.story!.title, tr: "", words: [], moods: ["happy", "happy"] };
  return [opening, ...lines, ...recap];
}

export function buildCues(lesson: Lesson): Cue[] {
  const { title, scenes, talk } = lesson.story!;
  if (talk) return buildTalkCues(lesson, talk);
  const first = scenes[0], end = scenes.length - 1;
  const lines = scenes.flatMap((s, scene) => {
    const tr = splitSentences(s.tr);
    return splitSentences(s.text).map((text, i): Cue => (
      { kind: "line", scene, place: s.place, mood: s.mood, text, tr: tr[i], words: wordsIn(text, lesson.words) }
    ));
  });
  const recap = lesson.review.map((text): Cue => (
    { kind: "recap", scene: end, place: scenes[end].place, mood: "proud", text, tr: "", words: [] }
  ));
  return [{ kind: "title", scene: 0, place: first.place, mood: "happy", text: title, tr: "", words: [] }, ...lines, ...recap];
}

export const readingTime = (text: string) => Math.max(2800, text.split(" ").length * 430);
