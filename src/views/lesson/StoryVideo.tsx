import { useEffect, useMemo, useState } from "react";
import { Icon } from "../../components/Icon";
import { Bar } from "../../components/Progress";
import { StoryStage } from "../../components/StoryStage";
import { speak } from "../../lib/speech";
import { buildCues, markWords, readingTime } from "../../lib/story";
import { useApp } from "../../state/AppContext";
import type { Lesson, Word } from "../../types";

function Marked({ text, words }: { text: string; words: Word[] }) {
  return <>{markWords(text, words).map((p, i) => p.word ? <b key={i} className="story-word">{p.text}</b> : <span key={i}>{p.text}</span>)}</>;
}

export function StoryVideo({ lesson }: { lesson: Lesson }) {
  const { voice, t } = useApp();
  const story = lesson.story!;
  const cues = useMemo(() => buildCues(lesson), [lesson]);
  const [pos, setPos] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [ended, setEnded] = useState(false);
  const [showTr, setShowTr] = useState(true);
  const cue = cues[pos];
  const talking = playing && cue.kind === "line";

  useEffect(() => {
    if (!playing) return;
    const c = cues[pos];
    let active = true;
    let timer: ReturnType<typeof setTimeout>;
    const next = () => {
      if (!active) return;
      active = false;
      clearTimeout(timer);
      if (pos + 1 < cues.length) setPos(pos + 1);
      else {
        setPlaying(false);
        setEnded(true);
      }
    };
    const spoken = c.kind === "line" && !!voice;
    timer = setTimeout(next, readingTime(c.text) * (spoken ? 3 : 1));
    if (spoken) speak(voice, c.text, next);
    return () => {
      active = false;
      clearTimeout(timer);
      if (spoken) speechSynthesis.cancel();
    };
  }, [playing, pos, cues, voice]);

  const jump = (to: number) => {
    setEnded(false);
    setPos(Math.max(0, Math.min(cues.length - 1, to)));
  };

  const toggle = () => {
    if (ended) {
      setEnded(false);
      setPos(0);
    }
    setPlaying(!playing);
  };

  return (
    <section className="panel stack vid">
      <div>
        <p className="eyebrow">{t.story.eyebrow}</p>
        <h3>{story.title}</h3>
      </div>
      <div className="vid-stage">
        <StoryStage place={cue.place} mood={cue.mood} talking={talking} />
        {cue.kind === "line" && cue.words.length > 0 && (
          <div className="vid-cards">
            {cue.words.slice(0, 3).map(w => (
              <div key={w.id} className="vid-card"><b>{w.no}</b><span>{w.tr}</span></div>
            ))}
          </div>
        )}
        {cue.kind === "title" && (
          <div key="title" className="vid-board">
            <span className="eyebrow">{t.story.eyebrow}</span>
            <strong>{story.title}</strong>
          </div>
        )}
        {cue.kind === "recap" && (
          <div key={cue.text} className="vid-board">
            <span className="eyebrow">{t.story.recap}</span>
            <strong>{cue.text}</strong>
          </div>
        )}
        {!playing && (
          <button className="vid-big" onClick={toggle} aria-label={ended ? t.story.again : t.story.play}>
            <Icon name="play" />
          </button>
        )}
      </div>
      <Bar value={pos / (cues.length - 1)} />
      <div className="vid-sub" aria-live="off">
        {cue.kind === "line" ? (
          <>
            <p className="no"><Marked text={cue.text} words={lesson.words} /></p>
            {showTr && <p className="muted">{cue.tr}</p>}
          </>
        ) : <p className="muted">{ended ? t.story.ended : cue.kind === "recap" ? cue.text : t.story.hint}</p>}
      </div>
      <div className="row vid-ctl">
        <button className="icon-btn" onClick={() => jump(pos - 1)} aria-label={t.story.prev}><Icon name="prev" /></button>
        <button className="btn" onClick={toggle}>{playing ? t.story.pause : ended ? t.story.again : t.story.play}</button>
        <button className="icon-btn" onClick={() => jump(pos + 1)} aria-label={t.story.next}><Icon name="next" /></button>
        <button className="chip acc" onClick={() => setShowTr(!showTr)}>{showTr ? t.story.hideTr : t.story.showTr}</button>
      </div>
      {!voice && <p className="muted" style={{ fontSize: ".85rem" }}>{t.story.noVoice}</p>}
      <div className="stack story">
        <h3>{t.story.storyTitle}</h3>
        {story.scenes.map((s, i) => (
          <div key={i} className={`story-p ${(playing || pos > 0) && cue.kind === "line" && cue.scene === i ? "on" : ""}`}>
            <p className="no"><Marked text={s.text} words={lesson.words} /></p>
            <p className="muted">{s.tr}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
