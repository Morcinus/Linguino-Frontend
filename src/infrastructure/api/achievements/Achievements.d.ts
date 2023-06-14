export interface Achievement {
  id: ID;
  userId: ID;
  title: string;
  description?: string;
  progress?: number;
  imageURL?: string;
  collectedReward: boolean;
}
