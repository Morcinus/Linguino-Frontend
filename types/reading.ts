export interface ReadingLesson {
  lessonId: string;
  lessonName: string;
  progress?: number;
  category?: string;
  learningOrder?: number;
}

export type ReadingLessons = Array<ReadingLesson>;
