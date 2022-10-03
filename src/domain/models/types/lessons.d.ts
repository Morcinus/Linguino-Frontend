import { Category } from "./category";

export type LessonType =
  | "VOCABULARY"
  | "GRAMMAR"
  | "LISTENING"
  | "SPEAKING"
  | "PRONUNCIATION"
  | "READING";

export interface Lesson {
  id: string;
  name: string;
  progress?: number;
  category?: Category;
  learningOrder?: number;
}
