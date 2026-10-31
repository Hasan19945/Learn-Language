import { tts } from "../lib/quiz";
import { emojiCount } from "../lib/text";
import type { WordDef } from "../types";
import { SayButton } from "./SayButton";

const PIC_SIZES = [0, 1, .74, .56, .46];

export function PicTile({ pic, lit, big }: { pic: string; lit?: string; big?: boolean }) {
  return (
    <div className={`pic ${big ? "big" : ""}`} role="img" aria-label={lit}>
      <span style={{ fontSize: `${PIC_SIZES[Math.min(emojiCount(pic), 4)]}em` }}>{pic}</span>
    </div>
  );
}

export function GenderTag({ word }: { word: WordDef }) {
  return word.g ? <span className={`g ${word.g}`}>{word.g}</span> : null;
}

function IdiomRow({ word }: { word: WordDef }) {
  return (
    <div className="word idiom">
      <PicTile pic={word.pic!} lit={word.lit} />
      <div className="idiom-body">
        <span className="no">{word.no}</span>
        <p className="lit">Kelimesi kelimesine: “{word.lit}”</p>
        <p>Anlamı: <b>{word.tr}</b></p>
        <p className="ex"><b>{word.ex[0]}</b> — {word.ex[1]}</p>
      </div>
      <SayButton text={tts(word)} />
    </div>
  );
}

export function WordRow({ word }: { word: WordDef }) {
  if (word.pic) return <IdiomRow word={word} />;
  return (
    <div className="word">
      <div className="main">
        <GenderTag word={word} />
        <span className="no">{word.no}</span>
        {word.say && <span className="say">[{word.say}]</span>}
        <span>— {word.tr}</span>
      </div>
      <SayButton text={tts(word)} />
      {word.g ? (
        <div className="forms">
          {word.g} {word.no} · belirli: <b>{word.def}</b>{word.pl && <> · çoğul: <b>{word.pl}</b></>}
        </div>
      ) : word.note && <div className="forms">{word.note}</div>}
      <div className="ex"><b>{word.ex[0]}</b> — {word.ex[1]}</div>
    </div>
  );
}

export function ShortWordRow({ word }: { word: WordDef }) {
  return (
    <div className="word">
      <div className="main">
        <GenderTag word={word} />
        <span className="no">{word.no}</span>
        <span>— {word.tr}</span>
      </div>
      <SayButton text={tts(word)} />
    </div>
  );
}

export function NoteTable({ rows }: { rows: string[][] }) {
  const [head, ...body] = rows;
  return (
    <div className="tbl">
      <table>
        <thead><tr>{head.map((h, i) => <th key={i}>{h}</th>)}</tr></thead>
        <tbody>
          {body.map((r, i) => <tr key={i}>{r.map((c, j) => <td key={j} className={j ? "" : "no"}>{c}</td>)}</tr>)}
        </tbody>
      </table>
    </div>
  );
}

export function DialogueLine({ who, label, text, translation }: { who: string; label: string; text: string; translation: string }) {
  return (
    <div className={`line ${who}`}>
      <span className="who" title={label}>{label[0]}</span>
      <div>
        <p className="no">{text}</p>
        <p className="tr">{translation}</p>
      </div>
      <SayButton text={text} />
    </div>
  );
}
