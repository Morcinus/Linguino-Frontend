export interface Challenge {
  id: Id;
  title: string;
  description?: string;
  imageURL?: string;

  progress: number;
  collectedReward: boolean;
}
