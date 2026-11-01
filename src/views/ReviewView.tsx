import { useState } from "react";
import { BackHeader } from "../components/Nav";
import { QuestionCard } from "../components/QuestionCard";
import { dueWords } from "../lib/progress";
import { buildReview } from "../lib/quiz";
import { useApp } from "../state/AppContext";

export function ReviewView() {
  const { course, progress, go, t } = useApp();
  const [quiz, setQuiz] = useState(() => buildReview(course, progress));
  const [run, setRun] = useState(0);

  const restart = () => {
    setQuiz(buildReview(course, progress));
    setRun(run + 1);
    scrollTo(0, 0);
  };

  const next = () => {
    setQuiz({ ...quiz, pos: quiz.pos + 1 });
    scrollTo(0, 0);
  };

  const left = dueWords(course, progress).length;

  return (
    <main className="wrap fade">
      <BackHeader eyebrow={t.review.eyebrow} title={t.review.title} />
      {quiz.pos < quiz.queue.length ? (
        <QuestionCard key={`${run}-${quiz.pos}`} quiz={quiz} setQuiz={setQuiz} onNext={next} />
      ) : (
        <>
          <section className="panel stack fade" style={{ textAlign: "center" }}>
            <p className="eyebrow">{t.review.doneEyebrow}</p>
            <p className="score">{t.percent(Math.round(quiz.first / quiz.total * 100))}</p>
            <p>{t.review.firstTry(quiz.first, quiz.total)}</p>
            <p className="muted">{t.review.explain}</p>
          </section>
          <div className="stack">
            {left > 0 && <button className="btn block" onClick={restart}>{t.review.more(left)}</button>}
            <button className={`btn ${left ? "ghost" : ""} block`} onClick={() => go({ name: "path" })}>{t.review.back}</button>
          </div>
        </>
      )}
    </main>
  );
}
