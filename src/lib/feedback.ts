import { SOUND_KEY, store } from "./storage";

let audio: AudioContext | null = null;

export const soundOn = () => store.get(SOUND_KEY) !== "off";

export const setSoundOn = (on: boolean) => store.set(SOUND_KEY, on ? null : "off");

function tone(ctx: AudioContext, start: number, from: number, to: number, length: number, type: OscillatorType, volume: number) {
  const osc = ctx.createOscillator(), gain = ctx.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(from, start);
  osc.frequency.exponentialRampToValueAtTime(to, start + length);
  gain.gain.setValueAtTime(0.0001, start);
  gain.gain.exponentialRampToValueAtTime(volume, start + 0.015);
  gain.gain.exponentialRampToValueAtTime(0.0001, start + length);
  osc.connect(gain).connect(ctx.destination);
  osc.start(start);
  osc.stop(start + length + 0.02);
}

export function playAnswer(right: boolean) {
  if (!soundOn() || !("AudioContext" in window)) return;
  try {
    audio ||= new AudioContext();
    if (audio.state === "suspended") void audio.resume();
    const now = audio.currentTime;
    if (right) {
      tone(audio, now, 660, 660, 0.14, "sine", 0.22);
      tone(audio, now + 0.11, 988, 988, 0.24, "sine", 0.22);
    } else {
      tone(audio, now, 220, 140, 0.32, "triangle", 0.28);
    }
  } catch {
    return;
  }
}
