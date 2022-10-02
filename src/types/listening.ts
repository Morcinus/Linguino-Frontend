export interface ListeningLesson {
  lessonId: string;
  lessonName: string;
  progress?: number;
  category?: string;
  learningOrder?: number;
}

export type ListeningLessons = Array<ListeningLesson>;
