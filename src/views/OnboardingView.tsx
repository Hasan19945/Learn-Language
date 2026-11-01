import { useState } from "react";
import { Choice } from "../components/Choice";
import { FLOWS, GOALS } from "../data/options";
import { PASS } from "../lib/progress";
import { useApp } from "../state/AppContext";
import type { Flow } from "../types";

const STEPS = 4;
const BARS = [30, 46, 22, 38, 46, 30];
const BAR_COLORS = ["en", "ei", "accent", "et", "en", "ei"];

export function OnboardingView() {
  const { course, update, go, t } = useApp();
  const [step, setStep] = useState(0);
  const [level, setLevel] = useState<Flow | null>(null);
  const [goal, setGoal] = useState<number | null>(null);
  const [interests, setInterests] = useState<string[]>([]);

  const toggleInterest = (k: string) =>
    setInterests(interests.includes(k) ? interests.filter(x => x !== k) : [...interests, k]);

  const next = () => {
    if (step < STEPS - 1) setStep(step + 1);
    else {
      update(p => { p.profile = { lang: course.native, level: level!, goal: goal!, interests }; });
      go({ name: level === "a0plus" ? "placement" : "path" });
    }
    scrollTo(0, 0);
  };

  const ok = step === 1 ? !!level : step === 2 ? !!goal : true;

  return (
    <main className="wrap fade">
      <div className="dots" aria-label={t.onboard.step(step + 1, STEPS)}>
        {Array.from({ length: STEPS }, (_, i) => <i key={i} className={i <= step ? "on" : ""} />)}
      </div>
      {step === 0 && (
        <>
          <div className="hero-flag" aria-hidden="true">
            {BARS.map((h, i) => (
              <span key={i} style={{ height: h, background: `var(--${BAR_COLORS[i]})`, animationDelay: `${i * 60}ms` }} />
            ))}
          </div>
          <h1>{course.hero}</h1>
          <p className="muted">{t.onboard.intro}</p>
          <h2>{t.onboard.nativeQuestion}</h2>
          <div className="choices"><Choice pressed onClick={() => undefined} title={t.nativeName} sub={course.sub} /></div>
          <p className="muted" style={{ fontSize: ".9rem" }}>{course.about}</p>
        </>
      )}
      {step === 1 && (
        <>
          <h2>{t.onboard.levelQuestion(course.yourLang)}</h2>
          <div className="choices">
            {FLOWS.map(v => (
              <Choice key={v} pressed={level === v} onClick={() => setLevel(v)} title={t.options.startLevels[v].t} sub={t.options.startLevels[v].d} />
            ))}
          </div>
          <p className="muted" style={{ fontSize: ".9rem" }}>{t.onboard.levelHint(PASS * 100)}</p>
        </>
      )}
      {step === 2 && (
        <>
          <h2>{t.onboard.goalQuestion}</h2>
          <p className="muted">{t.onboard.goalHint}</p>
          <div className="choices">
            {GOALS.map(v => <Choice key={v} pressed={goal === v} onClick={() => setGoal(v)} title={t.options.goals[v].t} sub={t.options.goals[v].d} />)}
          </div>
        </>
      )}
      {step === 3 && (
        <>
          <h2>{t.onboard.interestsQuestion}</h2>
          <p className="muted">{t.onboard.interestsHint}</p>
          <div className="choices two">
            {Object.entries(course.interests).map(([k, P]) => (
              <Choice key={k} pressed={interests.includes(k)} onClick={() => toggleInterest(k)} title={P.label}
                sub={P.words.slice(0, 3).map(w => w.no).join(", ")} />
            ))}
          </div>
        </>
      )}
      <div className="row">
        <button className="btn ghost" onClick={() => step > 0 ? setStep(step - 1) : go({ name: "course" })}>{t.onboard.back}</button>
        <button className="btn" style={{ flex: 1 }} onClick={next} disabled={!ok}>
          {step === STEPS - 1 ? t.onboard.start : t.continue}
        </button>
      </div>
    </main>
  );
}
