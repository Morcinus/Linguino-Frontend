import { Achievement } from "infrastructure/api/user/achievements/Achievements";

export interface UserProfile {
  id: ID;
  followers: number;
  following: number;
  level: number;
  name: string;
  profileImageURL: string;
  isFollowed: boolean;
  username: string;
  learningStats: Array<LearningDataPoint>;
  streak: number;
  achievements: Array<ProfileAchievement>;
}

export type UserSummary = Pick<
  UserProfile,
  "id" | "name" | "username" | "profileImageURL" | "isFollowed"
>;

export type ProfileAchievement = Pick<
  Achievement,
  "id" | "title" | "description" | "imageURL" | "progress"
>;

export interface LearningDataPoint {
  date: string;
  points: number;
}
