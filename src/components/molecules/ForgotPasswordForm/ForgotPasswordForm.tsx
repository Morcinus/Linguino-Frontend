import { useTranslation } from "i18n/client";
import AuthAPI from "infrastructure/api/AuthAPI";
import theme from "styles/theme";

import { useForm } from "react-hook-form";

import { LoadingButton } from "@mui/lab";
import { TextField, Typography, useMediaQuery } from "@mui/material";
import { Box, Stack } from "@mui/system";

const EMAIL_REGEX = /\S+@\S+\.\S+/;

interface InputTypes {
  email: string;
}

export interface IForgotPasswordForm {
  onEmailSent: () => void;
}

const ForgotPasswordForm: React.FC<IForgotPasswordForm> = ({ onEmailSent }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputTypes>();
  const { t } = useTranslation("cs", "form");
  const desktop = useMediaQuery(theme.breakpoints.up("md"));

  const onSubmit = (data: { email: string }) => {
    AuthAPI.resetPassword(data);
    onEmailSent();
  };

  return (
    <Stack direction="column" justifyContent="center" spacing={2} sx={{ m: 3 }}>
      <Typography variant="h3" sx={{ mb: 2 }}>
        {t("forgotPassword.title")}
      </Typography>
      <Stack
        direction="column"
        justifyContent="center"
        spacing={2}
        component="form"
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        style={{ textAlign: "center" }}
      >
        <TextField
          id="email"
          type="email"
          label={t("auth.email")}
          helperText={
            errors.email?.type === "required"
              ? t("error.field-is-required")
              : errors.email?.type === "pattern" &&
                t("error.invalid-email-address")
          }
          error={errors.email !== undefined}
          {...register("email", {
            required: true,
            pattern: EMAIL_REGEX,
          })}
          fullWidth
          autoComplete="email"
        />
        <Box>
          <LoadingButton
            type="submit"
            variant="contained"
            disabled={Object.keys(errors).length !== 0}
            fullWidth={!desktop}
            size="large"
          >
            {t("forgotPassword.reset")}
          </LoadingButton>
        </Box>
      </Stack>
    </Stack>
  );
};

export default ForgotPasswordForm;
