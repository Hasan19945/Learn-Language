import { useState } from "react";
import { Choice } from "../components/Choice";
import { GOALS, START_LEVELS } from "../data/options";
import { PASS } from "../lib/progress";
import { useApp } from "../state/AppContext";
import type { Flow } from "../types";

const STEPS = 4;
const BARS = [30, 46, 22, 38, 46, 30];
const BAR_COLORS = ["en", "ei", "accent", "et", "en", "ei"];

export function OnboardingView() {
  const { course, update, go } = useApp();
  const [step, setStep] = useState(0);
  const [level, setLevel] = useState<Flow | null>(null);
  const [goal, setGoal] = useState<number | null>(null);
  const [interests, setInterests] = useState<string[]>([]);

  const toggleInterest = (k: string) =>
    setInterests(interests.includes(k) ? interests.filter(x => x !== k) : [...interests, k]);

  const next = () => {
    if (step < STEPS - 1) setStep(step + 1);
    else {
      update(p => { p.profile = { lang: "tr", level: level!, goal: goal!, interests }; });
      go({ name: level === "a0plus" ? "placement" : "path" });
    }
    scrollTo(0, 0);
  };

  const ok = step === 1 ? !!level : step === 2 ? !!goal : true;

  return (
    <main className="wrap fade">
      <div className="dots" aria-label={`Adım ${step + 1} / ${STEPS}`}>
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
          <p className="muted">Kısa dersler, Türkçe açıklamalar ve günlük hayatta işine yarayacak cümleler. Önce birkaç soru soracağız.</p>
          <h2>Ana dilin hangisi?</h2>
          <div className="choices"><Choice pressed onClick={() => undefined} title="Türkçe" sub={course.sub} /></div>
          <p className="muted" style={{ fontSize: ".9rem" }}>{course.about}</p>
        </>
      )}
      {step === 1 && (
        <>
          <h2>{course.yourLang} ne durumda?</h2>
          <div className="choices">
            {START_LEVELS.map(l => <Choice key={l.v} pressed={level === l.v} onClick={() => setLevel(l.v)} title={l.t} sub={l.d} />)}
          </div>
          <p className="muted" style={{ fontSize: ".9rem" }}>
            Biraz biliyorsan kurulumdan sonra kısa bir seviye testine girersin ve sana uygun seviye gösterilir. Bir sonraki derse geçmek için ders testini en az %{PASS * 100} ile geçmen gerekir.
          </p>
        </>
      )}
      {step === 2 && (
        <>
          <h2>Günlük hedefin?</h2>
          <p className="muted">Bir alıştırma = bir kart ya da bir test sorusu. Hedefi sonra değiştirebilirsin.</p>
          <div className="choices">
            {GOALS.map(g => <Choice key={g.v} pressed={goal === g.v} onClick={() => setGoal(g.v)} title={g.t} sub={g.d} />)}
          </div>
        </>
      )}
      {step === 3 && (
        <>
          <h2>Nelerle ilgileniyorsun?</h2>
          <p className="muted">Seçtiğin alanlardan ek kelimeler ve örnek cümleler derslere eklenir. Ana müfredat herkes için aynıdır. İstediğin kadar seç ya da hiçbirini seçme.</p>
          <div className="choices two">
            {Object.entries(course.interests).map(([k, P]) => (
              <Choice key={k} pressed={interests.includes(k)} onClick={() => toggleInterest(k)} title={P.label}
                sub={P.words.slice(0, 3).map(w => w.no).join(", ")} />
            ))}
          </div>
        </>
      )}
      <div className="row">
        {step > 0 && <button className="btn ghost" onClick={() => setStep(step - 1)}>Geri</button>}
        <button className="btn" style={{ flex: 1 }} onClick={next} disabled={!ok}>
          {step === STEPS - 1 ? "Öğrenmeye başla" : "Devam"}
        </button>
      </div>
    </main>
  );
}
