export type Notice =
  | AchievementNotice
  | FreeTrialEndNotice
  | RatingSurveyNotice
  | RewardNotice
  | AdvertisementNotice
  | StudyStatsNotice
  | FreeTrialOfferNotice;

export interface AchievementNotice {
  id: Id;
  type: "ACHIEVEMENT";
  name: string;
  description: string;
  imageURL: string;
}

export interface FreeTrialOfferNotice {
  id: Id;
  type: "FREE_TRIAL_OFFER";
}

export interface FreeTrialEndNotice {
  id: Id;
  type: "FREE_TRIAL_END";
}

export interface RatingSurveyNotice {
  id: Id;
  surveyId: Id;
  type: "RATING_SURVEY";
  question: string;
  answerLabel1: string;
  answerLabel2: string;
  maxPoints: number;
}

export interface RewardNotice {
  id: Id;
  reward: number;
  type: "REWARD";
}

export interface AdvertisementNotice {
  id: Id;
  type: "ADVERTISEMENT";
}

export interface StudyStatsNotice {
  id: Id;
  type: "STUDY_STATS";
  stats: StudyStats;
}

export interface StudyStats {
  rightAnswers: number;
  wrongAnswers: number;
}
