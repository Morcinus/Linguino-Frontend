export interface VocabularyLesson {
  lessonId: string;
  lessonName: string;
  progress?: number;
  category?: string;
  learningOrder?: number;
}

export type VocabularyLessons = Array<VocabularyLesson>;
