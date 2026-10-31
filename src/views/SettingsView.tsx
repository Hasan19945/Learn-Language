import { useState, useSyncExternalStore } from "react";
import { PlacementCard } from "../components/Cards";
import { Choice } from "../components/Choice";
import { Nav } from "../components/Nav";
import { FLOWS, GOALS } from "../data/options";
import { accountName } from "../lib/accounts";
import { freshProgress } from "../lib/progress";
import { progressSync, type SyncStatus } from "../lib/sync";
import { useApp } from "../state/AppContext";

const SYNC_TEXT: Record<SyncStatus, string> = {
  cloud: "İlerlemen çevrim içi kaydediliyor. Bu hesapla başka bir cihazdan girersen kaldığın yerden devam edersin.",
  local: "İlerlemen şu an sadece bu cihazda kaydediliyor. Çevrim içi kayıt için uygulamayı claude.ai hesabınla giriş yapmış olarak aç.",
  readonly: "Bu bağlantıda kayıt izni yok, bu yüzden ilerlemen sadece bu cihazda kaydediliyor. Uygulamanın sahibinden sana en az \"Contributor\" erişimi vermesini iste.",
  error: "Çevrim içi kayıt şu an yapılamadı. İlerlemen bu cihazda saklandı; bağlantı düzelince tekrar denenecek.",
  wait: "Kayıt durumu kontrol ediliyor…"
};

export function SettingsView() {
  const { account, course, progress, update, voice, go, logout } = useApp();
  const sync = useSyncExternalStore(progressSync.subscribe, progressSync.getStatus, progressSync.getStatus);
  const [confirmReset, setConfirmReset] = useState(false);
  const profile = progress.profile!;
  const name = accountName(account);

  const toggleInterest = (k: string) => update(p => {
    const a = p.profile!.interests;
    p.profile!.interests = a.includes(k) ? a.filter(x => x !== k) : [...a, k];
  });

  const reset = () => {
    update(p => ({ ...freshProgress(), profile: p.profile }));
    setConfirmReset(false);
    go({ name: "path" });
  };

  return (
    <>
      <main className="wrap fade">
        <header>
          <p className="eyebrow">Ayarlar</p>
          <h1>Öğrenme tercihlerin</h1>
        </header>
        <section className="panel stack">
          <div className="row" style={{ justifyContent: "space-between" }}>
            <h3>{name}</h3>
            <span className={`chip ${sync === "cloud" ? "ok" : ""}`}>{sync === "cloud" ? "Çevrim içi" : "Bu cihazda"}</span>
          </div>
          <p className="muted">{SYNC_TEXT[sync]}</p>
          <button className="btn ghost" onClick={logout}>Çıkış yap</button>
        </section>
        <section className="panel stack">
          <h3>Öğrenilen dil</h3>
          <p className="muted">Şu an <b>{course.lang}</b> öğreniyorsun. Her dilin ilerlemesi ayrı kaydedilir; dil değiştirince diğer dildeki ilerlemen silinmez.</p>
          <button className="btn ghost" onClick={() => go({ name: "course" })}>Dili değiştir</button>
        </section>
        <section className="stack">
          <h3>İlgi alanları</h3>
          <p className="muted">Ders 5 ve 6'daki ek kelimeleri, cümleleri ve test sorularını değiştirir.</p>
          <div className="choices two">
            {Object.entries(course.interests).map(([k, P]) => (
              <Choice key={k} pressed={profile.interests.includes(k)} onClick={() => toggleInterest(k)} title={P.label} />
            ))}
          </div>
        </section>
        <section className="stack">
          <h3>Günlük hedef</h3>
          <div className="choices">
            {GOALS.map(g => (
              <Choice key={g.v} pressed={profile.goal === g.v} onClick={() => update(p => { p.profile!.goal = g.v; })} title={g.t} sub={g.d} />
            ))}
          </div>
        </section>
        <section className="stack">
          <h3>Ders akışı</h3>
          <div className="choices">
            {FLOWS.map(l => (
              <Choice key={l.v} pressed={profile.level === l.v} onClick={() => update(p => { p.profile!.level = l.v; })} title={l.t} sub={l.d} />
            ))}
          </div>
        </section>
        <PlacementCard />
        <section className="panel stack">
          <h3>Sesli telaffuz</h3>
          <p className="muted">
            {voice
              ? `${course.lang} ses bulundu (${voice.name}). Hoparlör düğmelerine dokunarak dinleyebilirsin.`
              : `Bu cihazda ${course.lang} bir ses bulunamadı. Yanlış telaffuz öğretmemek için başka dildeki sesleri kullanmıyoruz; köşeli parantezdeki Türkçe okunuş rehberini kullan. Cihazının dil ayarlarından "${course.voiceName}" sesini yüklersen düğmeler otomatik görünür.`}
          </p>
        </section>
        <section className="panel stack">
          <h3>İlerlemeyi sıfırla</h3>
          <p className="muted">Sadece {name} hesabının {course.lang} ilerlemesi silinir: tamamlanan dersler, öğrenilen kelimeler ve günlük kayıtlar. Diğer hesaplar etkilenmez.</p>
          {confirmReset ? (
            <div className="confirm stack">
              <strong>Emin misin? Bu işlem geri alınamaz.</strong>
              <div className="row">
                <button className="btn danger" onClick={reset}>Evet, her şeyi sil</button>
                <button className="btn ghost" onClick={() => setConfirmReset(false)}>Vazgeç</button>
              </div>
            </div>
          ) : (
            <button className="btn ghost" onClick={() => setConfirmReset(true)}>İlerlemeyi sıfırla</button>
          )}
        </section>
      </main>
      <Nav />
    </>
  );
}
