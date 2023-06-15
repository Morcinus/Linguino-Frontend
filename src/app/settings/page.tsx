// prettier-ignore
"use client"

import { useTranslation } from "i18n/client";
import SettingsAPI from "infrastructure/api/settings/SettingsAPI";
import useAuth from "infrastructure/services/AuthProvider";
import icons from "styles/icons";

import { useState } from "react";


import BottomFab from "components/atoms/BottomFab/BottomFab";
import AccountSettings from "components/molecules/settings/AccountSettings/AccountSettings";
import { optimisticMutationOption } from "infrastructure/api/API";
import errorCodes from "infrastructure/api/error-codes";
import { useSnackbar } from "notistack";

export interface ISettingsPage {}

const SettingsPage: React.FC<ISettingsPage> = () => {
  const { t } = useTranslation("cs", "form");
  const {user} = useAuth();
  const { settings, mutate } = SettingsAPI.useSettings(user?.id);
  const [errors, setErrors] = useState<Array<string>>([]);
  const [change, setChange] = useState({});
  const { enqueueSnackbar } = useSnackbar();

  function handleSave() {
    mutate(
      async () => {
        try {
          const newSettings = await SettingsAPI.updateSettings({id: settings.id, ...change});

          enqueueSnackbar(t("settings.saved"), {
            variant: "success",
          });

          setErrors([]);
          setChange({});
          return newSettings;
        } catch (err) {
          handleError(err);
          return {...settings, ...change};
        }
      },
      optimisticMutationOption(
        {...settings, ...change}
      )
    );
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
        <AccountSettings
          username={settings.username}
          name={settings.name}
          email={settings.email}
          onUsernameChange={(value) =>
            setChange({ ...change, username: value })
          }
          onNameChange={(value) =>
            setChange({ ...change, name: value })
          }
          onEmailChange={(value) =>
            setChange({ ...change, email: value })
          }
          accountErrors={errors}
        />
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
