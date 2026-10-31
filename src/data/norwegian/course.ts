import type { CourseDef } from "../../types";
import a0 from "./a0";
import a1 from "./a1";
import a2 from "./a2";
import b1 from "./b1";
import b2 from "./b2";
import c1 from "./c1";
import { interests } from "./interests";
import { levels } from "./levels";
import { placement } from "./placement";

export const norwegian: CourseDef = {
  id: "no", name: "Norsk", lang: "Norveççe", yourLang: "Norveççen", key: "adim-adim-norsk-v1", doc: "progress",
  voice: /^(nb|no|nn)([-_]|$)/i, voiceName: "Norsk bokmål", letters: ["æ", "ø", "å"],
  hero: "Norveççeyi sıfırdan, adım adım öğren.",
  sub: "Açıklamalar Türkçe, örnekler Norveççe (Bokmål)",
  about: "Bu sürüm Türkçe konuşanlar için hazırlandı. Dersler Türkçe ile Norveççe arasındaki farkları özellikle gösteriyor.",
  sentenceNote: "Yeni fiiller: ser (izler), spiller (oynar), betaler (öder), kjøper (satın alır). Hepsi mastar + r kuralına uyar.",
  lessons: [...a0, ...a1, ...a2, ...b1, ...b2, ...c1],
  interests, levels, placement
};
