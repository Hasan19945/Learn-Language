import type { Course, CourseDef, CourseId } from "../types";
import { english } from "./english/course";
import { norwegian } from "./norwegian/course";

function buildCourse(def: CourseDef): Course {
  const wordLesson = def.lessons.find(L => L.pack === "words")!.id;
  return {
    ...def,
    lessons: def.lessons.map(L => ({ ...L, words: L.words.map(w => ({ ...w, id: L.id + ":" + w.no, lesson: L.id })) })),
    interests: Object.fromEntries(Object.entries(def.interests).map(([k, P]) => [k, {
      ...P,
      words: P.words.map(w => ({ ...w, id: "i:" + k + ":" + w.no, lesson: wordLesson, interest: k }))
    }]))
  };
}

export const COURSES: Record<CourseId, Course> = {
  no: buildCourse(norwegian),
  en: buildCourse(english)
};

export const isCourseId = (id: string | null): id is CourseId => id === "no" || id === "en";
