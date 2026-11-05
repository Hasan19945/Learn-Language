import type { StoryMood, StoryPlace } from "../types";

const INK = "#241c4f";
const SKIN = "#ffe3d3";
const SHADE = "#f6c7b4";

function Eye({ cx, mood }: { cx: number; mood: StoryMood }) {
  const cy = 150;
  if (mood === "proud") {
    return <path d={`M${cx - 18} ${cy + 6} Q${cx} ${cy - 18} ${cx + 18} ${cy + 6}`} fill="none" stroke={INK} strokeWidth="5.5" strokeLinecap="round" />;
  }
  const big = mood === "surprised" ? 1.12 : 1;
  const look = mood === "thinking" ? 5 : mood === "worried" ? -2 : 0;
  const lift = mood === "thinking" ? -4 : 0;
  return (
    <g className="mira-eye">
      <ellipse cx={cx} cy={cy} rx={18 * big} ry={23 * big} fill="#fff" />
      <ellipse cx={cx + look} cy={cy + 3 + lift} rx={14 * big} ry={19 * big} fill="url(#mira-iris)" />
      <ellipse cx={cx + look} cy={cy + 6 + lift} rx={mood === "surprised" ? 5 : 8} ry={mood === "surprised" ? 8 : 11} fill="#1a1238" />
      <circle cx={cx + look - 6} cy={cy - 6 + lift} r="5.5" fill="#fff" />
      <circle cx={cx + look + 6} cy={cy + 11 + lift} r="2.8" fill="#fff" opacity=".85" />
      <path d={`M${cx - 21} ${cy - 11} Q${cx - 4} ${cy - 34 * big} ${cx + 21} ${cy - 15} L${cx + 24} ${cy - 8} Q${cx + 2} ${cy - 25 * big} ${cx - 19} ${cy - 6}Z`} fill={INK} />
    </g>
  );
}

const BROWS: Record<StoryMood, [string, string]> = {
  happy: ["M104 114 Q120 106 136 112", "M164 112 Q180 106 196 114"],
  worried: ["M104 112 Q120 104 136 100", "M164 100 Q180 104 196 112"],
  surprised: ["M104 104 Q120 94 136 102", "M164 102 Q180 94 196 104"],
  thinking: ["M104 112 Q120 108 136 112", "M164 104 Q180 98 196 106"],
  proud: ["M104 116 Q120 106 136 114", "M164 114 Q180 106 196 116"]
};

function Mouth({ mood, talking }: { mood: StoryMood; talking: boolean }) {
  if (talking) return <ellipse className="mira-talk" cx="150" cy="193" rx="9" ry="7" fill="#a8324d" />;
  if (mood === "surprised") return <ellipse cx="150" cy="195" rx="7" ry="9" fill="#a8324d" />;
  if (mood === "proud") {
    return (
      <g>
        <path d="M132 186 Q150 214 168 186Z" fill="#a8324d" />
        <path d="M141 199 Q150 192 159 199 Q150 207 141 199Z" fill="#f28da0" />
      </g>
    );
  }
  const d = mood === "worried" ? "M138 197 Q144 189 150 194 T162 192" : mood === "thinking" ? "M142 194 Q150 191 158 195" : "M136 189 Q150 203 164 189";
  return <path d={d} fill="none" stroke="#a8324d" strokeWidth="3.5" strokeLinecap="round" />;
}

function Extras({ mood }: { mood: StoryMood }) {
  if (mood === "worried") return <path className="mira-drop" d="M224 96 Q214 112 224 118 Q234 112 224 96Z" fill="#8fd6ff" stroke="#fff" strokeWidth="1.5" />;
  if (mood === "thinking") {
    return (
      <g fill="#fff" stroke={INK} strokeWidth="1.5" className="mira-think">
        <circle cx="236" cy="82" r="5" />
        <circle cx="252" cy="62" r="8" />
        <circle cx="274" cy="36" r="12" />
      </g>
    );
  }
  if (mood === "surprised") {
    return (
      <g stroke="#ffd34d" strokeWidth="5" strokeLinecap="round" className="mira-spark">
        <path d="M58 70 L40 52M50 104 L26 98M90 44 L78 22M242 70 L260 52M250 104 L274 98M210 44 L222 22" />
      </g>
    );
  }
  if (mood === "proud") {
    return (
      <g fill="#ffd34d" className="mira-spark">
        <path d="M40 80 l5 13 13 5 -13 5 -5 13 -5 -13 -13 -5 13 -5z" />
        <path d="M258 58 l4 10 10 4 -10 4 -4 10 -4 -10 -10 -4 10 -4z" />
        <path d="M270 138 l3 7 7 3 -7 3 -3 7 -3 -7 -7 -3 7 -3z" />
      </g>
    );
  }
  return null;
}

