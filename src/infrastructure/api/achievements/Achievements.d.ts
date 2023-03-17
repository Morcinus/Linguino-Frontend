export interface Achievement {
  id: ID;
  title: string;
  description?: string;
  progress?: number;
  imageURL?: string;
  collectedReward: boolean;
}
