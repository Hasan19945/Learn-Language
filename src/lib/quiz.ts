import type { Course, Pair, Progress, Word, WordDef } from "../types";
import { countExercise, dueWords, interestWords, REVIEW_MAX, schedule, wordsUpTo } from "./progress";
import { pick, shuffle } from "./random";
import { editDistance, normalize } from "./text";

interface QuestionBase {
  q: string;
  e: string;
  speak: string | null;
  wid?: string;
  review?: boolean;
  again?: boolean;
  pic?: string;
  lit?: string;
}

export interface ChoiceQuestion extends QuestionBase {
  type: "choice";
  o: string[];
  a: number;
}

export interface TypeQuestion extends QuestionBase {
  type: "type";
  ok: string[];
  show: string;
}

export interface OrderQuestion extends QuestionBase {
  type: "order";
  words: string[];
  mix: string[];
  show: string;
}

export type Question = ChoiceQuestion | TypeQuestion | OrderQuestion;

export interface QuizState {
  queue: Question[];
  total: number;
  pos: number;
  first: number;
  retry: number;
  review: boolean;
}

export const tts = (w: WordDef) => w.tts || w.no;

const explain = (w: Word) => `${w.g ? w.g + " " : ""}${w.no}${w.lit ? ` (“${w.lit}”)` : ""} = ${w.tr}. Örnek: ${w.ex[0]} — ${w.ex[1]}`;

export function shuffleChoices<T extends { o: string[]; a: number }>(q: T): T {
  const idx = shuffle(q.o.map((_, i) => i));
  return { ...q, o: idx.map(i => q.o[i]), a: idx.indexOf(q.a) };
}

function vocabQuestion(course: Course, w: Word, pool: Word[]): ChoiceQuestion {
  if (w.pic && Math.random() < 0.5) {
    const opts = shuffle([w, ...pick(pool.filter(x => x.id !== w.id && x.no !== w.no), 3)]);
    return {
      type: "choice", wid: w.id, pic: w.pic, lit: w.lit, q: "Bu resim hangi deyimi anlatıyor?",
      o: opts.map(x => x.no), a: opts.indexOf(w), e: `${w.no}: kelimesi kelimesine “${w.lit}”. Anlamı: ${w.tr}.`, speak: null
    };
  }
  const fromTarget = Math.random() < 0.5;
  const others = pick(pool.filter(x => x.id !== w.id && x.tr !== w.tr && x.no !== w.no), 3);
  const opts = shuffle([w, ...others]);
  return {
    type: "choice", wid: w.id,
    q: fromTarget ? `“${w.no}” ne demek?` : `“${w.tr}” ${course.lang} nasıl söylenir?`,
    o: opts.map(x => fromTarget ? x.tr : x.no), a: opts.indexOf(w), e: explain(w), speak: fromTarget ? tts(w) : null
  };
}

const typable = (w: Word) => !w.pic && !/\.\.\.|…|\/|\(/.test(w.no) && w.no.split(" ").length <= 4;

function typeQuestion(course: Course, w: Word, pool: Word[]): TypeQuestion {
  const ok = [w, ...pool.filter(x => x !== w && normalize(x.tr) === normalize(w.tr))]
    .flatMap(x => [x.no, x.g && x.g + " " + x.no])
    .filter((x): x is string => !!x)
    .map(normalize);
  return { type: "type", wid: w.id, q: `“${w.tr}” ${course.lang} nasıl yazılır?`, ok, show: w.no, e: explain(w), speak: null };
}

const sentencesOf = (L: Course["lessons"][number]) =>
  [...new Map<string, Pair>([...L.dialogue.map(([, no, tr]): Pair => [no, tr]), ...L.words.map(w => w.ex)].map(s => [s[0], s])).values()]
    .filter(([no]) => !/\.\.\.|…/.test(no) && no.split(" ").length >= 3 && no.split(" ").length <= 8);

function orderQuestion([no, tr]: Pair): OrderQuestion {
  const words = no.replace(/[.!?]+$/, "").split(" ");
  let mix = shuffle(words);
  for (let k = 0; k < 5 && mix.join(" ") === words.join(" "); k++) mix = shuffle(words);
  return { type: "order", q: `Cümleyi sırala: “${tr}”`, words, mix, show: no, e: `${no} — ${tr}`, speak: null };
}

const newQuiz = (queue: Question[], review = false): QuizState => ({ queue, total: queue.length, pos: 0, first: 0, retry: 0, review });

export function buildQuiz(course: Course, p: Progress, i: number): QuizState {
  const L = course.lessons[i], own = L.words, prev = course.lessons.slice(0, i).flatMap(x => x.words);
  const qs: Question[] = pick(own, 7).map((w, k) =>
    k < 2 && typable(w) ? typeQuestion(course, w, own) : vocabQuestion(course, w, own.length >= 4 ? own : [...own, ...prev]));
  qs.push(...pick(sentencesOf(L), 2).map(orderQuestion));
  qs.push(...L.quiz.map(q => ({ ...shuffleChoices(q), type: "choice" as const, speak: null })));
  if (prev.length) {
    const unseen = prev.filter(w => !p.learned[w.id]);
    pick(unseen.length >= 2 ? unseen : prev, 2).forEach(w => qs.push({ ...vocabQuestion(course, w, prev), review: true }));
  }
  const ints = p.profile?.interests || [];
  if (L.pack === "words" && ints.length) {
    const iw = interestWords(course, p);
    pick(iw, Math.min(3, iw.length)).forEach(w => qs.push(vocabQuestion(course, w, [...iw, ...own])));
  }
  if (L.pack === "sentences" && ints.length) {
    const all = Object.values(course.interests).flatMap(P => P.sentences);
    pick(ints, 2).forEach(k => {
      const s = pick(course.interests[k].sentences, 1)[0];
      const opts = shuffle([s, ...pick(all.filter(x => x !== s), 2)]);
      qs.push({ type: "choice", q: `“${s[0]}” ne demek?`, o: opts.map(x => x[1]), a: opts.indexOf(s), e: `${s[0]} = ${s[1]}`, speak: s[0] });
    });
  }
  return newQuiz(shuffle(qs));
}

export function buildReview(course: Course, p: Progress): QuizState {
  const qs = shuffle(dueWords(course, p).slice(0, REVIEW_MAX)).map(w => {
    const pool = [...wordsUpTo(course, w.lesson), ...interestWords(course, p)];
    return typable(w) && Math.random() < 0.4 ? typeQuestion(course, w, pool) : vocabQuestion(course, w, pool);
  });
  return newQuiz(qs, true);
}

export function checkTyped(q: TypeQuestion, value: string) {
  const t = normalize(value);
  const exact = q.ok.includes(t);
  const typo = !exact && q.ok.some(o => o.length >= 5 && editDistance(t, o) <= 1);
  return { right: exact || typo, typo };
}

export function answerQuiz(z: QuizState, right: boolean): QuizState {
  const q = z.queue[z.pos];
  const next = { ...z, first: z.first + (right && !q.again ? 1 : 0) };
  if (!right) {
    next.queue = [...z.queue, { ...(q.type === "choice" ? shuffleChoices(q) : q), again: true, review: false }];
    next.retry++;
  }
  return next;
}

export function recordAnswer(p: Progress, q: Question, right: boolean) {
  if (q.wid && !q.again) schedule(p, q.wid, right);
  if (right && q.wid) p.learned[q.wid] = true;
  countExercise(p);
}

export const correctAnswer = (q: Question) => q.type === "choice" ? q.o[q.a] : q.show;