function Mira({ mood, talking }: { mood: StoryMood; talking: boolean }) {
  return (
    <g className={`mira ${talking ? "talking" : ""}`}>
      <defs>
        <linearGradient id="mira-iris" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#4a2fb0" />
          <stop offset=".6" stopColor="#7d5cf0" />
          <stop offset="1" stopColor="#59e0d0" />
        </linearGradient>
        <linearGradient id="mira-hair" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#3a2f8f" />
          <stop offset="1" stopColor="#1f7f93" />
        </linearGradient>
      </defs>
      <g className="mira-body">
        <path d="M66 128 C52 44 248 44 234 128 C246 196 244 262 226 300 L198 276 L102 276 L74 300 C56 262 54 196 66 128Z" fill="url(#mira-hair)" />
        <path d="M64 372 C64 300 98 264 150 264 C202 264 236 300 236 372Z" fill="#ff6f7d" />
        <path d="M120 266 Q150 300 180 266 L176 258 L124 258Z" fill="#e4515f" />
        <rect x="136" y="214" width="28" height="50" rx="10" fill={SHADE} />
        <path d="M138 286 L134 326M162 286 L166 326" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
        <rect x="128" y="326" width="44" height="34" rx="5" fill="#fff" stroke={INK} strokeWidth="2" />
        <rect x="134" y="333" width="14" height="14" rx="3" fill="#7d5cf0" />
        <path d="M152 336 H166M152 344 H162" stroke={INK} strokeWidth="2" />
        {mood === "thinking" && (
          <g>
            <path d="M228 372 C232 322 222 280 208 240 L186 248 C196 288 196 326 190 372Z" fill="#ff6f7d" />
            <circle cx="193" cy="230" r="15" fill={SKIN} stroke={SHADE} strokeWidth="2" />
          </g>
        )}
        <g className="mira-head">
          <ellipse cx="84" cy="158" rx="9" ry="14" fill={SHADE} />
          <ellipse cx="216" cy="158" rx="9" ry="14" fill={SHADE} />
          <path d="M84 128 C84 62 216 62 216 128 C216 178 182 222 150 230 C118 222 84 178 84 128Z" fill={SKIN} />
          <ellipse cx="108" cy="180" rx="15" ry="8" fill="#ff9fb0" opacity=".55" />
          <ellipse cx="192" cy="180" rx="15" ry="8" fill="#ff9fb0" opacity=".55" />
          <Eye cx={120} mood={mood} />
          <Eye cx={180} mood={mood} />
          {BROWS[mood].map(d => <path key={d} d={d} fill="none" stroke={INK} strokeWidth="4" strokeLinecap="round" />)}
          <path d="M149 172 L152 177" stroke={SHADE} strokeWidth="3" strokeLinecap="round" />
          <Mouth mood={mood} talking={talking} />
          <path d="M78 140 C66 58 124 40 160 44 C208 46 232 88 222 142 C216 118 206 102 196 92 C192 112 176 118 164 96 C154 120 132 124 124 98 C114 116 96 122 78 140Z" fill="url(#mira-hair)" />
          <path d="M112 66 C130 52 162 50 184 62 C160 60 134 62 112 66Z" fill="#8fd6ff" opacity=".55" />
          <path d="M78 136 C70 176 74 214 90 238 C86 204 90 172 92 142Z" fill="url(#mira-hair)" />
          <path d="M222 136 C230 176 226 214 210 238 C214 204 210 172 208 142Z" fill="url(#mira-hair)" />
          <path d="M196 74 l5 11 12 2 -9 8 2 12 -10 -6 -11 6 3 -12 -9 -8 12 -2z" fill="#ffd34d" stroke="#e8a92a" strokeWidth="1.5" />
        </g>
        <Extras mood={mood} />
      </g>
    </g>
  );
}

