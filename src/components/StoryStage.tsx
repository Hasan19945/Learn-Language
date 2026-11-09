import type { StoryHero, StoryMood, StoryPlace } from "../types";

const INK = "#241c4f";
const SKIN = "#ffe3d3";
const SHADE = "#f6c7b4";

function Eye({ cx, mood, male, iris }: { cx: number; mood: StoryMood; male?: boolean; iris?: string }) {
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
        <ellipse cx={cx + look} cy={cy + 4 + lift} rx={12 * big} ry={15 * big} fill={`url(#${iris || "emil-iris"})`} />
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
      <ellipse cx={cx + look} cy={cy + 3 + lift} rx={14 * big} ry={19 * big} fill={`url(#${iris || "mira-iris"})`} />
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
            <Coat />
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

function Coat() {
  return (
    <g>
      <path d="M120 262 L150 322 L180 262Z" fill="#1f9c94" />
      <path d="M120 262 L108 288 L146 338 L150 322Z" fill="#e3ebf1" stroke="#cfdbe3" strokeWidth="2" />
      <path d="M180 262 L192 288 L154 338 L150 322Z" fill="#e3ebf1" stroke="#cfdbe3" strokeWidth="2" />
      <path d="M114 268 C96 304 104 340 132 348" fill="none" stroke="#2b3a55" strokeWidth="5" strokeLinecap="round" />
      <path d="M186 268 C204 296 200 320 184 334" fill="none" stroke="#2b3a55" strokeWidth="5" strokeLinecap="round" />
      <circle cx="182" cy="340" r="9" fill="#9fb0c4" stroke="#2b3a55" strokeWidth="3" />
    </g>
  );
}

function Arm({ color }: { color: string }) {
  return (
    <g>
      <path d="M234 372 C238 322 228 280 210 240 L188 250 C198 288 200 326 194 372Z" fill={color} />
      <circle cx="195" cy="232" r="15" fill={SKIN} stroke={SHADE} strokeWidth="2" />
    </g>
  );
}

function Sara({ mood, talking }: { mood: StoryMood; talking: boolean }) {
  return (
    <g className={`mira ${talking ? "talking" : ""}`}>
      <defs>
        <linearGradient id="sara-iris" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#14533f" />
          <stop offset="1" stopColor="#57c78f" />
        </linearGradient>
      </defs>
      <g className="mira-body">
        <path d="M68 130 C56 48 244 48 232 130 C240 180 234 226 216 246 L84 246 C66 226 60 180 68 130Z" fill="#7a3b24" />
        <path d="M60 372 C60 300 96 264 150 264 C204 264 240 300 240 372Z" fill="#f4f8fb" stroke="#cfdbe3" strokeWidth="2" />
        <Coat />
        <rect x="136" y="214" width="28" height="50" rx="10" fill={SHADE} />
        {mood === "thinking" && <Arm color="#f4f8fb" />}
        <g className="mira-head">
          <path d="M84 128 C84 62 216 62 216 128 C216 178 182 222 150 230 C118 222 84 178 84 128Z" fill={SKIN} />
          <ellipse cx="108" cy="180" rx="14" ry="7" fill="#ff9fb0" opacity=".5" />
          <ellipse cx="192" cy="180" rx="14" ry="7" fill="#ff9fb0" opacity=".5" />
          <Eye cx={120} mood={mood} iris="sara-iris" />
          <Eye cx={180} mood={mood} iris="sara-iris" />
          {BROWS[mood].map(d => <path key={d} d={d} fill="none" stroke="#5a2a18" strokeWidth="4" strokeLinecap="round" />)}
          <path d="M149 172 L152 177" stroke={SHADE} strokeWidth="3" strokeLinecap="round" />
          <Mouth mood={mood} talking={talking} />
          <path d="M78 142 C66 62 128 40 170 46 C214 52 232 96 222 142 C214 112 196 94 168 88 C146 106 104 114 78 142Z" fill="#8f4a2e" />
          <path d="M120 62 C140 52 170 52 192 66 C166 60 142 60 120 62Z" fill="#d98a5f" opacity=".6" />
        </g>
        <Extras mood={mood} />
      </g>
    </g>
  );
}

function Hansen({ mood, talking }: { mood: StoryMood; talking: boolean }) {
  return (
    <g className={`mira ${talking ? "talking" : ""}`}>
      <defs>
        <linearGradient id="hansen-iris" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2c4a6e" />
          <stop offset="1" stopColor="#8fb8d8" />
        </linearGradient>
      </defs>
      <g className="mira-body">
        <path d="M50 372 C50 300 92 264 150 264 C208 264 250 300 250 372Z" fill="#bcdcea" />
        <path d="M116 266 L150 306 L184 266 L176 256 L124 256Z" fill="#9cc6d9" />
        <rect x="134" y="214" width="32" height="52" rx="10" fill={SHADE} />
        {[[92, 310], [122, 340], [178, 340], [208, 310], [150, 326]].map(([x, y]) => <circle key={x} cx={x} cy={y} r="4" fill="#8fb8cc" />)}
        {mood === "thinking" && <Arm color="#bcdcea" />}
        <g className="mira-head">
          <ellipse cx="84" cy="156" rx="9" ry="14" fill={SHADE} />
          <ellipse cx="216" cy="156" rx="9" ry="14" fill={SHADE} />
          <path d="M86 126 C86 62 214 62 214 126 C214 172 190 212 166 226 Q150 234 134 226 C110 212 86 172 86 126Z" fill={SKIN} />
          <path d="M122 90 Q150 84 178 90M128 100 Q150 95 172 100" fill="none" stroke={SHADE} strokeWidth="2.5" strokeLinecap="round" />
          <Eye cx={120} mood={mood} male iris="hansen-iris" />
          <Eye cx={180} mood={mood} male iris="hansen-iris" />
          <path d="M84 134 C76 100 92 72 118 68 C102 86 98 112 96 138Z" fill="#c9ced6" />
          <path d="M216 134 C224 100 208 72 182 68 C198 86 202 112 204 138Z" fill="#c9ced6" />
          <path d="M118 68 Q150 56 182 68 Q150 62 118 68Z" fill="#c9ced6" />
          {BROWS[mood].map(d => <path key={d} d={d} fill="none" stroke="#aab1bb" strokeWidth="6" strokeLinecap="round" />)}
          <g fill="none" stroke="#4a4a55" strokeWidth="3.5">
            <circle cx="120" cy="152" r="23" />
            <circle cx="180" cy="152" r="23" />
            <path d="M143 150 Q150 146 157 150M97 148 L86 144M203 148 L214 144" />
          </g>
          <path d="M148 168 L153 178 L147 179" fill="none" stroke={SHADE} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <Mouth mood={mood} talking={talking} />
          <path d="M124 184 Q150 170 176 184 Q150 188 124 184Z" fill="#c9ced6" />
        </g>
        <Extras mood={mood} />
      </g>
    </g>
  );
}

function Berg({ mood, talking }: { mood: StoryMood; talking: boolean }) {
  return (
    <g className={`mira ${talking ? "talking" : ""}`}>
      <defs>
        <linearGradient id="berg-iris" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#3a3a6e" />
          <stop offset="1" stopColor="#8d9ce8" />
        </linearGradient>
      </defs>
      <g className="mira-body">
        <circle cx="150" cy="48" r="28" fill="#b9b4c8" />
        <path d="M58 372 C58 300 96 264 150 264 C204 264 242 300 242 372Z" fill="#8d7bf0" />
        <path d="M122 264 L150 310 L178 264 L172 256 L128 256Z" fill="#f3eefc" />
        <rect x="136" y="214" width="28" height="50" rx="10" fill={SHADE} />
        <path d="M126 268 Q150 296 174 268" fill="none" stroke="#fff" strokeWidth="5" strokeLinecap="round" strokeDasharray="1 8" />
        {mood === "thinking" && <Arm color="#8d7bf0" />}
        <g className="mira-head">
          <ellipse cx="84" cy="158" rx="9" ry="14" fill={SHADE} />
          <ellipse cx="216" cy="158" rx="9" ry="14" fill={SHADE} />
          <path d="M84 128 C84 62 216 62 216 128 C216 178 182 222 150 230 C118 222 84 178 84 128Z" fill={SKIN} />
          <ellipse cx="108" cy="182" rx="13" ry="6" fill="#ff9fb0" opacity=".4" />
          <ellipse cx="192" cy="182" rx="13" ry="6" fill="#ff9fb0" opacity=".4" />
          <Eye cx={120} mood={mood} iris="berg-iris" />
          <Eye cx={180} mood={mood} iris="berg-iris" />
          {BROWS[mood].map(d => <path key={d} d={d} fill="none" stroke="#8f8aa0" strokeWidth="4" strokeLinecap="round" />)}
          <path d="M149 172 L152 177" stroke={SHADE} strokeWidth="3" strokeLinecap="round" />
          <Mouth mood={mood} talking={talking} />
          <path d="M80 142 C70 72 128 58 150 62 C172 58 230 72 220 142 C212 110 186 90 150 88 C114 90 88 110 80 142Z" fill="#cfcadb" />
          <path d="M110 76 Q150 62 190 76" fill="none" stroke="#b9b4c8" strokeWidth="4" strokeLinecap="round" />
        </g>
        <Extras mood={mood} />
      </g>
    </g>
  );
}

function Figure({ hero, casual, mood, talking }: { hero: StoryHero; casual?: boolean; mood: StoryMood; talking: boolean }) {
  if (hero === "emil") return <Emil mood={mood} talking={talking} casual={casual} />;
  if (hero === "sara") return <Sara mood={mood} talking={talking} />;
  if (hero === "hansen") return <Hansen mood={mood} talking={talking} />;
  if (hero === "berg") return <Berg mood={mood} talking={talking} />;
  return <Mira mood={mood} talking={talking} />;
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

function Clock({ x, y, r = 28, rim = "#4a4a55" }: { x: number; y: number; r?: number; rim?: string }) {
  return (
    <g>
      <circle cx={x} cy={y} r={r} fill="#fff" stroke={rim} strokeWidth="5" />
      {[0, 90, 180, 270].map(a => (
        <path key={a} d={`M${x} ${y - r + 5} V${y - r + 11}`} stroke={rim} strokeWidth="3" transform={`rotate(${a} ${x} ${y})`} />
      ))}
      <path d={`M${x} ${y} L${x + r * 0.45} ${y + r * 0.2}`} stroke={INK} strokeWidth="4" strokeLinecap="round" />
      <g className="vid-tick">
        <circle cx={x} cy={y} r={r - 6} fill="transparent" />
        <path d={`M${x} ${y} V${y - r + 8}`} stroke="#c2183a" strokeWidth="3" strokeLinecap="round" />
      </g>
      <circle cx={x} cy={y} r="3.5" fill={INK} />
    </g>
  );
}

function Jacket({ x, color }: { x: number; color: string }) {
  return (
    <g>
      <path d={`M${x} 112 q0 -10 8 -12`} fill="none" stroke="#6b6f78" strokeWidth="2.5" />
      <path d={`M${x - 20} 124 L${x} 116 L${x + 20} 124 L${x + 24} 196 H${x - 24}Z`} fill={color} />
      <path d={`M${x - 20} 124 L${x - 30} 176 L${x - 22} 178 L${x - 16} 140`} fill={color} />
      <path d={`M${x + 20} 124 L${x + 30} 176 L${x + 22} 178 L${x + 16} 140`} fill={color} />
      <path d={`M${x} 118 V196`} stroke="#fff" strokeWidth="2" opacity=".6" />
    </g>
  );
}

function Pine({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <path d="M0 -60 L18 -24 H8 L24 4 H-24 L-8 -24 H-18Z" fill="#2f5d46" />
      <path d="M0 -60 L8 -44 L-2 -40Z" fill="#fff" opacity=".85" />
      <rect x="-4" y="4" width="8" height="12" fill="#6b4a30" />
    </g>
  );
}

function Backdrop({ place }: { place: StoryPlace }) {
  if (place === "office") {
    return (
      <g>
        <rect width="640" height="360" fill="#e6edf5" />
        <path d="M0 296 H640 V360 H0Z" fill="#a3b4c9" />
        <rect x="0" y="290" width="640" height="6" fill="#fff" />
        <rect x="300" y="30" width="160" height="80" rx="8" fill="#16213a" stroke="#5d6f8f" strokeWidth="4" />
        <text x="356" y="86" textAnchor="middle" fontSize="40" fontWeight="700" fill="#ff6b5d" fontFamily="monospace">042</text>
        <path d="M404 56 L418 70 L404 84" fill="none" stroke="#46f0b4" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
        <text x="440" y="86" textAnchor="middle" fontSize="40" fontWeight="700" fill="#46f0b4" fontFamily="monospace">3</text>
        <circle className="vid-led" cx="314" cy="44" r="4" fill="#ff6b5d" />
        <rect x="486" y="118" width="60" height="178" rx="10" fill="#c7302f" />
        <rect x="496" y="132" width="40" height="30" rx="4" fill="#bfe3ff" />
        <path d="M502 142 H530M502 150 H522" stroke="#5d6f8f" strokeWidth="3" />
        <rect x="502" y="178" width="28" height="7" rx="2" fill="#3a1414" />
        <rect x="506" y="185" width="20" height="26" rx="2" fill="#fff" />
        <path d="M510 193 H522M510 200 H518" stroke="#c7302f" strokeWidth="2" />
        {[300, 348, 396].map(x => (
          <g key={x}>
            <rect x={x} y="226" width="42" height="36" rx="7" fill="#4a7bd0" />
            <rect x={x - 2} y="260" width="46" height="9" rx="3" fill="#355ea6" />
            <path d={`M${x + 6} 269 V292M${x + 36} 269 V292`} stroke="#5d6f8f" strokeWidth="4" />
          </g>
        ))}
        <rect x="566" y="36" width="60" height="84" rx="4" fill="#fff" stroke="#9fb1c8" strokeWidth="3" />
        <rect x="576" y="48" width="40" height="8" rx="2" fill="#c7302f" />
        <path d="M576 66 H616M576 76 H610M576 86 H616M576 96 H604" stroke="#9fb1c8" strokeWidth="3" />
        <rect x="576" y="104" width="9" height="9" fill="none" stroke="#5d6f8f" strokeWidth="2" />
        <path d="M577 108 L580 111 L586 102" fill="none" stroke="#2c9c5a" strokeWidth="2.5" />
        <path d="M574 292 L568 256 H614 L608 292Z" fill="#e8755a" />
        <path d="M590 256 C580 226 560 220 552 204 C576 206 588 222 590 240 C594 216 608 204 626 200 C622 224 606 240 594 256Z" fill="#46b078" />
      </g>
    );
  }
  if (place === "interview") {
    return (
      <g>
        <rect width="640" height="360" fill="#efe6dc" />
        <path d="M0 300 H640 V360 H0Z" fill="#b48a64" />
        <clipPath id="vid-window"><rect x="300" y="34" width="180" height="140" /></clipPath>
        <rect x="300" y="34" width="180" height="140" fill="#bfe2ff" />
        <ellipse className="vid-cloud" cx="350" cy="62" rx="24" ry="8" fill="#fff" />
        <g clipPath="url(#vid-window)"><g transform="translate(300 64) scale(.74)"><Skyline y={150} /></g></g>
        <rect x="300" y="34" width="180" height="140" fill="none" stroke="#fff" strokeWidth="8" />
        <path d="M390 34 V174" stroke="#fff" strokeWidth="5" />
        <Clock x={560} y={68} rim="#6b5440" />
        <rect x="508" y="116" width="96" height="66" rx="3" fill="#fffaf0" stroke="#c9a227" strokeWidth="5" />
        <path d="M522 134 H590M528 146 H584M534 158 H566" stroke="#8c7a68" strokeWidth="3" />
        <circle cx="584" cy="164" r="8" fill="#c2183a" />
        <rect x="500" y="204" width="124" height="96" fill="#8a5a3a" />
        <path d="M500 250 H624" stroke="#6b4228" strokeWidth="5" />
        {[[508, "#3a6ea8", 40], [522, "#e8755a", 36], [536, "#2c7a54", 42], [552, "#ffd34d", 34], [568, "#8d7bf0", 40]].map(([x, c, h]) => (
          <rect key={x} x={x as number} y={248 - (h as number)} width="12" height={h as number} fill={c as string} />
        ))}
        {[[510, "#c2183a", 36], [526, "#59c8ff", 40], [586, "#46b078", 38], [602, "#f28da0", 34]].map(([x, c, h]) => (
          <rect key={x} x={x as number} y={296 - (h as number)} width="14" height={h as number} fill={c as string} />
        ))}
      </g>
    );
  }
  if (place === "bank") {
    return (
      <g>
        <rect width="640" height="360" fill="#e9f1ec" />
        <path d="M0 300 H640 V360 H0Z" fill="#9ab8a8" />
        <rect x="300" y="28" width="170" height="44" rx="8" fill="#1f6b4f" />
        <circle cx="328" cy="50" r="14" fill="#ffd34d" stroke="#e8a92a" strokeWidth="3" />
        <path d="M322 50 H334M328 44 V56" stroke="#a8761a" strokeWidth="3" />
        <path d="M352 42 H452M352 56 H430" stroke="#bfe8d4" strokeWidth="5" strokeLinecap="round" />
        <rect x="300" y="92" width="170" height="120" rx="6" fill="#fff" stroke="#1f6b4f" strokeWidth="4" />
        {[0, 1, 2, 3, 4].map(i => <rect key={i} x={318 + i * 28} y={190 - (i + 1) * 16} width="18" height={(i + 1) * 16} fill={i === 4 ? "#2c9c5a" : "#9fd8bc"} />)}
        <path d="M318 168 L374 140 L402 150 L452 104" fill="none" stroke="#c2183a" strokeWidth="4" strokeLinejoin="round" />
        <path d="M440 104 H454 V118" fill="none" stroke="#c2183a" strokeWidth="4" strokeLinecap="round" />
        <text x="320" y="118" fontSize="20" fontWeight="700" fill="#1f6b4f">%</text>
        <rect x="492" y="58" width="122" height="238" rx="12" fill="#3c4a5c" />
        <rect x="506" y="76" width="94" height="66" rx="6" fill="#59c8ff" />
        <path d="M516 92 H578M516 106 H562M516 120 H586" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
        {[0, 1, 2].flatMap(r => [0, 1, 2].map(c => <rect key={`${r}${c}`} x={514 + c * 22} y={156 + r * 20} width="16" height="13" rx="3" fill="#dfe6ee" />))}
        <rect x="584" y="156" width="20" height="13" rx="3" fill="#2c9c5a" />
        <rect x="584" y="176" width="20" height="13" rx="3" fill="#ffd34d" />
        <rect x="584" y="196" width="20" height="13" rx="3" fill="#ff5d73" />
        <rect x="520" y="230" width="66" height="8" rx="3" fill="#141a24" />
        <rect x="534" y="252" width="40" height="5" rx="2" fill="#141a24" />
        <circle className="vid-led" cx="600" cy="244" r="4" fill="#46f0b4" />
      </g>
    );
  }
  if (place === "classroom") {
    return (
      <g>
        <rect width="640" height="360" fill="#f6efd9" />
        <path d="M0 300 H640 V360 H0Z" fill="#c9a77a" />
        <rect x="296" y="30" width="250" height="150" rx="6" fill="#2f5d46" stroke="#8a5a3a" strokeWidth="8" />
        <text x="346" y="96" textAnchor="middle" fontSize="46" fontWeight="700" fill="#fff" opacity=".92" fontFamily="cursive">B1</text>
        <path d="M400 62 H520M400 82 H500M400 102 H514" stroke="#fff" strokeWidth="4" strokeLinecap="round" opacity=".75" />
        <path d="M320 136 L334 150 L362 120" fill="none" stroke="#ffd34d" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M384 140 H520" stroke="#fff" strokeWidth="3" strokeDasharray="10 8" opacity=".6" />
        <rect x="292" y="180" width="258" height="8" fill="#8a5a3a" />
        <rect x="470" y="174" width="26" height="6" rx="2" fill="#fff" />
        <Clock x={596} y={64} rim="#8a5a3a" />
        <path d="M596 270 V292M572 296 H620" stroke="#6b4a30" strokeWidth="6" strokeLinecap="round" />
        <path d="M566 236 A32 32 0 0 0 624 254" fill="none" stroke="#c9a227" strokeWidth="4" />
        <circle cx="596" cy="238" r="28" fill="#59a8e8" />
        <path d="M582 220 q10 -4 14 6 q-2 10 -12 8 q-8 -6 -2 -14Z M600 236 q12 -2 14 8 q-4 12 -14 8 q-6 -8 0 -16Z" fill="#46b078" />
        <rect x="560" y="116" width="66" height="44" rx="3" fill="#fff" stroke="#c9a77a" strokeWidth="3" />
        <text x="593" y="146" textAnchor="middle" fontSize="20" fontWeight="700" fill="#c2183a">Aa</text>
      </g>
    );
  }
  if (place === "station") {
    return (
      <g>
        <rect width="640" height="360" fill="#cfe3f5" />
        <ellipse className="vid-cloud" cx="420" cy="150" rx="40" ry="11" fill="#fff" opacity=".9" />
        <path d="M0 0 H640 V36 L0 54Z" fill="#5b6676" />
        {[120, 300, 480].map(x => <path key={x} d={`M${x} 0 V300`} stroke="#7c8696" strokeWidth="10" />)}
        <rect x="0" y="232" width="640" height="44" fill="#6b6f78" />
        <path d="M0 246 H640M0 264 H640" stroke="#c9ccd2" strokeWidth="4" />
        <g className="vid-train">
          {[0, 320].map(dx => (
            <g key={dx}>
              <rect x={300 + dx} y="152" width="310" height="88" rx="18" fill="#d6283d" />
              <rect x={300 + dx} y="214" width="310" height="10" fill="#fff" opacity=".85" />
              {[0, 1, 2, 3, 4].map(i => <rect key={i} x={320 + dx + i * 56} y="170" width="40" height="30" rx="6" fill="#bfe3ff" />)}
              <circle cx={340 + dx} cy="244" r="9" fill="#2b2f38" />
              <circle cx={570 + dx} cy="244" r="9" fill="#2b2f38" />
            </g>
          ))}
        </g>
        <path d="M0 274 H640 V360 H0Z" fill="#b8bcc4" />
        <path d="M0 282 H640" stroke="#ffd34d" strokeWidth="6" strokeDasharray="22 10" />
        <rect x="320" y="58" width="210" height="84" rx="6" fill="#111a2c" stroke="#7c8696" strokeWidth="4" />
        {[0, 1, 2].map(i => (
          <g key={i}>
            <rect x="334" y={72 + i * 22} width="40" height="10" rx="2" fill="#ffd34d" />
            <rect x="384" y={72 + i * 22} width="86" height="10" rx="2" fill="#ffd34d" opacity=".75" />
            <rect className={i === 0 ? "vid-led" : undefined} x="480" y={72 + i * 22} width="36" height="10" rx="2" fill={i === 0 ? "#ff5d5d" : "#46f0b4"} />
          </g>
        ))}
        <path d="M592 36 V54" stroke="#4a4a55" strokeWidth="4" />
        <Clock x={592} y={82} />
      </g>
    );
  }
  if (place === "kitchen") {
    return (
      <g>
        <rect width="640" height="360" fill="#fdf1e3" />
        <path d="M0 300 H640 V360 H0Z" fill="#c98f5e" />
        {[180, 210, 240, 270].map(y => <path key={y} d={`M0 ${y} H640`} stroke="#f0d9c0" strokeWidth="2" />)}
        {[30, 90, 150, 210, 270, 330, 390, 450, 510, 570, 630].map(x => <path key={x} d={`M${x} 170 V300`} stroke="#f0d9c0" strokeWidth="2" />)}
        <rect x="300" y="30" width="130" height="100" rx="6" fill="#bfe2ff" stroke="#fff" strokeWidth="7" />
        <path d="M365 30 V130M300 80 H430" stroke="#fff" strokeWidth="5" />
        <ellipse className="vid-cloud" cx="340" cy="56" rx="20" ry="7" fill="#fff" />
        <path d="M300 152 H430" stroke="#8a5a3a" strokeWidth="5" strokeLinecap="round" />
        <path d="M320 152 V176 a10 10 0 1 0 6 0 V152" fill="none" stroke="#7c8696" strokeWidth="4" />
        <path d="M356 152 V170 M348 170 h16 v14 h-16z" fill="#7c8696" stroke="#7c8696" strokeWidth="4" />
        <path d="M392 152 V172 M386 172 q6 14 12 0" fill="none" stroke="#7c8696" strokeWidth="4" />
        <path d="M460 92 H624" stroke="#8a5a3a" strokeWidth="7" strokeLinecap="round" />
        {[[470, "#e8755a"], [506, "#ffd34d"], [542, "#46b078"], [578, "#a8324d"]].map(([x, c]) => (
          <g key={x}>
            <rect x={x as number} y="56" width="28" height="34" rx="5" fill="#fff" stroke="#c9b8a5" strokeWidth="2" />
            <rect x={(x as number) + 3} y="68" width="22" height="20" rx="3" fill={c as string} opacity=".8" />
            <rect x={(x as number) - 1} y="50" width="30" height="8" rx="2" fill="#8a5a3a" />
          </g>
        ))}
        <rect x="452" y="192" width="172" height="108" rx="6" fill="#e8e8ee" stroke="#b8bcc4" strokeWidth="3" />
        <rect x="470" y="226" width="136" height="60" rx="5" fill="#2b2f38" />
        <rect x="482" y="236" width="112" height="8" rx="3" fill="#4a4f5c" />
        {[478, 506, 570, 598].map(x => <circle key={x} cx={x} cy="208" r="6" fill="#4a4f5c" />)}
        <rect x="488" y="180" width="18" height="12" fill="#2b2f38" />
        <rect x="570" y="180" width="18" height="12" fill="#2b2f38" />
        <path d="M498 140 H578 V180 Q578 192 566 192 H510 Q498 192 498 180Z" fill="#c2183a" />
        <path d="M490 150 H498M578 150 H586" stroke="#8a1029" strokeWidth="6" strokeLinecap="round" />
        <ellipse cx="538" cy="140" rx="42" ry="7" fill="#e04b63" />
        <g className="vid-steam" stroke="#fff" strokeWidth="4" fill="none" opacity=".9">
          <path d="M520 130 Q512 116 522 102" />
          <path d="M540 128 Q532 112 542 96" />
          <path d="M560 130 Q552 116 562 102" />
        </g>
      </g>
    );
  }
  if (place === "mountain") {
    return (
      <g>
        <defs>
          <linearGradient id="vid-sky-cold" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#8fa8cc" />
            <stop offset="1" stopColor="#e6eef7" />
          </linearGradient>
        </defs>
        <rect width="640" height="360" fill="url(#vid-sky-cold)" />
        <path d="M160 250 L330 66 L440 190 L520 104 L680 250Z" fill="#6c7fa0" />
        <path d="M330 66 L372 112 L352 106 L336 124 L318 104 L296 112Z" fill="#fff" />
        <path d="M520 104 L556 140 L540 136 L526 150 L512 136 L494 138Z" fill="#fff" />
        <path d="M-20 260 Q180 222 360 248 T660 244 V360 H-20Z" fill="#f4f7fb" />
        <path d="M300 360 Q340 300 400 280 T480 248" fill="none" stroke="#c9b8a5" strokeWidth="6" strokeDasharray="12 10" strokeLinecap="round" />
        <Pine x={330} y={262} s={0.8} />
        <Pine x={372} y={256} s={1} />
        <Pine x={610} y={258} s={1.1} />
        <rect x="474" y="200" width="96" height="56" fill="#a33b2c" />
        <path d="M462 204 L522 166 L582 204Z" fill="#3a2a24" />
        <path d="M462 204 L522 168 L582 204" fill="none" stroke="#fff" strokeWidth="5" />
        <rect x="490" y="216" width="22" height="18" fill="#ffd36b" stroke="#fff" strokeWidth="3" />
        <rect x="530" y="222" width="20" height="34" fill="#5a2a1e" stroke="#fff" strokeWidth="3" />
        <rect x="548" y="160" width="12" height="28" fill="#5a4a44" />
        <g className="vid-steam" stroke="#e6eef7" strokeWidth="6" fill="none" opacity=".9" strokeLinecap="round">
          <path d="M554 154 Q546 140 556 126" />
          <path d="M558 128 Q568 114 560 100" />
        </g>
        {Array.from({ length: 18 }, (_, i) => (
          <circle key={i} className="vid-snow" style={{ animationDelay: `${-(i * 0.73) % 6}s` }} cx={(i * 97 + 20) % 640} cy={(i * 41) % 60} r={i % 3 ? 3 : 4.5} fill="#fff" />
        ))}
      </g>
    );
  }
  if (place === "shop") {
    return (
      <g>
        <rect width="640" height="360" fill="#f4eefa" />
        <path d="M0 300 H640 V360 H0Z" fill="#cbbfdc" />
        <rect x="310" y="22" width="120" height="50" rx="10" fill="#e23b5a" />
        <path d="M340 22 V8M400 22 V8" stroke="#8c7a9c" strokeWidth="3" />
        <text x="370" y="56" textAnchor="middle" fontSize="28" fontWeight="700" fill="#fff">-30%</text>
        <path d="M296 104 H480" stroke="#7c8696" strokeWidth="6" strokeLinecap="round" />
        <path d="M300 104 V296M476 104 V296" stroke="#7c8696" strokeWidth="5" />
        {[[326, "#3a6ea8"], [370, "#2c7a54"], [414, "#e8755a"], [454, "#8d7bf0"]].map(([x, c]) => <Jacket key={x} x={x as number} color={c as string} />)}
        <rect x="318" y="226" width="140" height="70" rx="4" fill="#fff" stroke="#b9a5d8" strokeWidth="3" />
        {[[326, "#ffd34d"], [372, "#59c8ff"], [418, "#f28da0"]].map(([x, c]) => (
          <g key={x}>
            <rect x={x as number} y="248" width="34" height="14" rx="3" fill={c as string} />
            <rect x={x as number} y="264" width="34" height="14" rx="3" fill={c as string} opacity=".75" />
          </g>
        ))}
        <ellipse cx="566" cy="150" rx="42" ry="84" fill="#dff3ff" stroke="#b9a5d8" strokeWidth="7" />
        <path d="M546 106 L560 92M548 130 L578 100" stroke="#fff" strokeWidth="5" strokeLinecap="round" />
        <path d="M546 238 L536 296M586 238 L596 296" stroke="#b9a5d8" strokeWidth="6" strokeLinecap="round" />
        <path d="M500 60 L520 60 L528 74 L520 88 H500Z" fill="#ffd34d" stroke="#e8a92a" strokeWidth="2" />
        <circle cx="506" cy="74" r="3" fill="#fff" />
      </g>
    );
  }
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
  if (place === "office") {
    return (
      <g>
        <rect x="330" y="316" width="310" height="12" fill="#d0d8e4" />
        <rect x="330" y="328" width="310" height="32" fill="#b3bfcf" />
        <rect x="380" y="294" width="62" height="24" fill="#fff" stroke="#9fb1c8" strokeWidth="2" transform="rotate(-6 411 306)" />
        <rect x="400" y="296" width="62" height="22" fill="#fff" stroke="#9fb1c8" strokeWidth="2" />
        <path d="M408 304 H452M408 311 H444" stroke="#9fb1c8" strokeWidth="2" />
        <path d="M478 312 L520 292" stroke="#3a6ea8" strokeWidth="6" strokeLinecap="round" />
        <path d="M478 312 L474 316" stroke="#241c4f" strokeWidth="3" strokeLinecap="round" />
        <rect x="560" y="300" width="20" height="16" rx="2" fill="#fff" stroke="#c7302f" strokeWidth="2" />
        <text x="570" y="312" textAnchor="middle" fontSize="8" fontWeight="700" fill="#c7302f">042</text>
      </g>
    );
  }
  if (place === "interview") {
    return (
      <g>
        <rect x="300" y="312" width="340" height="14" fill="#8a5a3a" />
        <rect x="300" y="326" width="340" height="34" fill="#6b4228" />
        <rect x="350" y="290" width="74" height="24" fill="#fff" stroke="#c9b8a5" strokeWidth="2" transform="rotate(-4 387 302)" />
        <rect x="358" y="294" width="14" height="14" fill="#9fb1c8" />
        <path d="M378 297 H414M378 303 H408M378 309 H412" stroke="#8c7a68" strokeWidth="2" />
        <path d="M452 270 L456 312 H476 L480 270Z" fill="#dff3ff" stroke="#9fb1c8" strokeWidth="2" opacity=".9" />
        <path d="M455 286 H477" stroke="#59c8ff" strokeWidth="10" opacity=".55" />
        <path d="M520 312 L530 290 H600 L610 312Z" fill="#2b2f38" />
        <path d="M540 302 H590" stroke="#c9a227" strokeWidth="3" />
      </g>
    );
  }
  if (place === "bank") {
    return (
      <g>
        <rect x="300" y="314" width="340" height="12" fill="#cfe0d6" />
        <rect x="300" y="326" width="340" height="34" fill="#1f6b4f" />
        {[0, 1, 2, 3, 4].map(i => <ellipse key={i} cx="360" cy={308 - i * 7} rx="16" ry="5" fill="#ffd34d" stroke="#c9a227" strokeWidth="2" />)}
        {[0, 1, 2].map(i => <ellipse key={i} cx="398" cy={308 - i * 7} rx="16" ry="5" fill="#ffd34d" stroke="#c9a227" strokeWidth="2" />)}
        <ellipse cx="490" cy="290" rx="38" ry="26" fill="#f28da0" />
        <circle cx="524" cy="282" r="12" fill="#f28da0" />
        <ellipse cx="532" cy="284" rx="6" ry="5" fill="#e06b84" />
        <path d="M470 268 L476 256 L484 266Z" fill="#e06b84" />
        <rect x="478" y="262" width="22" height="4" rx="2" fill="#a8324d" />
        <path d="M470 312 V302M506 312 V302" stroke="#e06b84" strokeWidth="8" strokeLinecap="round" />
        <circle cx="516" cy="278" r="2.5" fill="#241c4f" />
        <rect x="560" y="294" width="56" height="20" rx="4" fill="#3a6ea8" transform="rotate(-8 588 304)" />
        <rect x="566" y="298" width="12" height="8" rx="2" fill="#ffd34d" transform="rotate(-8 588 304)" />
      </g>
    );
  }
  if (place === "classroom") {
    return (
      <g>
        <rect x="300" y="314" width="340" height="12" fill="#b9835a" />
        <rect x="300" y="326" width="340" height="34" fill="#8f6240" />
        <rect x="340" y="300" width="70" height="14" rx="2" fill="#3a6ea8" />
        <rect x="346" y="288" width="62" height="12" rx="2" fill="#c2183a" />
        <rect x="342" y="276" width="66" height="12" rx="2" fill="#2c7a54" />
        <path d="M430 314 L472 304 L514 314 L514 312 L472 300 L430 310Z" fill="#fff" stroke="#c9b8a5" strokeWidth="2" />
        <path d="M440 309 L466 303M480 303 L506 309" stroke="#9fb1c8" strokeWidth="2" />
        <path d="M532 310 L588 296" stroke="#ffd34d" strokeWidth="7" strokeLinecap="round" />
        <path d="M588 296 L598 294" stroke="#f6c7b4" strokeWidth="7" strokeLinecap="round" />
        <circle cx="612" cy="300" r="14" fill="#d6283d" />
        <path d="M612 286 Q614 280 620 278" fill="none" stroke="#6b4a30" strokeWidth="3" />
      </g>
    );
  }
  if (place === "station") {
    return (
      <g>
        <rect x="530" y="270" width="64" height="56" rx="8" fill="#3a6ea8" />
        <path d="M548 270 V258 H576 V270" fill="none" stroke="#241c4f" strokeWidth="5" />
        <path d="M546 278 V320M578 278 V320" stroke="#2b5585" strokeWidth="4" />
        <circle cx="542" cy="330" r="5" fill="#241c4f" />
        <circle cx="582" cy="330" r="5" fill="#241c4f" />
        <rect x="552" y="290" width="22" height="12" rx="2" fill="#ffd34d" />
      </g>
    );
  }
  if (place === "kitchen") {
    return (
      <g>
        <rect x="300" y="314" width="340" height="12" fill="#e8d2b4" />
        <rect x="300" y="326" width="340" height="34" fill="#a8764e" />
        <rect x="350" y="300" width="130" height="14" rx="5" fill="#d9a46c" />
        <path d="M370 302 L420 294 L424 300 L374 308Z" fill="#ff8a3d" />
        <path d="M418 294 l10 -6 M420 296 l12 -2" stroke="#46b078" strokeWidth="3" strokeLinecap="round" />
        {[440, 452, 464].map(x => <ellipse key={x} cx={x} cy="304" rx="5" ry="3" fill="#ff8a3d" stroke="#e86c1f" strokeWidth="1.5" />)}
        <path d="M486 312 L540 298 L546 304 L492 314Z" fill="#c9ccd2" />
        <path d="M540 298 L566 292 L568 298 L546 304Z" fill="#3a2a24" />
        <circle cx="590" cy="300" r="15" fill="#e23b3b" />
        <path d="M584 286 l6 4 6 -4" fill="none" stroke="#2c7a54" strokeWidth="3" strokeLinecap="round" />
      </g>
    );
  }
  if (place === "mountain") {
    return (
      <g>
        <path d="M520 360 L534 300 Q560 280 600 290 L640 304 V360Z" fill="#8c95a6" />
        <path d="M534 300 Q560 280 600 290 L640 304" fill="none" stroke="#fff" strokeWidth="6" strokeLinecap="round" />
        <text x="580" y="336" textAnchor="middle" fontSize="28" fontWeight="700" fill="#d6283d">T</text>
        <rect x="430" y="284" width="56" height="70" rx="14" fill="#e86c1f" />
        <rect x="438" y="312" width="40" height="26" rx="6" fill="#c9561a" />
        <path d="M444 284 Q458 266 472 284" fill="none" stroke="#7a3410" strokeWidth="5" />
        <rect x="436" y="296" width="44" height="6" fill="#7a3410" />
      </g>
    );
  }
  if (place === "shop") {
    return (
      <g>
        <rect x="320" y="312" width="320" height="14" fill="#e6dcf3" />
        <rect x="320" y="326" width="320" height="34" fill="#8d7bf0" />
        <path d="M380 312 L390 270 H470 L480 312Z" fill="#3c4a5c" />
        <rect x="398" y="256" width="62" height="20" rx="3" fill="#2b2f38" />
        <rect x="404" y="260" width="38" height="12" rx="2" fill="#46f0b4" />
        {[0, 1, 2].map(i => <rect key={i} x={400 + i * 20} y="284" width="14" height="8" rx="2" fill="#dfe6ee" />)}
        <path d="M520 312 L528 262 H590 L598 312Z" fill="#ffd34d" />
        <path d="M542 262 Q559 236 576 262" fill="none" stroke="#c9a227" strokeWidth="5" />
        <path d="M540 284 H578" stroke="#e23b5a" strokeWidth="6" strokeLinecap="round" />
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
  cast?: [StoryHero, StoryHero];
  moods?: [StoryMood, StoryMood];
  speaker?: 0 | 1;
}

export function StoryStage({ hero, casual, place, mood, talking, cast, moods, speaker }: StageProps) {
  return (
    <svg viewBox="0 0 640 360" role="img" aria-hidden="true">
      <g key={place} className="vid-scene">
        <g className="vid-pan"><Backdrop place={place} /></g>
      </g>
      <clipPath id="vid-frame"><rect width="640" height="360" /></clipPath>
      <g clipPath="url(#vid-frame)">
        {cast && moods ? cast.map((who, i) => (
          <g key={i} transform={i ? "translate(620 62) scale(-.8 .8)" : "translate(20 62) scale(.8)"}>
            <g key={moods[i]} className="mira-enter">
              <Figure hero={who} casual={casual} mood={moods[i]} talking={talking && speaker === i} />
            </g>
            {speaker === i && <path className="vid-speaker" d="M136 -36 H164 L150 -18Z" fill="#ffd34d" stroke="#fff" strokeWidth="2" />}
          </g>
        )) : (
          <g transform="translate(28 16) scale(.98)">
            <g key={mood} className="mira-enter"><Figure hero={hero} casual={casual} mood={mood} talking={talking} /></g>
          </g>
        )}
      </g>
      <g key={`fg-${place}`} className="vid-scene"><Foreground place={place} /></g>
    </svg>
  );
}
