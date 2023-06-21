import { AchievementNotice, Notice } from "./Notices";

export function isAchievementNotice(notice: Notice): notice is AchievementNotice {
  return (notice as AchievementNotice).type === "ACHIEVEMENT";
}
