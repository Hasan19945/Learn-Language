import { useState } from "react";
import { BackHeader } from "../components/Nav";
import { Bar } from "../components/Progress";
import { today } from "../lib/dates";
import { countExercise, startLevel } from "../lib/progress";
import { shuffleChoices } from "../lib/quiz";
import { pick } from "../lib/random";
import { useApp } from "../state/AppContext";
import type { Course, QuizItem } from "../types";

const PER_LEVEL = 5, PASS_COUNT = 4;

interface LevelScore {
  lv: number;
  correct: number;
}

interface Run {
  lv: number;
  qs: QuizItem[];
  pos: number;
  picked: number | null;
  correct: number;
  scores: LevelScore[];
  rec: number | null;
}

const levelQuestions = (course: Course, lv: number) => pick(course.placement[course.levels[lv].id], PER_LEVEL).map(shuffleChoices);

const newRun = (course: Course): Run => ({ lv: 0, qs: levelQuestions(course, 0), pos: 0, picked: null, correct: 0, scores: [], rec: null });

export function PlacementView() {
  const { course, progress, update, go, setOpenLevel, t } = useApp();
  const [run, setRun] = useState<Run | null>(null);
  const levels = course.levels;

  const start = () => {
    setRun(newRun(course));
    scrollTo(0, 0);
  };

  if (!run) {
    const history = (progress.placements || []).slice(-3).reverse();
    return (
      <main className="wrap fade">
        <BackHeader eyebrow={t.placement.eyebrow} title={t.placement.title} />
        <p>{t.placement.intro(PER_LEVEL, PASS_COUNT)}</p>
        <div className="stack" style={{ gap: 8 }}>
          {levels.map(l => (
            <div key={l.id} className="row" style={{ flexWrap: "nowrap" }}>
              <span className="lvl-id sm">{l.id}</span><span className="muted">{l.d}</span>
            </div>
          ))}
        </div>
        <p className="muted" style={{ fontSize: ".9rem" }}>{t.placement.hint}</p>
        {history.length > 0 && (
          <section className="panel stack">
            <h3>{t.placement.history}</h3>
            {history.map((h, i) => (
              <div key={i} className="row" style={{ justifyContent: "space-between" }}>
                <span>{h.date}</span><span className="chip">{levels[h.rec].id}</span>
              </div>
            ))}
          </section>
        )}
        <button className="btn block" onClick={start}>{t.placement.start}</button>
      </main>
    );
  }

  if (run.rec !== null) {
    const rec = run.rec;
    const apply = () => {
      if (rec > startLevel(progress)) update(p => { p.startLevel = rec; });
      setOpenLevel(rec);
      go({ name: "path" });
    };
    return (
      <main className="wrap fade">
        <BackHeader eyebrow={t.placement.eyebrow} title={t.placement.resultTitle} />
        <PlacementResult run={run} rec={rec} onApply={apply} onRestart={start} />
      </main>
    );
  }

  const q = run.qs[run.pos], answered = run.picked !== null, right = answered && run.picked === q.a;

  const answer = (i: number) => {
    if (answered) return;
    setRun({ ...run, picked: i, correct: run.correct + (i === q.a ? 1 : 0) });
    update(countExercise);
  };

  const next = () => {
    const pos = run.pos + 1;
    if (pos < PER_LEVEL) return setRun({ ...run, pos, picked: null });
    const scores = [...run.scores, { lv: run.lv, correct: run.correct }];
    if (run.correct >= PASS_COUNT && run.lv < levels.length - 1) {
      setRun({ ...run, lv: run.lv + 1, qs: levelQuestions(course, run.lv + 1), pos: 0, picked: null, correct: 0, scores });
    } else {
      const rec = Math.min(scores.filter(x => x.correct >= PASS_COUNT).length, levels.length - 1);
      setRun({ ...run, pos, picked: null, scores, rec });
      update(p => {
        p.placements = [...(p.placements || []), { date: today(), rec, scores: scores.map(x => x.correct) }].slice(-10);
      });
    }
    scrollTo(0, 0);
  };

  return (
    <main className="wrap fade">
      <BackHeader eyebrow={t.placement.eyebrow} title={t.placement.section(levels[run.lv].id, levels[run.lv].title)} />
      <div className="row" style={{ justifyContent: "space-between" }}>
        <span className="muted">{t.placement.counter(run.pos + 1, PER_LEVEL, run.correct)}</span>
        <span className="muted">{t.placement.total(run.scores.length * PER_LEVEL + run.pos)}</span>
      </div>
      <Bar value={run.pos / PER_LEVEL} />
      <section className="stack fade" aria-live="polite">
        <h2>{q.q}</h2>
        <div className="opts">
          {q.o.map((o, i) => (
            <button key={i} disabled={answered} onClick={() => answer(i)}
              className={`opt ${answered && i === q.a ? "right" : answered && i === run.picked ? "wrong" : ""}`}>
              {o}
            </button>
          ))}
        </div>
        {answered ? (
          <>
            <div className={`fb ${right ? "ok" : "bad"}`}>
              <h3>{right ? t.question.right : run.picked! < 0 ? t.placement.answer(q.o[q.a]) : t.question.correctAnswer(q.o[q.a])}</h3>
              <p>{q.e}</p>
            </div>
            <button className="btn block" onClick={next}>{t.continue}</button>
          </>
        ) : (
          <button className="btn ghost block" onClick={() => answer(-1)}>{t.placement.dontKnow}</button>
        )}
      </section>
    </main>
  );
}

