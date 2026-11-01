import { useEffect, useRef } from "react";
import { celebrate } from "../../lib/celebrate";
import { PASS, positionInLevel } from "../../lib/progress";
import type { QuizState } from "../../lib/quiz";
import { useApp } from "../../state/AppContext";

export type Party = "big" | "small" | null;

interface Props {
  index: number;
  quiz: QuizState;
  party: Party;
  onRetry: () => void;
  onRead: () => void;
}

export function QuizResult({ index, quiz, party, onRetry, onRead }: Props) {
  const { course, go, t } = useApp();
  const score = useRef<HTMLParagraphElement>(null);
  const celebrated = useRef(false);
  const L = course.lessons[index], next = course.lessons[index + 1];
  const p = quiz.first / quiz.total, pass = p >= PASS;

  useEffect(() => {
    if (!party || celebrated.current) return;
    celebrated.current = true;
    celebrate(party === "big", score.current);
  }, [party]);

  const message = !pass
    ? t.result.fail(PASS * 100)
    : !next ? t.result.lastOfAll(L.level)
    : next.level !== L.level ? t.result.lastOfLevel(L.level, next.level)
    : t.result.opened(next.level, positionInLevel(course, index + 1));

  return (
    <>
      <section className="panel stack fade" style={{ textAlign: "center" }}>
        <p className="eyebrow">{t.result.eyebrow}</p>
        <p ref={score} className={`score ${pass ? "cheer" : ""}`}>{t.percent(Math.round(p * 100))}</p>
        <p>{t.result.firstTry(quiz.first, quiz.total)}</p>
        <p className="muted">{message}</p>
      </section>
      <section className="panel stack">
        <h3>{t.result.quickReview}</h3>
        <ul style={{ margin: 0, paddingLeft: 20, display: "grid", gap: 6 }}>
          {L.review.map(r => <li key={r}>{r}</li>)}
        </ul>
      </section>
      <div className="stack">
        {pass && next && (
          <button className="btn block" onClick={() => go({ name: "lesson", index: index + 1 })}>{t.result.nextLesson(next.title)}</button>
        )}
        <button className={`btn ${pass ? "ghost" : ""} block`} onClick={onRetry}>{t.result.retry}</button>
        <button className="btn ghost block" onClick={onRead}>{t.result.reread}</button>
      </div>
    </>
  );
}
