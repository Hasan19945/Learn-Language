import { useEffect, useState } from "react";

export function AnswerBurst({ right }: { right: boolean }) {
  const [shown, setShown] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShown(false), 950);
    return () => clearTimeout(timer);
  }, []);

  if (!shown) return null;
  return (
    <div className={`burst ${right ? "ok" : "bad"}`} aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
        {right ? <path className="burst-mark" d="m5 12.5 4.5 4.5L19 7.5" /> : <path className="burst-mark" d="M6.5 6.5 17.5 17.5M17.5 6.5 6.5 17.5" />}
      </svg>
    </div>
  );
}
