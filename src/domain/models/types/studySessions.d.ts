import { LessonType } from "./lessons";

export interface StudySession {
  lessonType: LessonType;
  goal: number;
  progress: number;
}
