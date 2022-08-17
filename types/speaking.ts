export interface SpeakingLesson {
  lessonId: string;
  lessonName: string;
  progress?: number;
  category?: string;
  learningOrder?: number;
}

export type SpeakingLessons = Array<SpeakingLesson>;
