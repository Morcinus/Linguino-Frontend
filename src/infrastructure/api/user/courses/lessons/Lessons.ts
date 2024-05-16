import { LanguageLevel } from "components/molecules/forms/SelectLevelForm/config";

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
  id: Id;
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
  author?: Id;
  icon?: string;
  type?: LessonType;
  level?: LanguageLevel;

  markAsLearned?: boolean;
}

export type LessonCreateUpdateDTO = Pick<
  Lesson,
  "id" | "name" | "description" | "items"
>;

export type LessonUpdateDTO = Partial<
  Pick<Lesson, "visible" | "favorite" | "markAsLearned">
> &
  Pick<Lesson, "id">;

export type FeedbackState = "LIKE" | "DISLIKE" | null;

export interface Category {
  id: Id;
  name?: string;
}
