import { Lesson } from "infrastructure/api/user/courses/lessons/Lessons";

export type StudyMap = Array<StudyMapLesson>;

export type StudyMapLesson = Pick<Lesson, "id" | "name" | "icon" | "type"> & {
  isActive?: boolean;
};
