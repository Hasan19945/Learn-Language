import { useApp } from "../state/AppContext";
import { Icon, type IconName } from "./Icon";

const TABS: ["path" | "progress" | "settings", IconName][] = [
  ["path", "path"],
  ["progress", "chart"],
  ["settings", "gear"]
];

export function Nav() {
  const { view, go, t } = useApp();
  return (
    <nav className="nav">
      <div>
        {TABS.map(([name, icon]) => (
          <button key={name} onClick={() => go({ name })} aria-current={view.name === name ? "page" : undefined}>
            <Icon name={icon} />{t.nav[name]}
          </button>
        ))}
      </div>
    </nav>
  );
}

export function BackHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  const { go, t } = useApp();
  return (
    <header className="top">
      <button className="icon-btn" onClick={() => go({ name: "path" })} aria-label={t.backToPath}><Icon name="back" /></button>
      <div style={{ flex: 1, minWidth: 0 }}>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
    </header>
  );
}
