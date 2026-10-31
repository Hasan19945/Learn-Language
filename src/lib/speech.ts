import { useEffect, useState } from "react";

export function useVoice(pattern: RegExp) {
  const [voice, setVoice] = useState<SpeechSynthesisVoice | null>(null);
  useEffect(() => {
    setVoice(null);
    if (!("speechSynthesis" in window)) return;
    const find = () => {
      const v = speechSynthesis.getVoices().find(x => pattern.test(x.lang));
      if (v) setVoice(current => current || v);
    };
    find();
    speechSynthesis.addEventListener("voiceschanged", find);
    return () => speechSynthesis.removeEventListener("voiceschanged", find);
  }, [pattern]);
  return voice;
}

export function speak(voice: SpeechSynthesisVoice, text: string) {
  const u = new SpeechSynthesisUtterance(text);
  u.voice = voice;
  u.lang = voice.lang;
  u.rate = 0.85;
  speechSynthesis.cancel();
  speechSynthesis.speak(u);
}
