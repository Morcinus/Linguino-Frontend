import { LessonType } from "./lessons";

export interface StudySession {
  sessionType: LessonType;
  goal: number;
  progress: number;
}
