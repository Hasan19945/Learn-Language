import type { StoryHero, StoryMood, StoryPlace } from "../types";

const INK = "#241c4f";
const SKIN = "#ffe3d3";
const SHADE = "#f6c7b4";

function Eye({ cx, mood, male }: { cx: number; mood: StoryMood; male?: boolean }) {
  const cy = 150;
  if (mood === "proud") {
    return <path d={`M${cx - 18} ${cy + 6} Q${cx} ${cy - 18} ${cx + 18} ${cy + 6}`} fill="none" stroke={INK} strokeWidth="5.5" strokeLinecap="round" />;
  }
  const big = mood === "surprised" ? 1.12 : 1;
  const look = mood === "thinking" ? 5 : mood === "worried" ? -2 : 0;
  const lift = mood === "thinking" ? -4 : 0;
  if (male) {
    return (
      <g className="mira-eye">
        <ellipse cx={cx} cy={cy + 2} rx={16 * big} ry={18 * big} fill="#fff" />
        <ellipse cx={cx + look} cy={cy + 4 + lift} rx={12 * big} ry={15 * big} fill="url(#emil-iris)" />
        <ellipse cx={cx + look} cy={cy + 6 + lift} rx={mood === "surprised" ? 4 : 6.5} ry={mood === "surprised" ? 6 : 9} fill="#17110c" />
        <circle cx={cx + look - 5} cy={cy - 2 + lift} r="4" fill="#fff" />
        <circle cx={cx + look + 5} cy={cy + 10 + lift} r="2" fill="#fff" opacity=".8" />
        <path d={`M${cx - 18} ${cy - 8} Q${cx} ${cy - 24 * big} ${cx + 18} ${cy - 10}`} fill="none" stroke={INK} strokeWidth="5" strokeLinecap="round" />
      </g>
    );
  }
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

function Emil({ mood, talking, casual }: { mood: StoryMood; talking: boolean; casual?: boolean }) {
  const top = casual ? "#3f8f6b" : "#f4f8fb";
  return (
    <g className={`mira ${talking ? "talking" : ""}`}>
      <defs>
        <linearGradient id="emil-iris" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#4a2c12" />
          <stop offset=".65" stopColor="#a8682a" />
          <stop offset="1" stopColor="#e8b25c" />
        </linearGradient>
        <linearGradient id="emil-hair" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#3b2f55" />
          <stop offset="1" stopColor="#1d1830" />
        </linearGradient>
      </defs>
      <g className="mira-body">
        <path d="M80 122 C76 50 224 50 220 122 L216 176 L84 176Z" fill="url(#emil-hair)" />
        <path d="M46 372 C46 298 90 262 150 262 C210 262 254 298 254 372Z" fill={top} stroke={casual ? "none" : "#cfdbe3"} strokeWidth="2" />
        {casual ? (
          <path d="M118 264 Q150 296 182 264 L178 256 L122 256Z" fill="#2f7355" />
        ) : (
          <g>
            <path d="M120 262 L150 322 L180 262Z" fill="#1f9c94" />
            <path d="M120 262 L108 288 L146 338 L150 322Z" fill="#e3ebf1" stroke="#cfdbe3" strokeWidth="2" />
            <path d="M180 262 L192 288 L154 338 L150 322Z" fill="#e3ebf1" stroke="#cfdbe3" strokeWidth="2" />
            <path d="M114 268 C96 304 104 340 132 348" fill="none" stroke="#2b3a55" strokeWidth="5" strokeLinecap="round" />
            <path d="M186 268 C204 296 200 320 184 334" fill="none" stroke="#2b3a55" strokeWidth="5" strokeLinecap="round" />
            <circle cx="182" cy="340" r="9" fill="#9fb0c4" stroke="#2b3a55" strokeWidth="3" />
            <rect x="208" y="318" width="30" height="20" rx="3" fill="#fff" stroke="#1f9c94" strokeWidth="2" />
            <path d="M213 325 H232M213 331 H226" stroke="#1f9c94" strokeWidth="2" />
          </g>
        )}
        <rect x="133" y="214" width="34" height="52" rx="10" fill={SHADE} />
        {mood === "thinking" && (
          <g>
            <path d="M240 372 C244 322 232 280 212 240 L188 250 C200 288 202 326 196 372Z" fill={top} stroke={casual ? "none" : "#cfdbe3"} strokeWidth="2" />
            <circle cx="196" cy="232" r="16" fill={SKIN} stroke={SHADE} strokeWidth="2" />
          </g>
        )}
        <g className="mira-head">
          <ellipse cx="84" cy="156" rx="9" ry="14" fill={SHADE} />
          <ellipse cx="216" cy="156" rx="9" ry="14" fill={SHADE} />
          <path d="M86 126 C86 62 214 62 214 126 C214 172 190 212 166 226 Q150 234 134 226 C110 212 86 172 86 126Z" fill={SKIN} />
          <ellipse cx="108" cy="182" rx="12" ry="6" fill="#ff9f8f" opacity=".3" />
          <ellipse cx="192" cy="182" rx="12" ry="6" fill="#ff9f8f" opacity=".3" />
          <Eye cx={120} mood={mood} male />
          <Eye cx={180} mood={mood} male />
          {BROWS[mood].map(d => <path key={d} d={d} fill="none" stroke="#1d1830" strokeWidth="7" strokeLinecap="round" />)}
          <path d="M148 168 L153 180 L147 181" fill="none" stroke={SHADE} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <Mouth mood={mood} talking={talking} />
          <path d="M78 136 C66 88 82 50 112 48 C110 32 136 22 150 36 C160 20 190 26 192 44 C222 50 236 92 222 136 C218 116 210 102 200 92 C198 110 182 114 172 94 C164 116 140 118 130 96 C122 114 102 118 92 102 C88 114 82 124 78 136Z" fill="url(#emil-hair)" />
          <path d="M116 58 C130 44 150 44 166 52 C148 50 130 54 116 66Z" fill="#8d7bf0" opacity=".55" />
          <path d="M80 130 L84 170 L92 138Z" fill="url(#emil-hair)" />
          <path d="M220 130 L216 170 L208 138Z" fill="url(#emil-hair)" />
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
  if (place === "clinic") {
    return (
      <g>
        <rect width="640" height="360" fill="#e4f4f1" />
        <path d="M0 300 H640 V360 H0Z" fill="#bcd9d4" />
        <rect x="0" y="292" width="640" height="8" fill="#fff" />
        <rect x="300" y="34" width="84" height="116" rx="4" fill="#fff" stroke="#9cc4bd" strokeWidth="3" />
        <text x="342" y="66" textAnchor="middle" fontSize="26" fontWeight="700" fill="#24424a">E</text>
        <text x="342" y="90" textAnchor="middle" fontSize="18" fontWeight="700" fill="#24424a">F P</text>
        <text x="342" y="110" textAnchor="middle" fontSize="13" fontWeight="700" fill="#24424a">T O Z</text>
        <text x="342" y="126" textAnchor="middle" fontSize="9" fontWeight="700" fill="#24424a">L P E D</text>
        <rect x="412" y="34" width="56" height="56" rx="10" fill="#fff" stroke="#9cc4bd" strokeWidth="3" />
        <path d="M440 46 V78M424 62 H456" stroke="#d6324a" strokeWidth="10" strokeLinecap="round" />
        <path d="M410 196 H620 V236 H410Z" fill="#fff" stroke="#9cc4bd" strokeWidth="3" />
        <path d="M410 180 Q440 172 470 186 L470 196 H410Z" fill="#d7eef0" stroke="#9cc4bd" strokeWidth="2" />
        <path d="M426 236 V300M604 236 V300" stroke="#7fa5a0" strokeWidth="8" />
        <path d="M500 20 V170" stroke="#9cc4bd" strokeWidth="4" />
        <path d="M500 22 Q530 40 520 90 T540 170 H590 Q570 110 590 60 T600 22Z" fill="#bfe3dd" stroke="#9cc4bd" strokeWidth="2" />
      </g>
    );
  }
  if (place === "ward") {
    return (
      <g>
        <rect width="640" height="360" fill="#dfeaf7" />
        <path d="M0 304 H640 V360 H0Z" fill="#b9cce0" />
        <rect x="290" y="30" width="150" height="110" rx="6" fill="#bfe2ff" stroke="#fff" strokeWidth="7" />
        <path d="M365 30 V140" stroke="#fff" strokeWidth="5" />
        <ellipse className="vid-cloud" cx="330" cy="66" rx="24" ry="9" fill="#fff" opacity=".9" />
        <rect x="470" y="40" width="130" height="84" rx="8" fill="#10233a" stroke="#5c7796" strokeWidth="4" />
        <path className="vid-pulse" d="M480 84 H506 L516 62 L530 106 L542 72 L550 84 H592" fill="none" stroke="#46f0b4" strokeWidth="4" strokeLinejoin="round" strokeLinecap="round" />
        <path d="M312 300 V214 M624 300 V236" stroke="#6d84a0" strokeWidth="8" strokeLinecap="round" />
        <rect x="312" y="232" width="312" height="46" rx="10" fill="#fff" stroke="#a9bdd3" strokeWidth="3" />
        <rect x="324" y="212" width="82" height="30" rx="12" fill="#f4f8fb" stroke="#a9bdd3" strokeWidth="3" />
        <path d="M416 232 H624 V278 H416Z" fill="#8fc4e8" />
        <path d="M268 300 V110 M250 300 H286" stroke="#6d84a0" strokeWidth="5" strokeLinecap="round" />
        <path d="M250 110 H286" stroke="#6d84a0" strokeWidth="4" />
        <rect x="256" y="112" width="24" height="38" rx="6" fill="#e9f7ff" stroke="#8fb4d4" strokeWidth="2" />
        <circle className="vid-drip" cx="268" cy="160" r="3" fill="#59c8ff" />
      </g>
    );
  }
  if (place === "emergency") {
    return (
      <g>
        <rect width="640" height="360" fill="#eef0f6" />
        <path d="M0 296 H640 V360 H0Z" fill="#aab3c7" />
        <path d="M280 296 L400 20 H640 V296Z" fill="#dfe3ee" />
        <rect x="430" y="70" width="86" height="226" fill="#c9d7e8" stroke="#7d8ba5" strokeWidth="4" />
        <rect x="520" y="70" width="86" height="226" fill="#c9d7e8" stroke="#7d8ba5" strokeWidth="4" />
        <rect x="448" y="96" width="50" height="60" rx="4" fill="#eff7ff" stroke="#7d8ba5" strokeWidth="3" />
        <rect x="538" y="96" width="50" height="60" rx="4" fill="#eff7ff" stroke="#7d8ba5" strokeWidth="3" />
        <rect x="462" y="24" width="112" height="36" rx="6" fill="#c2183a" />
        <path d="M518 30 V54M506 42 H530" stroke="#fff" strokeWidth="7" strokeLinecap="round" />
        <rect className="vid-alarm" width="640" height="360" fill="#ff4d5e" />
        <circle className="vid-led" cx="304" cy="30" r="13" fill="#ff4d5e" />
        <rect x="292" y="40" width="24" height="9" rx="3" fill="#6d7890" />
      </g>
    );
  }
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

interface StageProps {
  hero: StoryHero;
  casual?: boolean;
  place: StoryPlace;
  mood: StoryMood;
  talking: boolean;
}

export function StoryStage({ hero, casual, place, mood, talking }: StageProps) {
  return (
    <svg viewBox="0 0 640 360" role="img" aria-hidden="true">
      <g key={place} className="vid-scene">
        <g className="vid-pan"><Backdrop place={place} /></g>
      </g>
      <clipPath id="vid-frame"><rect width="640" height="360" /></clipPath>
      <g clipPath="url(#vid-frame)">
        <g transform="translate(28 16) scale(.98)">
          <g key={mood} className="mira-enter">
            {hero === "emil" ? <Emil mood={mood} talking={talking} casual={casual} /> : <Mira mood={mood} talking={talking} />}
          </g>
        </g>
      </g>
      <g key={`fg-${place}`} className="vid-scene"><Foreground place={place} /></g>
    </svg>
  );
}
