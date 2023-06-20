import { Category } from "domain/models/types/category";

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
  background?: Background;
  items?: Array<LessonItem>;
  author?: ID;

  markAsLearned?: boolean;
}

export type Feedback = {
  state?: FeedbackState;
  textFeedback?: string;
};

export type FeedbackState = "LIKED" | "DISLIKED" | null;

export type Background = ImageBackground | GradientBackground;

export interface ImageBackground {
  imageURL: string;
}

export interface GradientBackground {
  // Any valid CSS "background" gradient property
  gradient: string;
}
