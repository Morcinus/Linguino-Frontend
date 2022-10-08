import { LessonType } from "./lessons";

export interface StudySession {
  type: LessonType;
  lessonId?: ID;
  goal: number;
  progress: number;
}
