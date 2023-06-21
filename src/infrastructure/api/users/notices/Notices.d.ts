export type Notice = AchievementNotice;

export interface AchievementNotice {
  id: ID;
  type: "ACHIEVEMENT";
  name: string;
  description: string;
  imageURL: string;
}
