export interface PronunciationLesson {
  lessonId: string;
  lessonName: string;
  progress?: number;
  category?: string;
  learningOrder?: number;
}

export type PronunciationLessons = Array<PronunciationLesson>;
