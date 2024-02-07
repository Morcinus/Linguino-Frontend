export interface Achievement {
  id: ID;
  title: string;
  description?: string;
  imageURL?: string;

  progress: number;
  collectedReward: boolean;
}
