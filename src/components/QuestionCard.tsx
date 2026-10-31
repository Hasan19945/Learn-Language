import { useRef, useState } from "react";
import { answerQuiz, checkTyped, correctAnswer, recordAnswer, type ChoiceQuestion, type OrderQuestion, type QuizState, type TypeQuestion } from "../lib/quiz";
import { useApp } from "../state/AppContext";
import { Bar } from "./Progress";
import { SayButton } from "./SayButton";
import { PicTile } from "./Words";

interface Result {
  right: boolean;
  picked?: number;
  typo?: boolean;
}

interface Props {
  quiz: QuizState;
  setQuiz: (z: QuizState) => void;
  onNext: () => void;
}

const markClass = (result: Result | null) => result ? (result.right ? "right" : "wrong") : "";

export function QuestionCard({ quiz, setQuiz, onNext }: Props) {
  const { update } = useApp();
  const [result, setResult] = useState<Result | null>(null);
  const q = quiz.queue[quiz.pos];

  const submit = (right: boolean, extra: Omit<Result, "right"> = {}) => {
    if (result) return;
    setResult({ right, ...extra });
    setQuiz(answerQuiz(quiz, right));
    update(p => recordAnswer(p, q, right));
  };

  const shown = correctAnswer(q);

  return (
    <>
      <div className="row" style={{ justifyContent: "space-between" }}>
        <span className="muted">
          Soru {Math.min(quiz.pos + 1, quiz.queue.length)} / {quiz.queue.length}
          {quiz.retry > 0 && ` · ${quiz.retry} tekrar sorusu`}
        </span>
        <span className="muted">İlk denemede doğru: {quiz.first}</span>
      </div>
      <Bar value={quiz.pos / quiz.queue.length} />
      <section className="stack fade" aria-live="polite">
        {q.review ? <p className="eyebrow">Önceki derslerden tekrar</p> : q.again && <p className="eyebrow">Tekrar deneyelim</p>}
        {q.pic && <PicTile pic={q.pic} lit={q.lit} big />}
        <div className="row" style={{ flexWrap: "nowrap" }}>
          <h2 style={{ flex: 1 }}>{q.q}</h2>
          {q.speak && <SayButton text={q.speak} />}
        </div>
        {q.type === "type" ? <TypeAnswer q={q} result={result} submit={submit} />
          : q.type === "order" ? <OrderAnswer q={q} result={result} submit={submit} />
          : <ChoiceAnswer q={q} result={result} submit={submit} />}
        {result && (
          <>
            <div className={`fb ${result.right ? "ok" : "bad"}`}>
              <h3>{result.right ? (result.typo ? "Neredeyse doğru!" : "Doğru!") : `Doğru cevap: ${shown}`}</h3>
              {result.right && result.typo && <p>Küçük bir yazım hatası var. Doğrusu: <b>{shown}</b></p>}
              <p>{q.e}</p>
              {!result.right && (
                <p className="muted" style={{ fontSize: ".88rem", marginTop: 6 }}>
                  Bu soru {quiz.review ? "bu tekrarın" : "testin"} sonunda tekrar sorulacak.
                </p>
              )}
            </div>
            <button className="btn block" onClick={onNext} autoFocus={q.type === "type"}>Devam</button>
          </>
        )}
      </section>
    </>
  );
}

interface AnswerProps<Q> {
  q: Q;
  result: Result | null;
  submit: (right: boolean, extra?: Omit<Result, "right">) => void;
}

function ChoiceAnswer({ q, result, submit }: AnswerProps<ChoiceQuestion>) {
  return (
    <div className="opts">
      {q.o.map((o, i) => (
        <button key={i} disabled={!!result} onClick={() => submit(i === q.a, { picked: i })}
          className={`opt ${result && i === q.a ? "right" : result && i === result.picked ? "wrong" : ""}`}>
          {o}
        </button>
      ))}
    </div>
  );
}

function TypeAnswer({ q, result, submit }: AnswerProps<TypeQuestion>) {
  const { course } = useApp();
  const [typed, setTyped] = useState("");
  const input = useRef<HTMLInputElement>(null);
  const letters = course.letters || [];

  const insert = (t: string) => {
    const el = input.current;
    if (!el) return;
    const start = el.selectionStart ?? typed.length, end = el.selectionEnd ?? start;
    setTyped(typed.slice(0, start) + t + typed.slice(end));
    requestAnimationFrame(() => {
      el.focus();
      el.setSelectionRange(start + t.length, start + t.length);
    });
  };

  return (
    <form className="stack" onSubmit={e => {
      e.preventDefault();
      const r = checkTyped(q, typed);
      submit(r.right, { typo: r.typo });
    }}>
      <input ref={input} className={`input ${markClass(result)}`} value={typed} onChange={e => setTyped(e.target.value)}
        placeholder="Cevabını yaz" aria-label="Cevabın" autoComplete="off" autoCapitalize="off" autoCorrect="off"
        spellCheck={false} disabled={!!result} required autoFocus />
      {!result && (
        <>
          {letters.length > 0 && (
            <div className="row">
              {letters.map(t => (
                <button key={t} type="button" className="tok" onClick={() => insert(t)} aria-label={`${t} harfini ekle`}>{t}</button>
              ))}
            </div>
          )}
          <div className="row">
            <button type="button" className="btn ghost" onClick={() => { setTyped(""); submit(false); }}>Bilmiyorum</button>
            <button className="btn" style={{ flex: 1 }}>Kontrol et</button>
          </div>
        </>
      )}
    </form>
  );
}

function OrderAnswer({ q, result, submit }: AnswerProps<OrderQuestion>) {
  const [built, setBuilt] = useState<number[]>([]);
  return (
    <>
      <div className={`built ${markClass(result)}`} aria-label="Kurduğun cümle">
        {built.length
          ? built.map((k, p) => (
            <button key={p} className="tok" disabled={!!result} onClick={() => setBuilt(built.filter((_, i) => i !== p))}>{q.mix[k]}</button>
          ))
          : <span className="muted">Kelimelere sırayla dokunarak cümleyi kur</span>}
      </div>
      {!result && (
        <>
          <div className="row">
            {q.mix.map((t, k) => built.includes(k)
              ? <button key={k} className="tok used" disabled aria-hidden="true">{t}</button>
              : <button key={k} className="tok" onClick={() => setBuilt([...built, k])}>{t}</button>)}
          </div>
          <button className="btn block" disabled={built.length !== q.mix.length}
            onClick={() => submit(built.map(k => q.mix[k]).join(" ") === q.words.join(" "))}>
            Kontrol et
          </button>
        </>
      )}
    </>
  );
}
