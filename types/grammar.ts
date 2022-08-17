export interface GrammarLesson {
  lessonId: string;
  lessonName: string;
  progress?: number;
  category?: string;
  learningOrder?: number;
}

export type GrammarLessons = Array<GrammarLesson>;
