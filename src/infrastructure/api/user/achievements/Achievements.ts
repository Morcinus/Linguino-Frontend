export interface Achievement {
  id: Id;
  title: string;
  description?: string;
  imageURL?: string;

  progress: number;
  collectedReward: boolean;
}
