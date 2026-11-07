import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { COURSES, isCourseId } from "./data/courses";
import { browserLang, isLang, STRINGS } from "./i18n";
import { isAccountId } from "./lib/accounts";
import { currentUser, emailAuthEnabled, signOutUser } from "./lib/auth";
import { freshProgress, levelIndex, nextLesson } from "./lib/progress";
import { useVoice } from "./lib/speech";
import { CURRENT_ACCOUNT_KEY, CURRENT_COURSE_KEY, store, UI_LANG_KEY } from "./lib/storage";
import { progressSync } from "./lib/sync";
import { AppContext, type AppContextValue, type View } from "./state/AppContext";
import type { CourseId, Lang, Progress } from "./types";
import { CourseView } from "./views/CourseView";
import { LessonView } from "./views/lesson/LessonView";
import { LoginView } from "./views/LoginView";
import { OnboardingView } from "./views/OnboardingView";
import { PathView } from "./views/PathView";
import { PlacementView } from "./views/PlacementView";
import { ProgressView } from "./views/ProgressView";
import { ReviewView } from "./views/ReviewView";
import { SettingsView } from "./views/SettingsView";
import { VerifyEmail } from "./views/VerifyEmail";

const rememberedAccount = () => {
  const id = store.get(CURRENT_ACCOUNT_KEY);
  return isAccountId(id) || (emailAuthEnabled && id) ? id : null;
};

const ALL_COURSES = Object.values(COURSES);

const rememberedCourse = (): CourseId => {
  const id = store.get(CURRENT_COURSE_KEY);
  return isCourseId(id) ? id : "no";
};

const rememberedLang = (): Lang => {
  const lang = store.get(UI_LANG_KEY);
  if (isLang(lang)) return lang;
  const id = store.get(CURRENT_COURSE_KEY);
  return isCourseId(id) ? COURSES[id].native : browserLang();
};

function Loading({ text }: { text: string }) {
  return <main className="wrap fade"><p className="muted">{text}</p></main>;
}

export function App() {
  const [account, setAccount] = useState(rememberedAccount);
  const [courseId, setCourseId] = useState<CourseId>("no");
  const [progress, setProgress] = useState<Progress>(freshProgress);
  const [view, setView] = useState<View>({ name: "course" });
  const [busy, setBusy] = useState(() => account !== null);
  const [pending, setPending] = useState(false);
  const [openLevel, setOpenLevel] = useState<number | null>(null);
  const [uiLang, setUiLangState] = useState<Lang>(rememberedLang);
  const progressRef = useRef(progress);
  const course = COURSES[courseId];
  const voice = useVoice(course.voice);
  const lang = !account || view.name === "course" || busy ? uiLang : course.native;
  const t = STRINGS[lang];

  const setUiLang = useCallback((next: Lang) => {
    store.set(UI_LANG_KEY, next);
    setUiLangState(next);
  }, []);

  useEffect(() => {
    document.documentElement.lang = t.htmlLang;
  }, [t]);

  const loadCourse = useCallback(async (id: CourseId, acc: string, resume = false) => {
    setBusy(true);
    const c = COURSES[id];
    document.title = "Adım Adım " + c.name;
    store.set(CURRENT_COURSE_KEY, id);
    setUiLang(c.native);
    const p = await progressSync.load(c, acc);
    progressRef.current = p;
    setProgress(p);
    setCourseId(id);
    const next = resume && p.profile ? nextLesson(c, p) : -1;
    setOpenLevel(next >= 0 ? levelIndex(c, c.lessons[next]) : null);
    setView(!p.profile ? { name: "onboard" } : next >= 0 ? { name: "lesson", index: next } : { name: "path" });
    scrollTo(0, 0);
    setBusy(false);
  }, [setUiLang]);

  useEffect(() => {
    const acc = rememberedAccount();
    if (!acc) return;
    void (async () => {
      if (!isAccountId(acc)) {
        const user = await currentUser().catch(() => ({ uid: acc, verified: true }));
        if (user?.uid !== acc) {
          store.set(CURRENT_ACCOUNT_KEY, null);
          setAccount(null);
          setBusy(false);
          return;
        }
        if (!user.verified) {
          setPending(true);
          setBusy(false);
          return;
        }
        await progressSync.pullAll(ALL_COURSES, acc);
      }
      await loadCourse(rememberedCourse(), acc);
    })();
  }, [loadCourse]);

  const login = async (id: string) => {
    store.set(CURRENT_ACCOUNT_KEY, id);
    setBusy(true);
    setAccount(id);
    setView({ name: "course" });
    if (!isAccountId(id)) {
      const user = await currentUser().catch(() => null);
      if (user && !user.verified) {
        setPending(true);
        setBusy(false);
        return;
      }
    }
    await progressSync.pullAll(ALL_COURSES, id);
    setBusy(false);
  };

  const verified = useCallback(async () => {
    const acc = store.get(CURRENT_ACCOUNT_KEY);
    setPending(false);
    setBusy(true);
    setView({ name: "course" });
    if (acc) await progressSync.pullAll(ALL_COURSES, acc);
    setBusy(false);
  }, []);

  const leave = useCallback(() => {
    store.set(CURRENT_ACCOUNT_KEY, null);
    progressRef.current = freshProgress();
    setProgress(progressRef.current);
    setAccount(null);
  }, []);

  const value = useMemo<AppContextValue | null>(() => {
    if (!account) return null;
    return {
      account, course, progress, voice, view, openLevel, t, uiLang,
      setOpenLevel, setUiLang,
      update: fn => {
        const draft = structuredClone(progressRef.current);
        const next = fn(draft) || draft;
        next.updatedAt = Date.now();
        progressRef.current = next;
        setProgress(next);
        progressSync.save(next);
      },
      go: next => {
        if (next.name === "lesson") setOpenLevel(levelIndex(course, course.lessons[next.index]));
        setView(next);
        scrollTo(0, 0);
      },
      openCourse: (id, resume) => void loadCourse(id, account, resume),
      logout: () => void (async () => {
        await progressSync.flush();
        progressSync.close();
        if (!isAccountId(account)) await signOutUser().catch(() => undefined);
        leave();
      })(),
      afterDelete: () => {
        progressSync.discard();
        leave();
      }
    };
  }, [account, course, progress, voice, view, openLevel, t, uiLang, setUiLang, loadCourse, leave]);

  if (!value) return <LoginView t={t} uiLang={uiLang} setUiLang={setUiLang} onLogin={login} />;
  if (pending) {
    return <VerifyEmail t={t} onVerified={verified} onLogout={() => { setPending(false); value.logout(); }} />;
  }
  if (busy) return <Loading text={t.loading} />;

  return (
    <AppContext.Provider value={value}>
      {view.name === "course" && <CourseView />}
      {view.name === "onboard" && <OnboardingView />}
      {view.name === "path" && <PathView />}
      {view.name === "lesson" && <LessonView key={view.index} index={view.index} />}
      {view.name === "progress" && <ProgressView />}
      {view.name === "settings" && <SettingsView />}
      {view.name === "placement" && <PlacementView />}
      {view.name === "review" && <ReviewView />}
    </AppContext.Provider>
  );
}
