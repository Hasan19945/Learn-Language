import { useState, type FormEvent } from "react";
import type { Strings } from "../i18n";
import { authErrorKey, resetPassword, signIn, signUp } from "../lib/auth";
import type { Lang } from "../types";

type Mode = "signin" | "signup" | "reset";

interface Props {
  t: Strings;
  uiLang: Lang;
  onLogin: (id: string) => void;
}

export function EmailAuth({ t, uiLang, onLogin }: Props) {
  const a = t.auth;
  const [mode, setMode] = useState<Mode>("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeat, setRepeat] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);

  const change = (next: Mode) => {
    setMode(next);
    setPassword("");
    setRepeat("");
    setError("");
    setSent(false);
  };

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setSent(false);
    if (mode === "signup" && password !== repeat) return setError(a.mismatch);
    setBusy(true);
    try {
      const address = email.trim();
      if (mode === "signin") onLogin(await signIn(address, password));
      else if (mode === "signup") onLogin(await signUp(address, password));
      else {
        await resetPassword(address, uiLang);
        setSent(true);
      }
    } catch (err) {
      setError(a.errors[authErrorKey(err)]);
    }
    setBusy(false);
  };

  return (
    <form className="panel stack" onSubmit={submit}>
      <h3>{mode === "signin" ? a.signinTitle : mode === "signup" ? a.signupTitle : a.resetTitle}</h3>
      <label htmlFor="auth-email">{a.email}</label>
      <input id="auth-email" className="input" type="email" autoComplete="email" autoCapitalize="off" spellCheck={false} required
        value={email} onChange={e => setEmail(e.target.value)} />
      {mode !== "reset" && (
        <>
          <label htmlFor="auth-password">{a.password}</label>
          <input id="auth-password" className="input" type="password" required minLength={mode === "signup" ? 8 : undefined}
            autoComplete={mode === "signup" ? "new-password" : "current-password"} value={password} onChange={e => setPassword(e.target.value)} />
        </>
      )}
      {mode === "signup" && (
        <>
          <p className="muted" style={{ fontSize: ".85rem" }}>{a.passwordHint}</p>
          <label htmlFor="auth-repeat">{a.repeat}</label>
          <input id="auth-repeat" className="input" type="password" required autoComplete="new-password" value={repeat} onChange={e => setRepeat(e.target.value)} />
        </>
      )}
      {error && <p className="err" role="alert">{error}</p>}
      {sent && <p role="status">{a.resetSent}</p>}
      <button className="btn block" disabled={busy}>
        {mode === "signin" ? a.signin : mode === "signup" ? a.signup : a.reset}
      </button>
      {mode === "signup" && <p className="muted" style={{ fontSize: ".85rem" }}>{a.privacyAccept}</p>}
      <div className="row" style={{ justifyContent: "space-between" }}>
        {mode !== "signin" && <button type="button" className="link" onClick={() => change("signin")}>{a.toSignin}</button>}
        {mode !== "signup" && <button type="button" className="link" onClick={() => change("signup")}>{a.toSignup}</button>}
        {mode === "signin" && <button type="button" className="link" onClick={() => change("reset")}>{a.toReset}</button>}
      </div>
      <details className="grp">
        <summary>{a.privacyTitle}</summary>
        <p className="muted" style={{ fontSize: ".88rem" }}>{a.privacyText}</p>
      </details>
    </form>
  );
}
