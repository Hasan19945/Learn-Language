import { useState } from "react";
import { BackHeader } from "../components/Nav";
import { QuestionCard } from "../components/QuestionCard";
import { dueWords } from "../lib/progress";
import { buildReview } from "../lib/quiz";
import { useApp } from "../state/AppContext";

export function ReviewView() {
  const { course, progress, go } = useApp();
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
      <BackHeader eyebrow="Günlük tekrar" title="Öğrendiğin kelimeleri tekrar et" />
      {quiz.pos < quiz.queue.length ? (
        <QuestionCard key={`${run}-${quiz.pos}`} quiz={quiz} setQuiz={setQuiz} onNext={next} />
      ) : (
        <>
          <section className="panel stack fade" style={{ textAlign: "center" }}>
            <p className="eyebrow">Tekrar bitti</p>
            <p className="score">%{Math.round(quiz.first / quiz.total * 100)}</p>
            <p>{quiz.first} / {quiz.total} kelimeyi ilk denemede doğru hatırladın.</p>
            <p className="muted">Doğru hatırladığın kelimeler daha ileri bir tarihte tekrar sorulacak. Yanlış yaptıkların yarın tekrar karşına çıkacak.</p>
          </section>
          <div className="stack">
            {left > 0 && <button className="btn block" onClick={restart}>Devam et ({left} kelime daha)</button>}
            <button className={`btn ${left ? "ghost" : ""} block`} onClick={() => go({ name: "path" })}>Öğrenme yoluna dön</button>
          </div>
        </>
      )}
    </main>
  );
}
