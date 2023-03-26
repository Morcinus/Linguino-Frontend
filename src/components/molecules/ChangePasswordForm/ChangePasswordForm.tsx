import { useTranslation } from "i18n/client";
import AuthAPI from "infrastructure/api/AuthAPI";
import theme from "styles/theme";

import { useForm } from "react-hook-form";

import LoadingButton from "@mui/lab/LoadingButton";
import { useMediaQuery } from "@mui/material";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

interface InputTypes {
  password: string;
  reenterPassword: string;
}

export interface IChangePasswordForm {
  resetToken: string;
  onPasswordChanged: () => void;
}

const ChangePasswordForm: React.FC<IChangePasswordForm> = ({
  resetToken,
  onPasswordChanged,
}) => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<InputTypes>();
  const { t } = useTranslation("cs", "form");
  const desktop = useMediaQuery(theme.breakpoints.up("md"));

  const onSubmit = (data: { password: string }) => {
    AuthAPI.changePassword({ ...data, resetToken });
    onPasswordChanged();
  };

  return (
    <Stack direction="column" justifyContent="center" spacing={2} sx={{ m: 3 }}>
      <Typography variant="h3" sx={{ mb: 2 }}>
        {t("changePassword.title")}
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
          id="password"
          type="password"
          label={t("changePassword.newPassword")}
          helperText={
            errors.password?.type === "required"
              ? t("error.field-is-required")
              : errors.password?.type === "minLength" &&
                t("error.password-too-short")
          }
          error={errors.password !== undefined}
          {...register("password", {
            required: true,
            minLength: 6,
          })}
          fullWidth
          autoComplete="new-password"
        />
        <TextField
          id="reenterPassword"
          type="password"
          label={t("changePassword.reenterPassword")}
          helperText={
            errors.reenterPassword?.type === "required"
              ? t("error.field-is-required")
              : errors.reenterPassword?.type === "matches" &&
                t("error.passwords-dont-match")
          }
          error={errors.reenterPassword !== undefined}
          {...register("reenterPassword", {
            required: true,
            validate: {
              matches: (v) => v === getValues("password"),
            },
          })}
          fullWidth
        />
        <Box>
          <LoadingButton
            type="submit"
            variant="contained"
            disabled={Object.keys(errors).length !== 0}
            fullWidth={!desktop}
            size="large"
          >
            {t("changePassword.changePassword")}
          </LoadingButton>
        </Box>
      </Stack>
    </Stack>
  );
};

export default ChangePasswordForm;
