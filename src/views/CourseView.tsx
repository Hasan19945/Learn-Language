import { Choice } from "../components/Choice";
import { Icon } from "../components/Icon";
import { COURSES } from "../data/courses";
import { accountName } from "../lib/accounts";
import { useApp } from "../state/AppContext";

export function CourseView() {
  const { account, course, progress, go, openCourse, logout } = useApp();
  return (
    <main className="wrap fade">
      <header className="top">
        {progress.profile && (
          <button className="icon-btn" onClick={() => go({ name: "path" })} aria-label="Öğrenme yoluna dön"><Icon name="back" /></button>
        )}
        <span className="brand" style={{ flex: 1 }}>Adım <b>Adım</b></span>
        <button className="chip acc" onClick={logout}>{accountName(account)} · Çıkış</button>
      </header>
      <div className="stack">
        <h1>Hangi dili öğrenmek istiyorsun?</h1>
        <p className="muted">Her dilin ilerlemesi ayrı kaydedilir. Dili istediğin zaman üst köşedeki düğmeden ya da Ayarlar'dan değiştirebilirsin.</p>
      </div>
      <div className="choices">
        {Object.values(COURSES).map(c => (
          <Choice key={c.id} pressed={!!progress.profile && course.id === c.id} onClick={() => openCourse(c.id)}
            title={c.lang} sub={`${c.sub} · ${c.lessons.length} ders`} />
        ))}
      </div>
    </main>
  );
}
