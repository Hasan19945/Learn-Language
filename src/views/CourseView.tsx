import { useMemo } from "react";
import { Flag } from "../components/Flag";
import { Icon } from "../components/Icon";
import { LangSwitch } from "../components/LangSwitch";
import { Logo } from "../components/Logo";
import { Bar } from "../components/Progress";
import { COURSES, isCourseId } from "../data/courses";
import { LANGS, STRINGS, type Strings } from "../i18n";
import { accountName } from "../lib/accounts";
import { courseSummary, positionInLevel, type CourseSummary } from "../lib/progress";
import { CURRENT_COURSE_KEY, store } from "../lib/storage";
import { readLocalProgress } from "../lib/sync";
import { useApp } from "../state/AppContext";
import type { Course } from "../types";

const ALL = Object.values(COURSES);

const stats = (s: Strings, sum: CourseSummary) =>
  [s.course.done(sum.done, sum.total), sum.due ? s.course.due(sum.due) : ""].filter(Boolean).join(" · ");

export function CourseView() {
  const { account, course, progress, go, openCourse, logout, t, uiLang, setUiLang } = useApp();
  const summaries = useMemo(
    () => new Map(ALL.map(c => [c.id, courseSummary(c, progress.profile && c.id === course.id ? progress : readLocalProgress(c, account))])),
    [account, course, progress]
  );
  const lastId = store.get(CURRENT_COURSE_KEY);
  const last = isCourseId(lastId) ? COURSES[lastId] : null;
  const lastSummary = last && summaries.get(last.id);
  const groups = [uiLang, ...LANGS.filter(l => l !== uiLang)]
    .map(lang => ({ lang, courses: ALL.filter(c => c.native === lang) }))
    .filter(g => g.courses.length);

  return (
    <main className="wrap fade">
      <header className="top">
        {progress.profile && (
          <button className="icon-btn" onClick={() => go({ name: "path" })} aria-label={t.backToPath}><Icon name="back" /></button>
        )}
        <span className="brand" style={{ flex: 1 }}><Logo /><span>Adım <b>Adım</b></span></span>
        <LangSwitch value={uiLang} onChange={setUiLang} label={t.login.uiLanguage} />
        <button className="chip acc" style={{ marginLeft: "auto" }} onClick={logout}>{accountName(t, account)} · {t.course.logout}</button>
      </header>
      <div className="stack">
        <h1>{t.course.title}</h1>
        <p className="muted">{t.course.intro}</p>
      </div>
      {last && lastSummary && <Resume c={last} sum={lastSummary} onOpen={() => openCourse(last.id, true)} />}
      {groups.map(g => (
        <section key={g.lang} className="stack" lang={STRINGS[g.lang].htmlLang}>
          <p className="eyebrow group-head"><Flag lang={g.lang} />{STRINGS[g.lang].courseGroup}</p>
          <div className="choices">
            {g.courses.map(c => <CourseCard key={c.id} c={c} sum={summaries.get(c.id) ?? null} onOpen={() => openCourse(c.id)} />)}
          </div>
        </section>
      ))}
    </main>
  );
}

function Badge({ c }: { c: Course }) {
  return <span className="badge" data-code={c.code} aria-hidden="true">{c.code}</span>;
}

function Title({ c }: { c: Course }) {
  return <strong>{c.lang}{c.variant && <span className="muted" style={{ fontWeight: 400 }}> · {c.variant}</span>}</strong>;
}

interface CardProps {
  c: Course;
  onOpen: () => void;
}

function Resume({ c, sum, onOpen }: CardProps & { sum: CourseSummary }) {
  const s = STRINGS[c.native];
  const L = sum.next >= 0 ? c.lessons[sum.next] : null;
  return (
    <section className="stack" lang={s.htmlLang}>
      <p className="eyebrow">{s.course.resume}</p>
      <div className="panel stack resume">
        <div className="course-head">
          <Badge c={c} />
          <span className="txt">
            <Title c={c} />
            <small className="muted">
              {L ? s.course.next(s.lessonLabel(L.level, positionInLevel(c, sum.next)), L.title) : s.course.allDone}
            </small>
          </span>
          <span className="chip">{sum.level}</span>
        </div>
        <Bar value={sum.done / sum.total} />
        <p className="muted" style={{ fontSize: ".9rem" }}>{stats(s, sum)}</p>
        <button className="btn block" onClick={onOpen}>{s.course.resumeButton}</button>
      </div>
    </section>
  );
}

function CourseCard({ c, sum, onOpen }: CardProps & { sum: CourseSummary | null }) {
  const s = STRINGS[c.native];
  const line = sum
    ? stats(s, sum)
    : [s.course.fresh, s.course.range(c.levels[0].id, c.levels.at(-1)!.id), s.course.lessons(c.lessons.length)].join(" · ");
  return (
    <button className="choice course-card" onClick={onOpen}>
      <Badge c={c} />
      <span className="txt">
        <Title c={c} />
        <small>{line}</small>
        {sum && <span className="bar" aria-hidden="true"><i style={{ width: `${sum.done / sum.total * 100}%` }} /></span>}
      </span>
      {sum && <span className="chip">{sum.level}</span>}
    </button>
  );
}
