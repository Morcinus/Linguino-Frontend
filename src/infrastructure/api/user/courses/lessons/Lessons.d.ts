import { Category } from "domain/models/types/category";

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
  items?: Array<LessonItem>;
  author?: ID;
  icon?: string;
  type?: LessonType;

  markAsLearned?: boolean;
}

export type FeedbackState = "LIKED" | "DISLIKED" | null;
