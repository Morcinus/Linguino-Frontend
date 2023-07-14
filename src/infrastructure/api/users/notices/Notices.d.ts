export type Notice =
  | AchievementNotice
  | FreeTrialEndNotice
  | RatingSurveyNotice
  | RewardNotice
  | AdvertisementNotice
  | StudyStatsNotice;

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

export interface RatingSurveyNotice {
  id: ID;
  surveyId: ID;
  type: "RATING_SURVEY";
  question: string;
  answerLabel1: string;
  answerLabel2: string;
  maxPoints: number;
}

export interface RewardNotice {
  id: ID;
  reward: number;
  type: "REWARD";
}

export interface AdvertisementNotice {
  id: ID;
  type: "ADVERTISEMENT";
}

export interface StudyStatsNotice {
  id: ID;
  type: "STUDY_STATS";
  stats: StudyStats;
}

export interface StudyStats {
  rightAnswers: number;
  wrongAnswers: number;
}
