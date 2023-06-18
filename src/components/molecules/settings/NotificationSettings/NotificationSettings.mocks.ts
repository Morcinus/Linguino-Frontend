import { action } from "@storybook/addon-actions";

import dayjs from "dayjs";
import { INotificationSettings } from "./NotificationSettings";

const base: INotificationSettings = {
  notifications: {
    sendOnMobile: true,
    sendOnEmail: false,
    sendOnDesktop: true,
  },
  notifyOn: {
    friendsActivities: false,
    somebodyFollowsUser: true,
    userForgetsPractice: true,
  },
  practiceNotificationTime: dayjs("2022-04-17T14:40:00.000Z"),
  onNotificationsChange: action("onNotificationsChange"),
  onNotifyOnChange: action("onNotifyOnChange"),
  onTimeChange: action("onTimeChange"),
};

export const mockNotificationSettingsProps = {
  base,
};
