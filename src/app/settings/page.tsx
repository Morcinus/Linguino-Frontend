// prettier-ignore
"use client"

import { useTranslation } from "i18n/client";
import { optimisticMutationOption } from "infrastructure/api/API";
import errorCodes from "infrastructure/api/error-codes";
import SettingsAPI from "infrastructure/api/settings/SettingsAPI";
import useAuth from "infrastructure/services/AuthProvider";
import { useSnackbar } from "notistack";
import icons from "styles/icons";

import { useState } from "react";

import { useRouter } from "next/navigation";

import { Box, Button, Typography } from "@mui/material";

import BottomFab from "components/atoms/BottomFab/BottomFab";
import DayPicker from "components/atoms/DayPicker/DayPicker";
import AccountSettings from "components/molecules/settings/AccountSettings/AccountSettings";
import DailyGoalSettings from "components/molecules/settings/DailyGoalSettings/DailyGoalSettings";
import NotificationSettings from "components/molecules/settings/NotificationSettings/NotificationSettings";
import OtherSettings from "components/molecules/settings/OtherSettings/OtherSettings";

export interface ISettingsPage {}

const SettingsPage: React.FC<ISettingsPage> = () => {
  const { t } = useTranslation("cs", "form");
  const { user } = useAuth();
  const router = useRouter();
  const { settings, mutate } = SettingsAPI.useSettings(user?.id);
  const [errors, setErrors] = useState<Array<string>>([]);
  const [change, setChange] = useState({});
  const { enqueueSnackbar } = useSnackbar();

  function handleSave() {
    mutate(async () => {
      try {
        const newSettings = await SettingsAPI.updateSettings({
          id: settings.id,
          ...change,
        });

        enqueueSnackbar(t("settings.saved"), {
          variant: "success",
        });

        setErrors([]);
        setChange({});
        return newSettings;
      } catch (err) {
        handleError(err);
        return { ...settings, ...change };
      }
    }, optimisticMutationOption({ ...settings, ...change }));
  }

  function handleError(error: unknown) {
    switch (error) {
      case errorCodes.usernameTaken:
        setErrors((errors) => [...errors, errorCodes.usernameTaken]);
        break;
      case errorCodes.emailAddressTaken:
        setErrors((errors) => [...errors, errorCodes.emailAddressTaken]);
        break;
      default:
        enqueueSnackbar(t("general-error-message"), {
          variant: "error",
        });
        break;
    }
  }

  function displaySaveButton() {
    if (Object.keys(change).length !== 0) return true;

    return false;
  }

  return (
    <>
      {settings && (
        <Box
          display="flex"
          flexDirection="column"
          gap={2}
          sx={{ width: "100%", mb: 4 }}
        >
          <AccountSettings
            username={settings.username}
            name={settings.name}
            email={settings.email}
            onUsernameChange={(value) =>
              setChange({ ...change, username: value })
            }
            onNameChange={(value) => setChange({ ...change, name: value })}
            onEmailChange={(value) => setChange({ ...change, email: value })}
            accountErrors={errors}
          />
          <Box display="flex" flexDirection="column" gap={2} width="100%">
            <Typography variant="subtitle1">
              {t("settings.courseCustomization")}
            </Typography>
            <Button
              variant="outlined"
              onClick={() =>
                router.push(`/topic-selection/${user?.selectedCourse.id}`)
              }
              sx={{ width: "50%", alignSelf: "center" }}
            >
              {t("settings.customizeTopics")}
            </Button>
          </Box>
          <DailyGoalSettings
            dailyGoal={settings.dailyGoal}
            onGoalChange={(value) => setChange({ ...change, dailyGoal: value })}
          />
          <NotificationSettings
            notifications={settings.notifications}
            notifyOn={settings.notifyOn}
            practiceNotificationTime={settings.practiceNotificationTime}
            onNotificationsChange={(value) =>
              setChange({ ...change, notifications: { ...value } })
            }
            onNotifyOnChange={(value) =>
              setChange({ ...change, notifyOn: { ...value } })
            }
            onTimeChange={(value) =>
              setChange({ ...change, practiceNotificationTime: value })
            }
          />
          <Box display="flex" flexDirection="column" gap={2} width="100%">
            <Typography variant="subtitle1">
              {t("settings.wantToStudyOnDays")}
            </Typography>
            <DayPicker
              days={settings.learnOnDays}
              onDaysChange={(value) =>
                setChange({ ...change, learnOnDays: value })
              }
            />
          </Box>
          <OtherSettings
            animations={settings.animations}
            reviewPreviousLevels={settings.reviewPreviousLevels}
            publicProfile={settings.publicProfile}
            onAnimationsChange={(value) =>
              setChange({ ...change, animations: value })
            }
            onReviewPreviousLevelsChange={(value) =>
              setChange({ ...change, reviewPreviousLevels: value })
            }
            onPublicProfileChange={(value) =>
              setChange({ ...change, publicProfile: value })
            }
          />
          <Box display="flex" flexDirection="column" gap={2} width="100%">
            <Typography variant="subtitle1">{t("settings.premium")}</Typography>
            <Button
              variant="outlined"
              onClick={() => router.push("/subscription")}
              sx={{ width: "50%", alignSelf: "center" }}
            >
              {t("settings.manageSubscription")}
            </Button>
          </Box>
        </Box>
      )}

      {displaySaveButton() && (
        <BottomFab
          header={t("userActions.save")}
          icon={icons.save}
          onClick={() => handleSave()}
        />
      )}
    </>
  );
};

export default SettingsPage;
