import { Achievement } from "infrastructure/api/user/achievements/Achievements";

export interface UserProfile {
  id: ID;
  userId: ID;
  followers: number;
  following: number;
  level: number;
  name: string;
  profileImageURL: string;
  isFollowed: boolean;
  name: string;
  username: string;
  learningStats: Array<LearningDataPoint>;
  streak: number;
  achievements: Array<ProfileAchievement>;
}

export type ProfileAchievement = Pick<
  Achievement,
  "id" | "title" | "description" | "imageURL" | "progress"
>;

export interface LearningDataPoint {
  date: string;
  points: number;
}
