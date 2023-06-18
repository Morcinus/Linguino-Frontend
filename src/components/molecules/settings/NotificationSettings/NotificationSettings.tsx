import dayjs, { Dayjs } from "dayjs";
import { useTranslation } from "i18n/client";
import {
  NotificationSettings as NotificationSettingsType,
  NotifyOnSettings,
} from "infrastructure/api/settings/Settings";

import { useState } from "react";

import {
  Box,
  List,
  ListItem,
  ListItemText,
  Switch,
  Typography,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

export interface INotificationSettings {
  notifications: NotificationSettingsType;
  notifyOn: NotifyOnSettings;
  practiceNotificationTime: Dayjs;
  onNotificationsChange: (change: { [key: string]: boolean }) => void;
  onNotifyOnChange: (change: { [key: string]: boolean | string }) => void;
  onTimeChange: (change: Dayjs | null) => void;
}

const NotificationSettings: React.FC<INotificationSettings> = ({
  notifications: notificationsProps,
  notifyOn: notifyOnProps,
  practiceNotificationTime,
  onNotificationsChange,
  onNotifyOnChange,
  onTimeChange,
}) => {
  const { t } = useTranslation("cs", "form");
  const [notifications, setNotifications] = useState(notificationsProps);
  const [notifyOn, setNotifyOn] = useState(notifyOnProps);
  const [time, setTime] = useState<Dayjs | null>(
    dayjs(practiceNotificationTime)
  );

  function changeNotifications(change: { [key: string]: boolean }) {
    setNotifications({ ...notifications, ...change });
    onNotificationsChange(change);
  }

  function changeNotifyOn(change: { [key: string]: boolean | string }) {
    setNotifyOn({ ...notifyOn, ...change });
    onNotifyOnChange(change);
  }

  function changeTime(newValue: Dayjs | null) {
    onTimeChange(newValue);
    setTime(newValue);
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box display="flex" flexDirection="column" gap={2} width="100%">
        <Typography variant="subtitle1">
          {t("settings.notifications")}
        </Typography>
        <Box display="flex" flexDirection="column" gap={2} width="100%">
          <List sx={{ width: "100%", py: 0 }}>
            <ListItem sx={{ px: 0 }}>
              <ListItemText primary={t("settings.sendOnMobile")} />
              <Switch
                edge="end"
                onChange={(e) =>
                  changeNotifications({
                    sendOnMobile: e.target.checked,
                  })
                }
                checked={notifications.sendOnMobile}
              />
            </ListItem>
            <ListItem sx={{ px: 0 }}>
              <ListItemText primary={t("settings.sendOnEmail")} />
              <Switch
                edge="end"
                onChange={(e) =>
                  changeNotifications({
                    sendOnEmail: e.target.checked,
                  })
                }
                checked={notifications.sendOnEmail}
              />
            </ListItem>
            <ListItem sx={{ px: 0 }}>
              <ListItemText primary={t("settings.sendOnDesktop")} />
              <Switch
                edge="end"
                onChange={(e) =>
                  changeNotifications({
                    sendOnDesktop: e.target.checked,
                  })
                }
                checked={notifications.sendOnDesktop}
              />
            </ListItem>
          </List>
        </Box>

        <Typography variant="subtitle1">{t("settings.notifyOn")}</Typography>
        <Box display="flex" flexDirection="column" gap={2} width="100%">
          <List sx={{ width: "100%", py: 0 }}>
            <ListItem sx={{ px: 0 }}>
              <ListItemText primary={t("settings.friendsActivities")} />
              <Switch
                edge="end"
                onChange={(e) =>
                  changeNotifyOn({
                    friendsActivities: e.target.checked,
                  })
                }
                checked={notifyOn.friendsActivities}
              />
            </ListItem>
            <ListItem sx={{ px: 0 }}>
              <ListItemText primary={t("settings.somebodyFollowsUser")} />
              <Switch
                edge="end"
                onChange={(e) =>
                  changeNotifyOn({
                    somebodyFollowsUser: e.target.checked,
                  })
                }
                checked={notifyOn.somebodyFollowsUser}
              />
            </ListItem>
            <ListItem sx={{ px: 0 }}>
              <ListItemText primary={t("settings.userForgetsPractice")} />
              <Switch
                edge="end"
                onChange={(e) =>
                  changeNotifyOn({
                    userForgetsPractice: e.target.checked,
                  })
                }
                checked={notifyOn.userForgetsPractice}
              />
            </ListItem>
            {notifyOn.userForgetsPractice === true && (
              <ListItem
                sx={{ display: "flex", justifyContent: "flex-end", px: 0 }}
              >
                <TimePicker
                  ampm={false}
                  value={time}
                  onChange={(newValue: Dayjs | null) => {
                    changeTime(newValue);
                  }}
                />
              </ListItem>
            )}
          </List>
        </Box>
      </Box>
    </LocalizationProvider>
  );
};

export default NotificationSettings;
