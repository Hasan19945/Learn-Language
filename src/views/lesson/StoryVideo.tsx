import { useEffect, useMemo, useState } from "react";
import { Icon } from "../../components/Icon";
import { Bar } from "../../components/Progress";
import { StoryStage } from "../../components/StoryStage";
import { speak } from "../../lib/speech";
import { buildCues, HERO_NAMES, HERO_PITCH, markWords, readingTime } from "../../lib/story";
import { useApp } from "../../state/AppContext";
import type { Lesson, Story, Word } from "../../types";

function Marked({ text, words }: { text: string; words: Word[] }) {
  return <>{markWords(text, words).map((p, i) => p.word ? <b key={i} className="story-word">{p.text}</b> : <span key={i}>{p.text}</span>)}</>;
}

export function StoryVideo({ lesson, story }: { lesson: Lesson; story: Story }) {
  const { voice, t } = useApp();
  const name = HERO_NAMES[story.hero];
  const talk = story.talk;
  const eyebrow = talk ? t.story.talkEyebrow : t.story.eyebrow(name);
  const cues = useMemo(() => buildCues(lesson, story), [lesson, story]);
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
    if (spoken) speak(voice, c.text, next, talk && c.who !== undefined ? HERO_PITCH[talk.cast[c.who]] : 1);
    return () => {
      active = false;
      clearTimeout(timer);
      if (spoken) speechSynthesis.cancel();
    };
  }, [playing, pos, cues, voice, talk]);

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
        <p className="eyebrow">{eyebrow}</p>
        <h3>{story.title}</h3>
      </div>
      <div className="vid-stage">
        <StoryStage hero={story.hero} casual={story.casual} place={cue.place} mood={cue.mood} talking={talking}
          cast={talk?.cast} moods={cue.moods} speaker={cue.who} />
        {cue.kind === "line" && cue.words.length > 0 && (
          <div className={`vid-cards ${talk ? "mid" : ""}`}>
            {cue.words.slice(0, 3).map(w => (
              <div key={w.id} className="vid-card"><b>{w.no}</b><span>{w.tr}</span></div>
            ))}
          </div>
        )}
        {cue.kind === "title" && (
          <div key="title" className={`vid-board ${talk ? "mid" : ""}`}>
            <span className="eyebrow">{eyebrow}</span>
            <strong>{story.title}</strong>
          </div>
        )}
        {cue.kind === "recap" && (
          <div key={cue.text} className={`vid-board ${talk ? "mid" : ""}`}>
            <span className="eyebrow">{t.story.recap}</span>
            <strong>{cue.text}</strong>
          </div>
        )}
        {!playing && (
          <button className={`vid-big ${talk ? "mid" : ""}`} onClick={toggle} aria-label={ended ? t.story.again : t.story.play}>
            <Icon name="play" />
          </button>
        )}
      </div>
      <Bar value={pos / (cues.length - 1)} />
      <div className="vid-sub" aria-live="off">
        {cue.kind === "line" ? (
          <>
            {talk && cue.who !== undefined && <span className="eyebrow">{HERO_NAMES[talk.cast[cue.who]]}</span>}
            <p className="no"><Marked text={cue.text} words={lesson.words} /></p>
            {showTr && <p className="muted">{cue.tr}</p>}
          </>
        ) : <p className="muted">{ended ? t.story.ended : cue.kind === "recap" ? cue.text : talk ? t.story.talkHint : t.story.hint(name)}</p>}
      </div>
      <div className="row vid-ctl">
        <button className="icon-btn" onClick={() => jump(pos - 1)} aria-label={t.story.prev}><Icon name="prev" /></button>
        <button className="btn" onClick={toggle}>{playing ? t.story.pause : ended ? t.story.again : t.story.play}</button>
        <button className="icon-btn" onClick={() => jump(pos + 1)} aria-label={t.story.next}><Icon name="next" /></button>
        <button className="chip acc" onClick={() => setShowTr(!showTr)}>{showTr ? t.story.hideTr : t.story.showTr}</button>
      </div>
      {!voice && <p className="muted" style={{ fontSize: ".85rem" }}>{t.story.noVoice}</p>}
      {talk && (
        <div className="stack story">
          <h3>{t.story.talkTitle}</h3>
          {talk.lines.map((l, i) => (
            <div key={i} className={`story-p ${cue.kind === "line" && cues[pos] === cues[i + 1] ? "on" : ""}`}>
              <span className="eyebrow">{HERO_NAMES[talk.cast[l.who]]}</span>
              <p className="no"><Marked text={l.text} words={lesson.words} /></p>
              <p className="muted">{l.tr}</p>
            </div>
          ))}
        </div>
      )}
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
