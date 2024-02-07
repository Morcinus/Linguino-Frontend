import { Lesson } from "infrastructure/api/user/courses/lessons/Lessons";

export interface StudyMap {
  lessons: Array<Pick<Lesson, "id" | "name" | "icon" | "type">>;
}
