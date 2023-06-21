export type Notice = AchievementNotice | FreeTrialEndNotice;

export interface AchievementNotice {
  id: ID;
  type: "ACHIEVEMENT";
  name: string;
  description: string;
  imageURL: string;
}

export interface FreeTrialEndNotice {
  id: ID;
  type: "FREE_TRIAL_END";
  name: string;
  featureList: Array<string>;
  imageURL: string;
}
