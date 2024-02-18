import { useTranslation } from "i18n/client";
import errorCodes from "infrastructure/api/error-codes";

import { useForm } from "react-hook-form";

import { useRouter } from "next/navigation";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import { EMAIL_REGEX } from "components/molecules/SignupForm/SignupForm";

export interface IAccountSettings {
  username: string;
  name: string;
  email: string;

  onUsernameChange: (value: string) => void;
  onNameChange: (value: string) => void;
  onEmailChange: (value: string) => void;

  accountErrors: Array<string>;
}

interface InputTypes {
  username: string;
  name: string;
  email: string;
}

const AccountSettings: React.FC<IAccountSettings> = ({
  username,
  name,
  email,
  onUsernameChange,
  onEmailChange,
  onNameChange,
  accountErrors,
}) => {
  const { t } = useTranslation("form");
  const router = useRouter();
  const {
    register,

    formState: { errors },
    getValues,
  } = useForm<InputTypes>({
    defaultValues: {
      username: username,
      email: email,
      name: name,
    },
  });

  return (
    <Box display="flex" flexDirection="column" gap={2} width="100%">
      <Typography variant="subtitle1">
        {t("settings.accountAndProfile")}
      </Typography>
      <Box display="flex" flexDirection="column" gap={2} width="100%">
        <TextField
          id="username"
          type="text"
          label={t("auth.username")}
          helperText={
            errors.username?.type === "required"
              ? t("error.field-is-required")
              : accountErrors.includes(errorCodes.usernameTaken) &&
                getValues("username") === username
              ? t("error.username-taken")
              : undefined
          }
          error={
            errors.username !== undefined ||
            (accountErrors.includes(errorCodes.usernameTaken) &&
              getValues("username") === username)
          }
          {...register("username", {
            required: true,
            onChange: (e) => onUsernameChange(e.target.value),
          })}
          fullWidth
        />
        <TextField
          label={t("settings.name")}
          id="name"
          type="text"
          helperText={
            errors.name?.type === "required" ? t("error.field-is-required") : ""
          }
          error={errors.name !== undefined}
          {...register("name", {
            required: true,
            onChange: (e) => onNameChange(e.target.value),
          })}
          fullWidth
        />
        <TextField
          id="email"
          type="email"
          label={t("auth.email")}
          helperText={
            errors.email?.type === "required"
              ? t("error.field-is-required")
              : errors.email?.type === "pattern"
              ? t("error.invalid-email-address")
              : accountErrors.includes(errorCodes.emailAddressTaken) &&
                getValues("email") === email &&
                t("error.email-taken")
          }
          error={
            errors.email !== undefined ||
            (accountErrors.includes(errorCodes.emailAddressTaken) &&
              getValues("email") === email)
          }
          {...register("email", {
            required: true,
            pattern: EMAIL_REGEX,
            onChange: (e) => onEmailChange(e.target.value),
          })}
          fullWidth
        />
        <Button
          variant="outlined"
          onClick={() => router.push("/change-password")}
          sx={{ width: "50%", alignSelf: "center" }}
        >
          {t("settings.changePassword")}
        </Button>
      </Box>
    </Box>
  );
};

export default AccountSettings;
