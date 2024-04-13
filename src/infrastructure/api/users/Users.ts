import { Achievement } from "infrastructure/api/user/achievements/Achievements";

export interface UserProfile {
  id: Id;
  followers: number;
  following: number;
  level: number;
  name: string;
  profileImageUrl: string;
  isFollowed: boolean;
  username: string;
  learningStats: Array<LearningDataPoint>;
  streak: number;
  achievements: Array<ProfileAchievement>;
}

export type UserSummary = Pick<
  UserProfile,
  "id" | "name" | "username" | "profileImageUrl" | "isFollowed"
>;

export type ProfileAchievement = Pick<
  Achievement,
  "id" | "title" | "description" | "imageUrl" | "progress"
>;

export interface LearningDataPoint {
  date: string;
  points: number;
}
