import { STRINGS } from "../i18n";
import type { Lang } from "../types";

const LANGS: Lang[] = ["tr", "nb"];

export function LangSwitch({ value, onChange, label }: { value: Lang; onChange: (lang: Lang) => void; label: string }) {
  return (
    <div className="seg" role="group" aria-label={label}>
      {LANGS.map(l => (
        <button key={l} lang={STRINGS[l].htmlLang} aria-pressed={value === l} onClick={() => onChange(l)}>{STRINGS[l].nativeName}</button>
      ))}
    </div>
  );
}
