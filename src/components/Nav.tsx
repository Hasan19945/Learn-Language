import { useApp } from "../state/AppContext";
import { Icon, type IconName } from "./Icon";

const TABS: ["path" | "progress" | "settings", IconName, string][] = [
  ["path", "path", "Öğrenme yolu"],
  ["progress", "chart", "İlerleme"],
  ["settings", "gear", "Ayarlar"]
];

export function Nav() {
  const { view, go } = useApp();
  return (
    <nav className="nav">
      <div>
        {TABS.map(([name, icon, label]) => (
          <button key={name} onClick={() => go({ name })} aria-current={view.name === name ? "page" : undefined}>
            <Icon name={icon} />{label}
          </button>
        ))}
      </div>
    </nav>
  );
}

export function BackHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  const { go } = useApp();
  return (
    <header className="top">
      <button className="icon-btn" onClick={() => go({ name: "path" })} aria-label="Öğrenme yoluna dön"><Icon name="back" /></button>
      <div style={{ flex: 1, minWidth: 0 }}>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
    </header>
  );
}
