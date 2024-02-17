import { Lesson } from "infrastructure/api/user/courses/lessons/Lessons";

export interface StudyMap {
  lessons: Array<StudyMapLesson>;
}

export type StudyMapLesson = Pick<Lesson, "id" | "name" | "icon" | "type"> & {
  isActive?: boolean;
};