function Skyline({ y = 150 }: { y?: number }) {
  return (
    <g fill="#5a4a9c" opacity=".75">
      {[[0, 60], [34, 96], [70, 44], [100, 120], [140, 70], [176, 104], [214, 54]].map(([x, h]) => (
        <rect key={x} x={x} y={y - h} width="32" height={h + 40} />
      ))}
    </g>
  );
}

function Backdrop({ place }: { place: StoryPlace }) {
  if (place === "servers") {
    return (
      <g>
        <rect width="640" height="360" fill="#0d1635" />
        <path d="M0 300 H640 V360 H0Z" fill="#141f47" />
        <path d="M0 0 L640 0 L640 26 L0 26Z" fill="#1b2a5e" />
        {[250, 380, 510].map((x, r) => (
          <g key={x}>
            <rect x={x} y="30" width="112" height="280" rx="6" fill="#1a2552" stroke="#33478f" strokeWidth="2" />
            {Array.from({ length: 7 }, (_, i) => (
              <g key={i}>
                <rect x={x + 10} y={44 + i * 37} width="92" height="28" rx="3" fill="#0f1838" />
                <circle className="vid-led" style={{ animationDelay: `${(i * 0.37 + r * 0.61) % 2}s` }} cx={x + 22} cy={58 + i * 37} r="4" fill={i % 3 === 0 ? "#ff5d73" : "#46f0b4"} />
                <circle className="vid-led" style={{ animationDelay: `${(i * 0.71 + r * 0.29) % 2}s` }} cx={x + 36} cy={58 + i * 37} r="4" fill="#59c8ff" />
                <path d={`M${x + 52} ${58 + i * 37} H${x + 94}`} stroke="#33478f" strokeWidth="3" />
              </g>
            ))}
          </g>
        ))}
        <radialGradient id="vid-glow-blue">
          <stop offset="0" stopColor="#4a6cff" stopOpacity=".38" />
          <stop offset="1" stopColor="#4a6cff" stopOpacity="0" />
        </radialGradient>
        <ellipse cx="170" cy="170" rx="240" ry="200" fill="url(#vid-glow-blue)" />
      </g>
    );
  }
  if (place === "meeting") {
    return (
      <g>
        <rect width="640" height="360" fill="#f7e9d8" />
        <path d="M0 296 H640 V360 H0Z" fill="#d8b892" />
        <rect x="280" y="40" width="330" height="210" rx="8" fill="#fff" stroke="#8c7a68" strokeWidth="5" />
        <rect x="306" y="66" width="58" height="50" fill="#ffd34d" transform="rotate(-3 335 91)" />
        <rect x="376" y="62" width="58" height="50" fill="#8fe3c8" transform="rotate(2 405 87)" />
        <rect x="446" y="68" width="58" height="50" fill="#ff9fb0" transform="rotate(-2 475 93)" />
        <path d="M316 86 H352M316 98 H344M386 80 H424M386 92 H414M456 88 H494M456 100 H484" stroke="#5a4a6c" strokeWidth="3" />
        <rect x="316" y="150" width="70" height="40" rx="5" fill="none" stroke="#3a6ea8" strokeWidth="4" />
        <rect x="440" y="150" width="70" height="40" rx="5" fill="none" stroke="#3a6ea8" strokeWidth="4" />
        <path d="M386 170 H432M424 162 L434 170 L424 178" fill="none" stroke="#c2183a" strokeWidth="4" />
        <path d="M530 80 V190 M530 190 H590 M540 170 L556 140 L572 152 L588 104" fill="none" stroke="#2c7a54" strokeWidth="4" />
        <path d="M280 256 H610" stroke="#8c7a68" strokeWidth="8" strokeLinecap="round" />
      </g>
    );
  }
  if (place === "home") {
    return (
      <g>
        <rect width="640" height="360" fill="#1c1a48" />
        <rect x="300" y="36" width="280" height="190" rx="8" fill="#0d1033" stroke="#4d4a8f" strokeWidth="8" />
        <path d="M440 36 V226M300 130 H580" stroke="#4d4a8f" strokeWidth="6" />
        <circle cx="510" cy="84" r="26" fill="#fff3b8" />
        <circle cx="500" cy="78" r="24" fill="#0d1033" />
        {[[330, 60], [372, 100], [408, 66], [340, 170], [470, 170], [540, 190], [404, 190]].map(([x, y]) => (
          <circle key={x} className="vid-led" style={{ animationDelay: `${(x % 7) * 0.3}s` }} cx={x} cy={y} r="2.5" fill="#fff" />
        ))}
        <radialGradient id="vid-glow-warm">
          <stop offset="0" stopColor="#ffb86b" stopOpacity=".42" />
          <stop offset="1" stopColor="#ffb86b" stopOpacity="0" />
        </radialGradient>
        <ellipse cx="170" cy="230" rx="260" ry="190" fill="url(#vid-glow-warm)" />
      </g>
    );
  }
  return (
    <g>
      <defs>
        <linearGradient id="vid-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#8d7bf0" />
          <stop offset=".7" stopColor="#ff9fb0" />
          <stop offset="1" stopColor="#ffd9a0" />
        </linearGradient>
      </defs>
      <rect width="640" height="360" fill="#f3ecff" />
      <g transform="translate(320 30)">
        <rect width="286" height="210" rx="8" fill="url(#vid-sky)" stroke="#fff" strokeWidth="8" />
        <circle cx="210" cy="86" r="26" fill="#fff3b8" />
        <g className="vid-cloud"><ellipse cx="70" cy="50" rx="36" ry="12" fill="#fff" opacity=".85" /><ellipse cx="96" cy="42" rx="24" ry="11" fill="#fff" opacity=".85" /></g>
        <g transform="translate(16 12)"><Skyline y={150} /></g>
        <path d="M143 0 V210" stroke="#fff" strokeWidth="6" />
      </g>
      <rect x="40" y="28" width="96" height="66" rx="4" fill="#fff" stroke="#c9bdf0" strokeWidth="3" />
      <path d="M52 46 H124M52 60 H110M52 74 H118" stroke="#7d5cf0" strokeWidth="4" />
    </g>
  );
}

