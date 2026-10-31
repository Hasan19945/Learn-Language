import { DialogueLine, NoteTable, WordRow } from "../../components/Words";
import { interestWords } from "../../lib/progress";
import { useApp } from "../../state/AppContext";
import type { Lesson } from "../../types";

function InterestExtras({ lesson }: { lesson: Lesson }) {
  const { course, progress } = useApp();
  const ints = progress.profile?.interests || [];
  if (!ints.length) return null;
  if (lesson.pack === "words") {
    return (
      <section className="panel stack">
        <p className="eyebrow">İlgi alanların</p>
        <h3>Ek kelimeler</h3>
        <div className="words">{interestWords(course, progress).map(w => <WordRow key={w.id} word={w} />)}</div>
      </section>
    );
  }
  if (lesson.pack === "sentences") {
    return (
      <section className="panel stack">
        <p className="eyebrow">İlgi alanların</p>
        <h3>Örnek cümleler</h3>
        <div className="dlg">
          {ints.flatMap(k => course.interests[k].sentences.map(([no, tr]) => (
            <DialogueLine key={k + no} who="" label={course.interests[k].label} text={no} translation={tr} />
          )))}
        </div>
        <p className="muted" style={{ fontSize: ".88rem" }}>{course.sentenceNote}</p>
      </section>
    );
  }
  return null;
}

export function LearnStep({ lesson, onDone }: { lesson: Lesson; onDone: () => void }) {
  const { voice } = useApp();
  return (
    <>
      <p>{lesson.intro}</p>
      {lesson.notes.map(n => (
        <section key={n.h} className="panel note">
          <h3>{n.h}</h3>
          <p>{n.p}</p>
          {n.table && <NoteTable rows={n.table} />}
        </section>
      ))}
      <aside className="tip">
        <p className="eyebrow">Türkçe konuşanlar için dikkat</p>
        <p>{lesson.tip}</p>
      </aside>
      <section className="panel stack">
        <div className="row" style={{ justifyContent: "space-between" }}>
          <h3>Kelimeler ve ifadeler</h3>
          {!voice && <span className="muted" style={{ fontSize: ".82rem" }}>Köşeli parantez = Türkçe harflerle okunuş</span>}
        </div>
        <div className="words">{lesson.words.map(w => <WordRow key={w.id} word={w} />)}</div>
      </section>
      <InterestExtras lesson={lesson} />
      <section className="panel stack">
        <h3>Kısa diyalog</h3>
        <div className="dlg">
          {lesson.dialogue.map(([who, no, tr], i) => <DialogueLine key={i} who={who} label={who} text={no} translation={tr} />)}
        </div>
      </section>
      <button className="btn block" onClick={onDone}>Kartlarla çalış</button>
    </>
  );
}
