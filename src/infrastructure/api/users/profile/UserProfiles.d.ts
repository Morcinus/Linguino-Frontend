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
}

export interface LearningDataPoint {
  date: string;
  points: number;
}
