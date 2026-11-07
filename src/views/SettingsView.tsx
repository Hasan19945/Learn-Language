import { useState, useSyncExternalStore } from "react";
import { PlacementCard } from "../components/Cards";
import { Choice } from "../components/Choice";
import { Emphasis } from "../components/Emphasis";
import { Nav } from "../components/Nav";
import { FLOWS, GOALS } from "../data/options";
import { accountName, isAccountId } from "../lib/accounts";
import { freshProgress, positionInLevel } from "../lib/progress";
import { progressSync } from "../lib/sync";
import { useApp } from "../state/AppContext";
import { AccountPanels } from "./AccountPanels";

export function SettingsView() {
  const { account, course, progress, update, voice, go, logout, t } = useApp();
  const sync = useSyncExternalStore(progressSync.subscribe, progressSync.getStatus, progressSync.getStatus);
  const [confirmReset, setConfirmReset] = useState(false);
  const profile = progress.profile!;
  const name = accountName(t, account);
  const packLessons = course.lessons
    .map((L, i) => [L, i] as const)
    .filter(([L]) => L.pack)
    .map(([L, i]) => t.lessonLabel(L.level, positionInLevel(course, i)))
    .join(", ");

  const toggleInterest = (k: string) => update(p => {
    const a = p.profile!.interests;
    p.profile!.interests = a.includes(k) ? a.filter(x => x !== k) : [...a, k];
  });

  const reset = () => {
    update(p => ({ ...freshProgress(), profile: p.profile }));
    setConfirmReset(false);
    go({ name: "path" });
  };

  return (
    <>
      <main className="wrap fade">
        <header>
          <p className="eyebrow">{t.settings.eyebrow}</p>
          <h1>{t.settings.title}</h1>
        </header>
        <section className="panel stack">
          <div className="row" style={{ justifyContent: "space-between" }}>
            <h3>{name}</h3>
            <span className={`chip ${sync === "cloud" ? "ok" : ""}`}>{sync === "cloud" ? t.settings.online : t.settings.device}</span>
          </div>
          <p className="muted">{t.settings.sync[sync]}</p>
          <button className="btn ghost" onClick={logout}>{t.settings.logout}</button>
        </section>
        <section className="panel stack">
          <h3>{t.settings.languageTitle}</h3>
          <p className="muted"><Emphasis text={t.settings.languageText(course.lang)} part={course.lang} /></p>
          <button className="btn ghost" onClick={() => go({ name: "course" })}>{t.settings.changeLanguage}</button>
        </section>
        <section className="stack">
          <h3>{t.settings.interestsTitle}</h3>
          <p className="muted">{t.settings.interestsText(packLessons)}</p>
          <div className="choices two">
            {Object.entries(course.interests).map(([k, P]) => (
              <Choice key={k} pressed={profile.interests.includes(k)} onClick={() => toggleInterest(k)} title={P.label} />
            ))}
          </div>
        </section>
        <section className="stack">
          <h3>{t.settings.goalTitle}</h3>
          <div className="choices">
            {GOALS.map(v => (
              <Choice key={v} pressed={profile.goal === v} onClick={() => update(p => { p.profile!.goal = v; })}
                title={t.options.goals[v].t} sub={t.options.goals[v].d} />
            ))}
          </div>
        </section>
        <section className="stack">
          <h3>{t.settings.flowTitle}</h3>
          <div className="choices">
            {FLOWS.map(v => (
              <Choice key={v} pressed={profile.level === v} onClick={() => update(p => { p.profile!.level = v; })}
                title={t.options.flows[v].t} sub={t.options.flows[v].d} />
            ))}
          </div>
        </section>
        <PlacementCard />
        <section className="panel stack">
          <h3>{t.settings.voiceTitle}</h3>
          <p className="muted">{voice ? t.settings.voiceFound(course.lang, voice.name) : t.settings.voiceMissing(course.lang, course.voiceName)}</p>
        </section>
        <section className="panel stack">
          <h3>{t.settings.resetTitle}</h3>
          <p className="muted">{t.settings.resetText(name, course.lang)}</p>
          {confirmReset ? (
            <div className="confirm stack">
              <strong>{t.settings.resetConfirm}</strong>
              <div className="row">
                <button className="btn danger" onClick={reset}>{t.settings.resetYes}</button>
                <button className="btn ghost" onClick={() => setConfirmReset(false)}>{t.settings.cancel}</button>
              </div>
            </div>
          ) : (
            <button className="btn ghost" onClick={() => setConfirmReset(true)}>{t.settings.reset}</button>
          )}
        </section>
        {!isAccountId(account) && <AccountPanels />}
      </main>
      <Nav />
    </>
  );
}
