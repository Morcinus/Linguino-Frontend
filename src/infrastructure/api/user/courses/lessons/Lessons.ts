import { LessonItemSummary } from "../lesson-items/LessonItems";
import { Feedback } from "./feedback/LessonFeedback";

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
  favorite?: boolean;
  visible?: boolean;
  feedback?: Feedback;
  backgroundImageUrl?: string;
  items?: Array<LessonItemSummary>;
  author?: ID;
  icon?: string;
  type?: LessonType;

  markAsLearned?: boolean;
}

export type LessonCreateUpdateDTO = Pick<
  Lesson,
  "id" | "name" | "description" | "items"
>;

export type LessonUpdateDTO = Partial<
  Pick<Lesson, "id" | "name" | "description" | "items">
>;

export type FeedbackState = "LIKED" | "DISLIKED" | null;

export interface Category {
  id: ID;
  name?: string;
}
