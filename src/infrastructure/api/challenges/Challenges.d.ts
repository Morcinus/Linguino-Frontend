export interface Challenge {
  id: ID;
  title: string;
  description?: string;

  progress: number;
  collectedReward: boolean;
  imageURL?: string;

  startDate?: Date;
  endDate?: Date;
}
