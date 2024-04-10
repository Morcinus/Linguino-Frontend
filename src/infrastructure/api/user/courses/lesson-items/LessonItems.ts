export interface LessonItem {
  id: Id;
  nameL1: string;
  nameL2: string;
  imageUrl?: string;
  audioUrl?: string;
  favorite: boolean;
  description?: string;
  examples?: Array<ExampleSentence>;
  dateToReview: Date | null;

  markAsLearned?: boolean;
}

export type LessonItemSummary = Pick<
  LessonItem,
  "id" | "nameL1" | "nameL2" | "imageUrl" | "audioUrl"
>;

export interface ExampleSentence {
  id: Id;
  textL1: string;
  textL2: string;
  audioUrl?: string;
}
