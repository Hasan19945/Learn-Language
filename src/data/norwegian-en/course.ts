import type { CourseDef } from "../../types";
import a0 from "./a0";
import a1 from "./a1";
import a2 from "./a2";
import b1 from "./b1";
import b2 from "./b2";
import c1 from "./c1";
import { interests } from "./interests";
import { placement } from "./placement";
import topics from "./topics";

export const norwegianEn: CourseDef = {
  id: "no-en", native: "en", name: "Norsk", lang: "Norwegian", code: "NO", variant: "Bokmål", yourLang: "your Norwegian", key: "adim-adim-norsk-en-v1", doc: "norsk-en",
  voice: /^(nb|no|nn)([-_]|$)/i, voiceName: "Norsk bokmål", letters: ["æ", "ø", "å"],
  hero: "Learn Norwegian from scratch, step by step.",
  sub: "Explanations in English, examples in Norwegian (Bokmål)",
  about: "This version is made for English speakers. The lessons point out where Norwegian and English differ and the mistakes English speakers tend to make.",
  sentenceNote: "New verbs: ser (watches), spiller (plays), betaler (pays), kjøper (buys). All add -r in the present, whoever the subject is.",
  lessons: [...a0, ...a1, ...a2, ...b1, ...b2, ...c1, ...topics],
  levels: [
    { id: "A0", title: "Beginner", d: "The alphabet, greetings, first sentences" },
    { id: "A1", title: "Elementary", d: "Family, shopping, time, home, transport" },
    { id: "A2", title: "Pre-intermediate", d: "Past tense, the doctor, work, renting, plans" },
    { id: "B1", title: "Intermediate", d: "Official matters, job interviews, opinions, banking, health, IT" },
    { id: "B2", title: "Upper intermediate", d: "Formal writing, debate, idioms, working life, illnesses, software" },
    { id: "C1", title: "Advanced", d: "Academic style, negotiation, hypotheticals, society, dialects, medical language, software architecture" }
  ],
  interests,
  placement
};
