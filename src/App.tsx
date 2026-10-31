import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { COURSES, isCourseId } from "./data/courses";
import { isAccountId } from "./lib/accounts";
import { freshProgress, levelIndex } from "./lib/progress";
import { useVoice } from "./lib/speech";
import { CURRENT_ACCOUNT_KEY, CURRENT_COURSE_KEY, store } from "./lib/storage";
import { progressSync } from "./lib/sync";
import { AppContext, type AppContextValue, type View } from "./state/AppContext";
import type { CourseId, Progress } from "./types";
import { CourseView } from "./views/CourseView";
import { LessonView } from "./views/lesson/LessonView";
import { LoginView } from "./views/LoginView";
import { OnboardingView } from "./views/OnboardingView";
import { PathView } from "./views/PathView";
import { PlacementView } from "./views/PlacementView";
import { ProgressView } from "./views/ProgressView";
import { ReviewView } from "./views/ReviewView";
import { SettingsView } from "./views/SettingsView";

const rememberedAccount = () => {
  const id = store.get(CURRENT_ACCOUNT_KEY);
  return isAccountId(id) ? id : null;
};

const rememberedCourse = (): CourseId => {
  const id = store.get(CURRENT_COURSE_KEY);
  return isCourseId(id) ? id : "no";
};

function Loading() {
  return <main className="wrap fade"><p className="muted">İlerleme yükleniyor…</p></main>;
}

export function App() {
  const [account, setAccount] = useState(rememberedAccount);
  const [courseId, setCourseId] = useState<CourseId>("no");
  const [progress, setProgress] = useState<Progress>(freshProgress);
  const [view, setView] = useState<View>({ name: "course" });
  const [busy, setBusy] = useState(() => account !== null);
  const [openLevel, setOpenLevel] = useState<number | null>(null);
  const progressRef = useRef(progress);
  const course = COURSES[courseId];
  const voice = useVoice(course.voice);

  const loadCourse = useCallback(async (id: CourseId, acc: string) => {
    setBusy(true);
    const c = COURSES[id];
    document.title = "Adım Adım " + c.name;
    store.set(CURRENT_COURSE_KEY, id);
    const p = await progressSync.load(c, acc);
    progressRef.current = p;
    setProgress(p);
    setCourseId(id);
    setOpenLevel(null);
    setView(p.profile ? { name: "path" } : { name: "onboard" });
    setBusy(false);
  }, []);

  useEffect(() => {
    const acc = rememberedAccount();
    if (acc) void loadCourse(rememberedCourse(), acc);
  }, [loadCourse]);

  const login = (id: string) => {
    store.set(CURRENT_ACCOUNT_KEY, id);
    setAccount(id);
    setView({ name: "course" });
  };

  const value = useMemo<AppContextValue | null>(() => {
    if (!account) return null;
    return {
      account, course, progress, voice, view, openLevel,
      setOpenLevel,
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
      openCourse: id => void loadCourse(id, account),
      logout: () => {
        progressSync.close();
        store.set(CURRENT_ACCOUNT_KEY, null);
        progressRef.current = freshProgress();
        setProgress(progressRef.current);
        setAccount(null);
      }
    };
  }, [account, course, progress, voice, view, openLevel, loadCourse]);

  if (!value) return <LoginView onLogin={login} />;
  if (busy) return <Loading />;

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
