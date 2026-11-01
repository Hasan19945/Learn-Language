import { PlacementCard } from "../components/Cards";
import { Nav } from "../components/Nav";
import { Bar } from "../components/Progress";
import { ShortWordRow } from "../components/Words";
import { allWords, currentLevel, isUnlocked, lessonProgress, lessonsInLevel, positionInLevel, streak } from "../lib/progress";
import { useApp } from "../state/AppContext";

export function ProgressView() {
  const { course, progress, go, t } = useApp();
  const words = allWords(course).filter(w => progress.learned[w.id]);
  const doneCount = course.lessons.filter(L => lessonProgress(progress, L.id).done).length;
  const groups = course.lessons
    .map((L, i) => ({ L, i, ws: words.filter(w => w.lesson === L.id && !w.interest) }))
    .filter(g => g.ws.length);
  const interestLearned = words.filter(w => w.interest);
  const total = Object.values(progress.days).reduce((a, b) => a + b, 0);
  const currentId = course.levels[currentLevel(course, progress)].id;

  return (
    <>
      <main className="wrap fade">
        <header>
          <p className="eyebrow">{t.progress.eyebrow}</p>
          <h1>{t.progress.title}</h1>
        </header>
        <div className="stats">
          <div className="stat"><b>{doneCount} / {course.lessons.length}</b><span className="muted">{t.progress.lessonsDone(course.levels.at(-1)!.id)}</span></div>
          <div className="stat"><b>{words.length}</b><span className="muted">{t.progress.wordsLearned}</span></div>
          <div className="stat"><b>{streak(progress)}</b><span className="muted">{t.progress.streak}</span></div>
          <div className="stat"><b>{total}</b><span className="muted">{t.progress.exercises}</span></div>
        </div>
        <p className="muted" style={{ fontSize: ".9rem" }}>{t.progress.learnedHint}</p>
        <PlacementCard />
        <section className="panel stack">
          <h3>{t.progress.lessons}</h3>
          {course.levels.map(info => {
            const items = lessonsInLevel(course, info.id);
            const dn = items.filter(([L]) => lessonProgress(progress, L.id).done).length;
            return (
              <details key={info.id} className="grp" open={info.id === currentId}>
                <summary>
                  <strong>{info.id} · {info.title}</strong>
                  <span className={`chip ${dn === items.length ? "ok" : ""}`}>{dn} / {items.length}</span>
                </summary>
                <div className="stack">
                  {items.map(([L, i]) => {
                    const s = lessonProgress(progress, L.id);
                    return (
                      <div key={L.id} className="stack" style={{ gap: 6 }}>
                        <div className="row" style={{ justifyContent: "space-between" }}>
                          <span><strong>{positionInLevel(course, i)}. {L.title}</strong> <span className="muted">· {L.no}</span></span>
                          <span className={`chip ${s.done ? "ok" : ""}`}>
                            {s.done ? t.progress.done : s.attempts ? t.progress.attempts(s.attempts) : isUnlocked(course, progress, i) ? t.progress.open : t.locked}
                          </span>
                        </div>
                        <Bar value={s.best} />
                        <span className="muted" style={{ fontSize: ".85rem" }}>{t.progress.best(Math.round(s.best * 100))}</span>
                      </div>
                    );
                  })}
                </div>
              </details>
            );
          })}
        </section>
        <section className="panel stack">
          <h3>{t.progress.learnedTitle}</h3>
          {words.length ? (
            <>
              {groups.map(({ L, i, ws }) => (
                <div key={L.id}>
                  <p className="eyebrow">{t.lessonEyebrow(L.level, positionInLevel(course, i), L.title)}</p>
                  <div className="words">{ws.map(w => <ShortWordRow key={w.id} word={w} />)}</div>
                </div>
              ))}
              {interestLearned.length > 0 && (
                <div>
                  <p className="eyebrow">{t.progress.interests}</p>
                  <div className="words">{interestLearned.map(w => <ShortWordRow key={w.id} word={w} />)}</div>
                </div>
              )}
            </>
          ) : (
            <>
              <p className="muted">{t.progress.empty}</p>
              <button className="btn" onClick={() => go({ name: "path" })}>{t.progress.goToPath}</button>
            </>
          )}
        </section>
      </main>
      <Nav />
    </>
  );
}
