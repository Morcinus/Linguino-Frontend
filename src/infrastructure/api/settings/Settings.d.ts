import { Dayjs } from "dayjs";

export interface Settings {
  id: ID;
  username: string;
  name: string;
  email: string;

  dailyGoal: number;

  notifications: NotificationSettings;

  notifyOn: NotifyOnSettings;
  practiceNotificationTime: Dayjs;

  learnOnDays: Array<Day>;

  animations: boolean;
  reviewPreviousLevels: boolean;
  publicProfile: boolean;
}

export interface NotificationSettings {
  sendOnMobile: boolean;
  sendOnEmail: boolean;
  sendOnDesktop: boolean;
}

export interface NotifyOnSettings {
  friendsActivities: boolean;
  somebodyFollowsUser: boolean;
  userForgetsPractice: boolean;
}

export type Day =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday"
  | "sunday";
