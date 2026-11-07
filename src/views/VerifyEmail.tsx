import { useCallback, useEffect, useState } from "react";
import { Logo } from "../components/Logo";
import type { Strings } from "../i18n";
import { authErrorKey, checkVerified, resendVerification } from "../lib/auth";
import { EMAIL_KEY, store } from "../lib/storage";

interface Props {
  t: Strings;
  onVerified: () => void;
  onLogout: () => void;
}

export function VerifyEmail({ t, onVerified, onLogout }: Props) {
  const a = t.auth;
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);

  const check = useCallback(async () => {
    if (await checkVerified()) {
      onVerified();
      return true;
    }
    return false;
  }, [onVerified]);

  useEffect(() => {
    const silent = () => void check().catch(() => undefined);
    silent();
    addEventListener("focus", silent);
    return () => removeEventListener("focus", silent);
  }, [check]);

  const confirm = async () => {
    setBusy(true);
    setMessage("");
    try {
      if (!await check()) setMessage(a.verifyNotYet);
    } catch (err) {
      setMessage(a.errors[authErrorKey(err)]);
    }
    setBusy(false);
  };

  const resend = async () => {
    setMessage("");
    try {
      await resendVerification();
      setMessage(a.verifySent);
    } catch (err) {
      setMessage(a.errors[authErrorKey(err)]);
    }
  };

  return (
    <main className="wrap fade">
      <header className="top">
        <span className="brand"><Logo /><span>Adım <b>Adım</b></span></span>
      </header>
      <section className="panel stack">
        <h1>{a.verifyTitle}</h1>
        <p>{a.verifyText(store.get(EMAIL_KEY) || "")}</p>
        <p className="muted" style={{ fontSize: ".9rem" }}>{a.verifySpam}</p>
        {message && <p role="status">{message}</p>}
        <button className="btn block" disabled={busy} onClick={() => void confirm()}>{a.verifyCheck}</button>
        <button className="btn ghost block" onClick={() => void resend()}>{a.verifyAgain}</button>
        <button className="btn ghost block" onClick={onLogout}>{t.settings.logout}</button>
      </section>
    </main>
  );
}