function PlacementResult({ run, rec, onApply, onRestart }: { run: Run; rec: number; onApply: () => void; onRestart: () => void }) {
  const { course, progress, t } = useApp();
  const levels = course.levels, info = levels[rec];
  const allPassed = run.scores.length === levels.length && run.scores.every(x => x.correct >= PASS_COUNT);
  const why = allPassed
    ? t.placement.allPassed(levels.at(-1)!.id)
    : rec === 0
      ? t.placement.needPractice
      : t.placement.passedUpTo(levels[rec - 1].id, info.id, run.scores.at(-1)!.correct, PER_LEVEL);
  const raises = rec > startLevel(progress);

  return (
    <>
      <section className="panel stack fade" style={{ textAlign: "center" }}>
        <p className="eyebrow">{t.placement.recommended}</p>
        <p className="score">{info.id}</p>
        <h3>{info.title}</h3>
        <p className="muted">{info.d}</p>
        <p>{why}</p>
      </section>
      <section className="panel stack">
        <h3>{t.placement.sections}</h3>
        {run.scores.map(x => (
          <div key={x.lv} className="stack" style={{ gap: 6 }}>
            <div className="row" style={{ justifyContent: "space-between" }}>
              <strong>{levels[x.lv].id}</strong>
              <span className={`chip ${x.correct >= PASS_COUNT ? "ok" : ""}`}>
                {x.correct} / {PER_LEVEL} · {x.correct >= PASS_COUNT ? t.placement.passed : t.placement.failed}
              </span>
            </div>
            <Bar value={x.correct / PER_LEVEL} />
          </div>
        ))}
      </section>
      <div className="stack">
        {raises ? (
          <>
            <button className="btn block" onClick={onApply}>{t.placement.startFrom(info.id)}</button>
            <p className="muted" style={{ fontSize: ".88rem" }}>{t.placement.startFromHint(info.id)}</p>
          </>
        ) : (
          <>
            <p className="muted" style={{ fontSize: ".9rem" }}>{t.placement.alreadyOpen(info.id)}</p>
            <button className="btn block" onClick={onApply}>{t.backToPath}</button>
          </>
        )}
        <button className="btn ghost block" onClick={onRestart}>{t.placement.restart}</button>
      </div>
    </>
  );
}
