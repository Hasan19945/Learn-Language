function Foot() {
  return (
    <>
      <ellipse cx="0" cy="1" rx="2.7" ry="4.3" />
      <circle cx="-2.1" cy="-4.4" r="1.05" />
      <circle cx="-0.3" cy="-5.2" r="0.95" />
      <circle cx="1.4" cy="-4.9" r="0.85" />
      <circle cx="2.6" cy="-3.9" r="0.75" />
    </>
  );
}

export function Logo() {
  return (
    <svg className="logo" viewBox="0 0 24 24" width={28} height={28} aria-hidden="true">
      <g className="step back"><g transform="translate(7.5 15) rotate(-8) scale(-1 1)"><Foot /></g></g>
      <g className="step front"><g transform="translate(16 8) rotate(8)"><Foot /></g></g>
    </svg>
  );
}
