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
  const { course, go } = useApp();
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
    ? `Geçmek için en az %${PASS * 100} gerekiyor. Konuyu tekrar okuyup yeniden dene; sorular her seferinde karışık gelir.`
    : !next ? `${L.level} seviyesinin son dersini de geçtin. Tebrikler!`
    : next.level !== L.level ? `${L.level} seviyesinin son dersini geçtin. ${next.level} seviyesi açıldı!`
    : `${next.level} · Ders ${positionInLevel(course, index + 1)} açıldı.`;

  return (
    <>
      <section className="panel stack fade" style={{ textAlign: "center" }}>
        <p className="eyebrow">Test sonucu</p>
        <p ref={score} className={`score ${pass ? "cheer" : ""}`}>%{Math.round(p * 100)}</p>
        <p>{quiz.first} / {quiz.total} soruyu ilk denemede doğru cevapladın.</p>
        <p className="muted">{message}</p>
      </section>
      <section className="panel stack">
        <h3>Hızlı tekrar</h3>
        <ul style={{ margin: 0, paddingLeft: 20, display: "grid", gap: 6 }}>
          {L.review.map(r => <li key={r}>{r}</li>)}
        </ul>
      </section>
      <div className="stack">
        {pass && next && (
          <button className="btn block" onClick={() => go({ name: "lesson", index: index + 1 })}>Sonraki ders: {next.title}</button>
        )}
        <button className={`btn ${pass ? "ghost" : ""} block`} onClick={onRetry}>Testi yeniden çöz</button>
        <button className="btn ghost block" onClick={onRead}>Konuyu tekrar oku</button>
      </div>
    </>
  );
}
