import { useEffect, useState, type FormEvent } from "react";
import { COURSES } from "../data/courses";
import { accountName, ACCOUNTS, checkPassword } from "../lib/accounts";
import { authErrorKey, currentUser, deleteEmailAccount, type EmailUser } from "../lib/auth";
import { copyLegacyProgress, removeLocalProgress } from "../lib/sync";
import { useApp } from "../state/AppContext";

const ALL = Object.values(COURSES);

export function AccountPanels() {
  const { account, course, openCourse, afterDelete, t } = useApp();
  const a = t.auth;
  const [user, setUser] = useState<EmailUser | null>(null);
  const [legacy, setLegacy] = useState(ACCOUNTS[0].id);
  const [legacyPw, setLegacyPw] = useState("");
  const [copyMsg, setCopyMsg] = useState("");
  const [askDelete, setAskDelete] = useState(false);
  const [deletePw, setDeletePw] = useState("");
  const [deleteError, setDeleteError] = useState("");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    void currentUser().then(setUser, () => undefined);
  }, []);

  const copy = async (e: FormEvent) => {
    e.preventDefault();
    if (!await checkPassword(legacy, legacyPw)) return setCopyMsg(t.login.wrong);
    const n = copyLegacyProgress(ALL, legacy, account);
    setLegacyPw("");
    if (!n) return setCopyMsg(a.copyNone);
    openCourse(course.id);
  };

  const remove = async (e: FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setDeleteError("");
    try {
      await deleteEmailAccount(deletePw, ALL.map(c => c.doc));
      removeLocalProgress(ALL, account);
      afterDelete();
    } catch (err) {
      setDeleteError(a.errors[authErrorKey(err)]);
      setBusy(false);
    }
  };

  return (
    <>
      {user && (
        <section className="panel stack">
          <h3>{a.accountTitle}</h3>
          <p>{user.email}</p>
        </section>
      )}
      <section className="panel stack">
        <h3>{a.copyTitle}</h3>
        <p className="muted">{a.copyText}</p>
        <form className="stack" onSubmit={copy}>
          <div className="choices two">
            {ACCOUNTS.map(x => (
              <button key={x.id} type="button" className="choice" aria-pressed={legacy === x.id} onClick={() => setLegacy(x.id)}>
                <strong>{accountName(t, x.id)}</strong>
              </button>
            ))}
          </div>
          <label htmlFor="legacy-pw">{t.login.password(accountName(t, legacy))}</label>
          <input id="legacy-pw" className="input" type="password" autoComplete="off" required value={legacyPw} onChange={e => setLegacyPw(e.target.value)} />
          {copyMsg && <p role="status">{copyMsg}</p>}
          <button className="btn ghost">{a.copyButton}</button>
        </form>
      </section>
      <section className="panel stack">
        <h3>{a.deleteTitle}</h3>
        <p className="muted">{a.deleteText}</p>
        {askDelete ? (
          <form className="confirm stack" onSubmit={remove}>
            <label htmlFor="delete-pw"><strong>{a.deleteConfirm}</strong></label>
            <input id="delete-pw" className="input" type="password" autoComplete="current-password" required value={deletePw} onChange={e => setDeletePw(e.target.value)} />
            {deleteError && <p className="err" role="alert">{deleteError}</p>}
            <div className="row">
              <button className="btn danger" disabled={busy}>{a.deleteYes}</button>
              <button type="button" className="btn ghost" onClick={() => setAskDelete(false)}>{t.settings.cancel}</button>
            </div>
          </form>
        ) : (
          <button className="btn ghost" onClick={() => setAskDelete(true)}>{a.deleteTitle}</button>
        )}
      </section>
    </>
  );
}
