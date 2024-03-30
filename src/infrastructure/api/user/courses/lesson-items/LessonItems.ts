export interface LessonItem {
  id: Id;
  nameL1: string;
  nameL2: string;
  imageURL?: string;
  audioURL?: string;
  favorite: boolean;
  description?: string;
  examples?: Array<ExampleSentence>;
  backgroundImageUrl?: string;
  progress: number;

  markAsLearned?: boolean;
}

export type LessonItemSummary = Pick<
  LessonItem,
  "id" | "nameL1" | "nameL2" | "imageURL" | "audioURL"
>;

export interface ExampleSentence {
  id: Id;
  textL1: string;
  textL2: string;
  audioURL?: string;
}
