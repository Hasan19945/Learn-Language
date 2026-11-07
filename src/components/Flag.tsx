import type { Lang } from "../types";

export function Flag({ lang }: { lang: Lang }) {
  if (lang === "tr") {
    return (
      <svg className="flag" viewBox="0 0 1200 800" width={24} height={16} aria-hidden="true">
        <rect width="1200" height="800" fill="#e30a17" />
        <circle cx="425" cy="400" r="200" fill="#fff" />
        <circle cx="475" cy="400" r="160" fill="#e30a17" />
        <polygon fill="#fff" points="483.33,400 552.43,377.54 552.43,304.89 595.13,363.67 664.23,341.22 621.53,400 664.23,458.78 595.13,436.33 552.43,495.11 552.43,422.46" />
      </svg>
    );
  }
  if (lang === "en") {
    return (
      <svg className="flag" viewBox="0 0 60 30" width={32} height={16} aria-hidden="true">
        <rect width="60" height="30" fill="#012169" />
        <path d="M0 0 60 30M60 0 0 30" stroke="#fff" strokeWidth="6" />
        <path d="M0 0 60 30M60 0 0 30" stroke="#c8102e" strokeWidth="2" />
        <path d="M30 0V30M0 15H60" stroke="#fff" strokeWidth="10" />
        <path d="M30 0V30M0 15H60" stroke="#c8102e" strokeWidth="6" />
      </svg>
    );
  }
  return (
    <svg className="flag" viewBox="0 0 22 16" width={22} height={16} aria-hidden="true">
      <rect width="22" height="16" fill="#ba0c2f" />
      <rect x="6" width="4" height="16" fill="#fff" />
      <rect y="6" width="22" height="4" fill="#fff" />
      <rect x="7" width="2" height="16" fill="#00205b" />
      <rect y="7" width="22" height="2" fill="#00205b" />
    </svg>
  );
}
