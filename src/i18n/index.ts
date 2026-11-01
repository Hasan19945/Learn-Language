import type { Lang } from "../types";
import { nb } from "./nb";
import { tr } from "./tr";
import type { Strings } from "./types";

export type { Strings };

export const STRINGS: Record<Lang, Strings> = { tr, nb };

export const isLang = (x: string | null): x is Lang => x === "tr" || x === "nb";

export const browserLang = (): Lang => /^(nb|nn|no)\b/i.test(navigator.language) ? "nb" : "tr";
