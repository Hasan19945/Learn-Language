import { Bar } from "../../components/Progress";
import { SayButton } from "../../components/SayButton";
import { GenderTag, PicTile } from "../../components/Words";
import { tts } from "../../lib/quiz";
import { shuffle } from "../../lib/random";
import { useApp } from "../../state/AppContext";
import type { Word } from "../../types";

export interface Deck {
  cards: Word[];
  known: number;
  flipped: boolean;
  total: number;
}

export type CardSide = "target" | "tr";

export const newDeck = (words: Word[]): Deck => ({ cards: shuffle(words), known: 0, flipped: false, total: words.length });

interface Props {
  deck: Deck;
  side: CardSide;
  onSide: (side: CardSide) => void;
  onAgain: () => void;
  onKnow: () => void;
  onFlip: () => void;
  onRestart: () => void;
  onQuiz: () => void;
}

export function CardsStep({ deck, side, onSide, onAgain, onKnow, onFlip, onRestart, onQuiz }: Props) {
  const { course, t } = useApp();
  if (!deck.cards.length) {
    return (
      <section className="panel stack fade" style={{ textAlign: "center" }}>
        <h2>{t.flash.doneTitle}</h2>
        <p className="muted">{t.flash.doneText(deck.total)}</p>
        <button className="btn" onClick={onQuiz}>{t.flash.toQuiz}</button>
        <button className="btn ghost" onClick={onRestart}>{t.flash.again}</button>
      </section>
    );
  }

  const w = deck.cards[0], front = side === "target";
  const targetFace = (
    <>
      {w.pic && <PicTile pic={w.pic} lit={w.lit} big />}
      <span className="row" style={{ justifyContent: "center" }}><GenderTag word={w} /><span className="big">{w.no}</span></span>
      {w.say && <span className="say">[{w.say}]</span>}
    </>
  );
  const trFace = <span className="big">{w.tr}</span>;
  const backInfo = (
    <>
      {w.lit && <p className="lit">“{w.lit}”</p>}
      <p className="muted" style={{ fontSize: ".92rem" }}><b className="no">{w.ex[0]}</b><br />{w.ex[1]}</p>
      {w.g && <p className="muted" style={{ fontSize: ".85rem" }}>{t.words.definite}: {w.def}{w.pl && ` · ${t.words.plural}: ${w.pl}`}</p>}
    </>
  );

  return (
    <>
      <div className="row" style={{ justifyContent: "space-between" }}>
        <span className="muted">{t.flash.known(deck.known, deck.total)}</span>
        <button className="btn ghost" style={{ padding: "8px 14px" }} onClick={() => onSide(front ? "tr" : "target")}>
          {front ? `${course.lang} → ${t.nativeName}` : `${t.nativeName} → ${course.lang}`}
        </button>
      </div>
      <Bar value={deck.known / deck.total} />
      <div className="card-wrap">
        <button className={`flash ${deck.flipped ? "flipped" : ""}`} onClick={onFlip} aria-label={t.flash.flip}>
          <div className="face">{front ? targetFace : trFace}<span className="hint">{t.flash.tapToFlip}</span></div>
          <div className="face back">
            {front
              ? <><span className="say"><GenderTag word={w} /> {w.no}{w.say && ` [${w.say}]`}</span>{trFace}</>
              : targetFace}
            {backInfo}
          </div>
        </button>
      </div>
      <div className="row">
        <SayButton text={tts(w)} />
        <button className="btn ghost" style={{ flex: 1 }} onClick={onAgain} disabled={!deck.flipped}>{t.flash.showAgain}</button>
        <button className="btn" style={{ flex: 1 }} onClick={onKnow} disabled={!deck.flipped}>{t.flash.iKnow}</button>
      </div>
      <p className="muted" style={{ fontSize: ".88rem" }}>{t.flash.hint}</p>
    </>
  );
}
