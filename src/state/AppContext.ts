import { createContext, useContext } from "react";
import type { Course, CourseId, Progress } from "../types";

export type View =
  | { name: "course" }
  | { name: "onboard" }
  | { name: "path" }
  | { name: "lesson"; index: number }
  | { name: "progress" }
  | { name: "settings" }
  | { name: "placement" }
  | { name: "review" };

export interface AppContextValue {
  account: string;
  course: Course;
  progress: Progress;
  update: (fn: (p: Progress) => Progress | void) => void;
  voice: SpeechSynthesisVoice | null;
  view: View;
  go: (view: View) => void;
  openLevel: number | null;
  setOpenLevel: (level: number) => void;
  openCourse: (id: CourseId) => void;
  logout: () => void;
}

export const AppContext = createContext<AppContextValue | null>(null);

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used inside AppContext");
  return ctx;
}
