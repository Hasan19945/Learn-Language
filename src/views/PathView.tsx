import { useState } from "react";
import { PlacementCard, ReviewCard } from "../components/Cards";
import { Icon } from "../components/Icon";
import { Nav } from "../components/Nav";
import { Ring } from "../components/Progress";
import { accountName } from "../lib/accounts";
import { today } from "../lib/dates";
import { allDone, currentLevel, isUnlocked, lessonProgress, lessonsInLevel, PASS, positionInLevel, streak } from "../lib/progress";
import { useApp } from "../state/AppContext";
import type { LevelInfo } from "../types";

export function PathView() {
  const { course, progress, account, go, openLevel, setOpenLevel } = useApp();
  const [lockMsg, setLockMsg] = useState("");
  const goal = progress.profile!.goal, done = progress.days[today()] || 0, days = streak(progress);
  const current = currentLevel(course, progress);
  const open = openLevel ?? current;

  const toggle = (li: number) => {
    setOpenLevel(open === li ? -1 : li);
    setLockMsg("");
  };

  return (
    <>
      <main className="wrap fade">
        <header className="top">
          <span className="brand">Adım Adım <b>{course.name}</b></span>
          <span className="row" style={{ gap: 6 }}>
            <button className="chip acc" onClick={() => go({ name: "course" })} aria-label="Dili değiştir">{course.lang}</button>
            <span className="chip">{course.levels[current].id}</span>
            <button className="chip acc" onClick={() => go({ name: "settings" })} aria-label="Hesap ayarları">{accountName(account)}</button>
          </span>
        </header>
        <section className="panel goal">
          <Ring value={done} max={goal} />
          <div>
            <h3>Bugünkü hedef: {Math.min(done, goal)} / {goal}</h3>
            <p className="muted">
              {done >= goal ? "Hedef tamam. Bravo!" : `${goal - done} alıştırma kaldı.`}
              {days > 0 && ` · ${days} gün üst üste hedef`}
            </p>
          </div>
        </section>
        <ReviewCard />
        <PlacementCard />
        <section className="stack">
          {course.levels.map((info, li) => (
            <LevelBlock key={info.id} info={info} isOpen={open === li} onToggle={() => toggle(li)}
              onLocked={() => setLockMsg(`Bu ders kilitli. Önce önceki dersin testini en az %${PASS * 100} ile geç ya da seviye testiyle uygun seviyeni aç.`)} />
          ))}
          {lockMsg && <p className="panel muted fade">{lockMsg}</p>}
          {allDone(course, progress) && (
            <div className="panel">
              <h3>Tebrikler, bütün seviyelerdeki (A0–{course.levels.at(-1)!.id}) dersleri tamamladın!</h3>
              <p className="muted">Kartlarla ve testlerle tekrar yapmaya devam edebilirsin.</p>
            </div>
          )}
        </section>
      </main>
      <Nav />
    </>
  );
}

interface LevelBlockProps {
  info: LevelInfo;
  isOpen: boolean;
  onToggle: () => void;
  onLocked: () => void;
}

function LevelBlock({ info, isOpen, onToggle, onLocked }: LevelBlockProps) {
  const { course, progress, go } = useApp();
  const items = lessonsInLevel(course, info.id);
  const doneCount = items.filter(([L]) => lessonProgress(progress, L.id).done).length;
  const anyOpen = items.some(([, i]) => isUnlocked(course, progress, i));

  return (
    <>
      <button className="lvl" onClick={onToggle} aria-expanded={isOpen}>
        <span className="lvl-id">{info.id}</span>
        <span className="txt">
          <strong>{info.title}</strong>
          <span className="muted" style={{ fontSize: ".85rem" }}>{info.d}</span>
        </span>
        <span className={`chip ${doneCount === items.length ? "ok" : ""}`}>
          {anyOpen
            ? `${doneCount} / ${items.length}`
            : <><Icon name="lock" style={{ width: 12, height: 12, verticalAlign: -1 }} /> Kilitli</>}
        </span>
      </button>
      {isOpen && (
        <div className="path">
          {items.map(([L, i]) => {
            const s = lessonProgress(progress, L.id), open = isUnlocked(course, progress, i);
            return (
              <button key={L.id} className={`node ${s.done ? "done" : open ? "open" : "locked"}`}
                onClick={() => open ? go({ name: "lesson", index: i }) : onLocked()} aria-disabled={open ? undefined : true}>
                <span className="ic"><Icon name={s.done ? "check" : L.icon} /></span>
                <span className="txt">
                  <span className="eyebrow">{L.level} · Ders {positionInLevel(course, i)} · {L.no}</span>
                  <strong>{L.title}</strong>
                  <span className="muted" style={{ fontSize: ".88rem" }}>{L.words.length} kelime ve ifade</span>
                </span>
                {s.done
                  ? <span className="chip ok">%{Math.round(s.best * 100)}</span>
                  : open
                    ? <span className="chip go">{s.attempts || s.seen ? "Devam" : "Başla"}</span>
                    : <span className="chip">Kilitli</span>}
              </button>
            );
          })}
        </div>
      )}
    </>
  );
}
