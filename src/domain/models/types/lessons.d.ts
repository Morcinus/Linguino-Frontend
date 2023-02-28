import { Category } from "./category";

export type LessonType =
  | "VOCABULARY"
  | "GRAMMAR"
  | "LISTENING"
  | "SPEAKING"
  | "PRONUNCIATION"
  | "READING";

export interface Lesson {
  id: ID;
  name: string;
  progress?: number;
  category?: Category;
  learningOrder?: number;
  videoId?: string;
  description?: string;
  favorite: boolean;
  visible: boolean;
}
