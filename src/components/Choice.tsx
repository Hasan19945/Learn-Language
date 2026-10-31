import type { ReactNode } from "react";

interface ChoiceProps {
  pressed: boolean;
  onClick: () => void;
  title: ReactNode;
  sub?: ReactNode;
}

export function Choice({ pressed, onClick, title, sub }: ChoiceProps) {
  return (
    <button className="choice" onClick={onClick} aria-pressed={pressed}>
      <strong>{title}</strong>
      {sub && <small>{sub}</small>}
    </button>
  );
}
