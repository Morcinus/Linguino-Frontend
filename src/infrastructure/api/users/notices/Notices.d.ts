export type Notice =
  | AchievementNotice
  | FreeTrialEndNotice
  | RatingSurveyNotice;

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