function Foreground({ place }: { place: StoryPlace }) {
  if (place === "desk" || place === "home") {
    const top = place === "home" ? "#3f2f5f" : "#b9835a", face = place === "home" ? "#2c2146" : "#8f6240";
    return (
      <g>
        <rect x="0" y="312" width="640" height="16" fill={top} />
        <rect x="0" y="328" width="640" height="32" fill={face} />
        <path d="M80 312 L112 250 H238 L262 312Z" fill="#2c3350" />
        <path d="M118 256 H232 L250 306 H96Z" fill="#7fe8dc" opacity=".35" />
        <rect x="60" y="306" width="226" height="10" rx="4" fill="#515a7e" />
        <rect x="330" y="276" width="40" height="36" rx="6" fill="#fff" stroke="#c9bdf0" strokeWidth="3" />
        <path d="M370 284 Q386 294 370 304" fill="none" stroke="#c9bdf0" strokeWidth="4" />
        <g className="vid-steam" stroke="#fff" strokeWidth="3" fill="none" opacity=".8">
          <path d="M342 266 Q338 256 344 248" />
          <path d="M356 266 Q352 256 358 248" />
        </g>
        <path d="M570 312 L560 270 H606 L596 312Z" fill="#e8755a" />
        <path d="M583 270 C572 240 548 232 540 216 C566 216 582 232 584 252 C588 226 604 212 622 208 C618 232 602 248 588 270Z" fill="#46b078" />
      </g>
    );
  }
  return null;
}

export function StoryStage({ place, mood, talking }: { place: StoryPlace; mood: StoryMood; talking: boolean }) {
  return (
    <svg viewBox="0 0 640 360" role="img" aria-hidden="true">
      <g key={place} className="vid-scene">
        <g className="vid-pan"><Backdrop place={place} /></g>
      </g>
      <clipPath id="vid-frame"><rect width="640" height="360" /></clipPath>
      <g clipPath="url(#vid-frame)">
        <g transform="translate(28 16) scale(.98)">
          <g key={mood} className="mira-enter"><Mira mood={mood} talking={talking} /></g>
        </g>
      </g>
      <g key={`fg-${place}`} className="vid-scene"><Foreground place={place} /></g>
    </svg>
  );
}
