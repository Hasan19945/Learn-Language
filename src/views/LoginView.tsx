import { useRef, useState, type FormEvent } from "react";
import { Choice } from "../components/Choice";
import { accountName, ACCOUNTS, checkPassword } from "../lib/accounts";

export function LoginView({ onLogin }: { onLogin: (id: string) => void }) {
  const [picked, setPicked] = useState<string | null>(null);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const input = useRef<HTMLInputElement>(null);

  const choose = (id: string) => {
    setPicked(id);
    setPassword("");
    setError("");
    input.current?.focus();
  };

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (picked && await checkPassword(picked, password)) return onLogin(picked);
    setError("Şifre yanlış. Tekrar dene.");
    input.current?.focus();
  };

  return (
    <main className="wrap fade">
      <header className="top"><span className="brand">Adım <b>Adım</b></span></header>
      <div className="stack">
        <h1>Hesabını seç</h1>
        <p className="muted">Her hesabın kendi ilerlemesi var. Hangi cihazdan girersen gir, kaldığın yerden devam edersin.</p>
      </div>
      <div className="choices two">
        {ACCOUNTS.map(a => <Choice key={a.id} pressed={picked === a.id} onClick={() => choose(a.id)} title={a.name} />)}
      </div>
      {picked && (
        <form className="panel stack fade" onSubmit={submit}>
          <label htmlFor="pw"><strong>{accountName(picked)}</strong> şifresi</label>
          <input ref={input} id="pw" className="input" type="password" autoComplete="current-password" autoCapitalize="off"
            spellCheck={false} required autoFocus value={password} onChange={e => setPassword(e.target.value)} />
          {error && <p className="err" role="alert">{error}</p>}
          <button className="btn block" type="submit">Giriş yap</button>
        </form>
      )}
    </main>
  );
}
