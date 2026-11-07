import type { Lang } from "../types";
import { en } from "./en";
import { nb } from "./nb";
import { tr } from "./tr";
import type { Strings } from "./types";

export type { Strings };

export const STRINGS: Record<Lang, Strings> = { tr, nb, en };

export const LANGS: Lang[] = ["tr", "nb", "en"];

export const isLang = (x: string | null): x is Lang => x === "tr" || x === "nb" || x === "en";

export function browserLang(): Lang {
  if (/^(nb|nn|no)\b/i.test(navigator.language)) return "nb";
  return /^en\b/i.test(navigator.language) ? "en" : "tr";
}
