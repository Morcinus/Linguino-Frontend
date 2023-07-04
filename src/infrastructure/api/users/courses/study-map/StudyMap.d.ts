import { Lesson } from "infrastructure/api/lessons/Lessons";

export interface StudyMap {
  lessons: Array<Pick<Lesson, "id" | "name" | "icon" | "type">>;
}
