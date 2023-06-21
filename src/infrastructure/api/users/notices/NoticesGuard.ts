import {
  AchievementNotice,
  FreeTrialEndNotice,
  Notice,
  RatingSurveyNotice,
} from "./Notices";

export function isAchievementNotice(
  notice: Notice
): notice is AchievementNotice {
  return (notice as AchievementNotice).type === "ACHIEVEMENT";
}

export function isFreeTrialEndNotice(
  notice: Notice
): notice is FreeTrialEndNotice {
  return (notice as FreeTrialEndNotice).type === "FREE_TRIAL_END";
}

export function isRatingSurveyNotice(
  notice: Notice
): notice is RatingSurveyNotice {
  return (notice as RatingSurveyNotice).type === "RATING_SURVEY";
}
