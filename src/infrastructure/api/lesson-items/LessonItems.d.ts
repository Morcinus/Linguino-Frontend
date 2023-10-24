export interface LessonItem {
  id: ID;
  nameL1: string;
  nameL2: string;
  imageURL?: string;
  audioURL?: string;
  visible: boolean;
  favorite: boolean;
  description?: string;
  examples?: Array<ExampleSentence>;
  backgroundImageUrl?: string;
  progress: number;

  markAsLearned?: boolean;
}

export interface ExampleSentence {
  id: ID;
  textL1: string;
  textL2: string;
  audioURL?: string;
}
