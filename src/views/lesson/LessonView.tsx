import { useState } from "react";
import { BackHeader } from "../../components/Nav";
import { QuestionCard } from "../../components/QuestionCard";
import { countExercise, editLesson, lessonProgress, lessonWords, PASS, positionInLevel } from "../../lib/progress";
import { buildQuiz, type QuizState } from "../../lib/quiz";
import { useApp } from "../../state/AppContext";
import { CardsStep, newDeck, type CardSide } from "./CardsStep";
import { LearnStep } from "./LearnStep";
import { QuizResult, type Party } from "./QuizResult";

type Step = "learn" | "cards" | "quiz";

const TABS: [Step, string][] = [["learn", "1 · Öğren"], ["cards", "2 · Kartlar"], ["quiz", "3 · Test"]];

export function LessonView({ index }: { index: number }) {
  const { course, progress, update } = useApp();
  const L = course.lessons[index];
  const s = lessonProgress(progress, L.id);
  const skip = progress.profile?.level === "a0plus";

  const [step, setStep] = useState<Step>(() => s.done || !s.seen ? "learn" : s.cards ? "quiz" : "cards");
  const [side, setSide] = useState<CardSide>("target");
  const [deck, setDeck] = useState(() => newDeck(lessonWords(course, progress, L)));
  const [quiz, setQuiz] = useState<QuizState>(() => buildQuiz(course, progress, index));
  const [party, setParty] = useState<Party>(null);
  const [run, setRun] = useState(0);

  const can: Record<Step, boolean> = { learn: true, cards: s.seen || skip, quiz: s.cards || skip };

  const goStep = (next: Step) => {
    setStep(next);
    if (next === "cards") setDeck(newDeck(lessonWords(course, progress, L)));
    if (next === "quiz") {
      setQuiz(buildQuiz(course, progress, index));
      setParty(null);
      setRun(run + 1);
    }
    scrollTo(0, 0);
  };

  const finishLearn = () => {
    update(p => { editLesson(p, L.id).seen = true; });
    goStep("cards");
  };

  const again = () => {
    setDeck({ ...deck, cards: [...deck.cards.slice(1), deck.cards[0]], flipped: false });
    update(countExercise);
  };

  const know = () => {
    const cards = deck.cards.slice(1);
    setDeck({ ...deck, cards, known: deck.known + 1, flipped: false });
    update(p => {
      countExercise(p);
      if (!cards.length) editLesson(p, L.id).cards = true;
    });
  };

  const nextQuestion = () => {
    const z = { ...quiz, pos: quiz.pos + 1 };
    setQuiz(z);
    if (z.pos >= z.queue.length) {
      const score = z.first / z.total;
      update(p => {
        const st = editLesson(p, L.id);
        st.attempts++;
        st.best = Math.max(st.best, score);
        if (score >= PASS) st.done = true;
      });
      if (score >= PASS) {
        const nx = course.lessons[index + 1];
        setParty(!nx || nx.level !== L.level ? "big" : "small");
      }
    }
    scrollTo(0, 0);
  };

  return (
    <main className="wrap fade">
      <BackHeader eyebrow={`${L.level} · Ders ${positionInLevel(course, index)} · ${L.no}`} title={L.title} />
      <div className="steps" role="tablist">
        {TABS.map(([k, label]) => (
          <button key={k} onClick={() => goStep(k)} aria-current={step === k ? "step" : undefined} disabled={!can[k]}>{label}</button>
        ))}
      </div>
      {step === "learn" && <LearnStep lesson={L} onDone={finishLearn} />}
      {step === "cards" && (
        <CardsStep deck={deck} side={side}
          onSide={next => { setSide(next); setDeck({ ...deck, flipped: false }); }}
          onFlip={() => setDeck({ ...deck, flipped: !deck.flipped })}
          onAgain={again} onKnow={know}
          onRestart={() => setDeck(newDeck(lessonWords(course, progress, L)))}
          onQuiz={() => goStep("quiz")} />
      )}
      {step === "quiz" && (quiz.pos >= quiz.queue.length
        ? <QuizResult index={index} quiz={quiz} party={party} onRetry={() => goStep("quiz")} onRead={() => goStep("learn")} />
        : <QuestionCard key={`${run}-${quiz.pos}`} quiz={quiz} setQuiz={setQuiz} onNext={nextQuestion} />)}
    </main>
  );
}
