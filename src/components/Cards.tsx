import { formatDayMonth } from "../lib/dates";
import { Emphasis } from "./Emphasis";
import { dueWords } from "../lib/progress";
import { useApp } from "../state/AppContext";

export function PlacementCard() {
  const { course, progress, go, t } = useApp();
  const last = progress.placements?.at(-1);
  return (
    <section className="panel row" style={{ justifyContent: "space-between" }}>
      <div style={{ flex: 1, minWidth: 200 }}>
        <p className="eyebrow">{t.cards.placementEyebrow}</p>
        <p>
          {last
            ? <Emphasis text={t.cards.lastResult(course.levels[last.rec].id, last.date)} part={course.levels[last.rec].id} />
            : t.cards.placementPrompt}
        </p>
      </div>
      <button className="btn" onClick={() => go({ name: "placement" })}>{last ? t.cards.remeasure : t.cards.measure}</button>
    </section>
  );
}

export function ReviewCard() {
  const { course, progress, go, t } = useApp();
  const n = dueWords(course, progress).length;
  const dues = Object.values(progress.srs).map(x => x.due).sort();
  if (!n && !dues.length) return null;
  return (
    <section className="panel row" style={{ justifyContent: "space-between" }}>
      <div style={{ flex: 1, minWidth: 200 }}>
        <p className="eyebrow">{t.cards.reviewEyebrow}</p>
        <p>{n ? <Emphasis text={t.cards.reviewDue(n)} part={String(n)} /> : t.cards.reviewNone(formatDayMonth(dues[0], t.locale))}</p>
      </div>
      {n > 0 && <button className="btn" onClick={() => go({ name: "review" })}>{t.cards.reviewButton}</button>}
    </section>
  );
}
