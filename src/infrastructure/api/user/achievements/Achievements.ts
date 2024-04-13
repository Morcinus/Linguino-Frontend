export interface Achievement {
  id: Id;
  title: string;
  description?: string;
  imageUrl?: string;

  progress: number;
  collectedReward: boolean;
}
