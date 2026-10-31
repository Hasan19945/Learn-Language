import { speak } from "../lib/speech";
import { useApp } from "../state/AppContext";
import { Icon } from "./Icon";

export function SayButton({ text }: { text: string }) {
  const { voice } = useApp();
  if (!voice) return null;
  return (
    <button className="icon-btn" onClick={() => speak(voice, text)} aria-label={`Dinle: ${text}`}>
      <Icon name="sound" />
    </button>
  );
}
