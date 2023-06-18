import { Dayjs } from "dayjs";

export interface Settings {
  id: ID;
  username: string;
  name: string;
  email: string;

  notifications: NotificationSettings;

  notifyOn: NotifyOnSettings;
  practiceNotificationTime: Dayjs;

  learnOnDays: {
    monday: boolean;
    tuesday: boolean;
    wednesday: boolean;
    thursday: boolean;
    friday: boolean;
    saturday: boolean;
    sunday: boolean;
  };

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
