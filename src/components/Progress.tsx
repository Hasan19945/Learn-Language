export function Bar({ value }: { value: number }) {
  return (
    <div className="bar" role="progressbar" aria-valuenow={Math.round(value * 100)} aria-valuemin={0} aria-valuemax={100}>
      <i style={{ width: `${value * 100}%` }} />
    </div>
  );
}

export function Ring({ value, max }: { value: number; max: number }) {
  const r = 24, c = 2 * Math.PI * r, p = Math.min(value / max, 1);
  return (
    <svg className="ring" viewBox="0 0 56 56" role="img" aria-label={`Bugün ${value}/${max}`}>
      <circle className="t" cx="28" cy="28" r={r} />
      <circle className="v" cx="28" cy="28" r={r} strokeDasharray={c} strokeDashoffset={c * (1 - p)} transform="rotate(-90 28 28)" />
      <text x="28" y="32" textAnchor="middle">{Math.round(p * 100)}%</text>
    </svg>
  );
}
