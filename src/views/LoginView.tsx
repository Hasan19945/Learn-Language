import { useRef, useState, type FormEvent } from "react";
import { Choice } from "../components/Choice";
import { Emphasis } from "../components/Emphasis";
import { LangSwitch } from "../components/LangSwitch";
import { Logo } from "../components/Logo";
import type { Strings } from "../i18n";
import { accountName, ACCOUNTS, checkPassword } from "../lib/accounts";
import type { Lang } from "../types";

interface Props {
  t: Strings;
  uiLang: Lang;
  setUiLang: (lang: Lang) => void;
  onLogin: (id: string) => void;
}

export function LoginView({ t, uiLang, setUiLang, onLogin }: Props) {
  const [picked, setPicked] = useState<string | null>(null);
  const [password, setPassword] = useState("");
  const [wrong, setWrong] = useState(false);
  const input = useRef<HTMLInputElement>(null);

  const choose = (id: string) => {
    setPicked(id);
    setPassword("");
    setWrong(false);
    input.current?.focus();
  };

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (picked && await checkPassword(picked, password)) return onLogin(picked);
    setWrong(true);
    input.current?.focus();
  };

  return (
    <main className="wrap fade">
      <header className="top">
        <span className="brand"><Logo /><span>Adım <b>Adım</b></span></span>
        <LangSwitch value={uiLang} onChange={setUiLang} label={t.login.uiLanguage} />
      </header>
      <div className="stack">
        <h1>{t.login.title}</h1>
        <p className="muted">{t.login.intro}</p>
      </div>
      <div className="choices two">
        {ACCOUNTS.map(a => <Choice key={a.id} pressed={picked === a.id} onClick={() => choose(a.id)} title={accountName(t, a.id)} />)}
      </div>
      {picked && (
        <form className="panel stack fade" onSubmit={submit}>
          <label htmlFor="pw"><Emphasis text={t.login.password(accountName(t, picked))} part={accountName(t, picked)} /></label>
          <input ref={input} id="pw" className="input" type="password" autoComplete="current-password" autoCapitalize="off"
            spellCheck={false} required autoFocus value={password} onChange={e => setPassword(e.target.value)} />
          {wrong && <p className="err" role="alert">{t.login.wrong}</p>}
          <button className="btn block" type="submit">{t.login.submit}</button>
        </form>
      )}
    </main>
  );
}
