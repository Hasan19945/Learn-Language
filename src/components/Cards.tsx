import { formatDayMonth } from "../lib/dates";
import { dueWords } from "../lib/progress";
import { useApp } from "../state/AppContext";

export function PlacementCard() {
  const { course, progress, go } = useApp();
  const last = progress.placements?.at(-1);
  return (
    <section className="panel row" style={{ justifyContent: "space-between" }}>
      <div style={{ flex: 1, minWidth: 200 }}>
        <p className="eyebrow">Seviye testi</p>
        <p>
          {last
            ? <>Son sonucun: <b>{course.levels[last.rec].id}</b> ({last.date}). İstediğin zaman tekrar ölçebilirsin.</>
            : "Seviyeni bilmiyor musun? Kısa bir testle sana uygun seviyeyi bul."}
        </p>
      </div>
      <button className="btn" onClick={() => go({ name: "placement" })}>{last ? "Yeniden ölç" : "Seviyemi ölç"}</button>
    </section>
  );
}

export function ReviewCard() {
  const { course, progress, go } = useApp();
  const n = dueWords(course, progress).length;
  const dues = Object.values(progress.srs).map(x => x.due).sort();
  if (!n && !dues.length) return null;
  return (
    <section className="panel row" style={{ justifyContent: "space-between" }}>
      <div style={{ flex: 1, minWidth: 200 }}>
        <p className="eyebrow">Günlük tekrar</p>
        <p>
          {n
            ? <><b>{n}</b> kelimenin tekrar zamanı geldi. Unutmadan önce tekrar etmek, kelimeyi kalıcı hale getirir.</>
            : `Bugün tekrar edilecek kelime yok. Sıradaki tekrar: ${formatDayMonth(dues[0])}.`}
        </p>
      </div>
      {n > 0 && <button className="btn" onClick={() => go({ name: "review" })}>Tekrar et</button>}
    </section>
  );
}
