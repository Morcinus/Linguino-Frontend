import React from "react";
import { useForm } from "react-hook-form";

import { GetServerSideProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import LoadingButton from "@mui/lab/LoadingButton";
import { FormHelperText } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";
import Container from "@mui/material/Container";
import FormControlLabel from "@mui/material/FormControlLabel";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import useAuth from "../util/useAuth";

const EMAIL_REGEX = /\S+@\S+\.\S+/;

interface InputTypes {
  username: string;
  email: string;
  password: string;
  checked: boolean;
}

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputTypes>();
  const { signUp, loading, errors: authErrors } = useAuth();
  const { t } = useTranslation("form");

  const onSubmit = (data: {
    username: string;
    email: string;
    password: string;
  }) => {
    signUp(data.username, data.email, data.password);
  };

  return (
    <div>
      <Container maxWidth="xs">
        <Box sx={{ my: 16 }}>
          <Card sx={{ p: 3, textAlign: "center" }}>
            <Stack direction="column" justifyContent="center" spacing={2}>
              <Typography variant="h3" sx={{ mb: 2 }}>
                {t("auth.signup-header")}
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
                  id="username"
                  type="text"
                  label={t("auth.username")}
                  helperText={
                    errors.username?.type === "required"
                      ? t("error.field-is-required")
                      : authErrors?.includes("USERNAME_TAKEN") &&
                        t("error.username-taken")
                  }
                  error={
                    errors.username !== undefined ||
                    authErrors?.includes("USERNAME_TAKEN")
                  }
                  {...register("username", {
                    required: true,
                  })}
                  fullWidth
                  autoComplete="username"
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
                      : authErrors?.includes("EMAIL_ADDDRESS_TAKEN") &&
                        t("error.email-taken")
                  }
                  error={
                    errors.email !== undefined ||
                    authErrors?.includes("EMAIL_ADDDRESS_TAKEN")
                  }
                  {...register("email", {
                    required: true,
                    pattern: EMAIL_REGEX,
                  })}
                  fullWidth
                  autoComplete="email"
                />
                <TextField
                  id="password"
                  type="password"
                  label={t("auth.password")}
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
                <FormControlLabel
                  control={
                    <Checkbox {...register("checked", { required: true })} />
                  }
                  label={
                    <Typography variant="body2" sx={{ textAlign: "left" }}>
                      {t("auth.terms.0")}{" "}
                      <Link
                        target="blank_"
                        href="https://www.pandulino.com/vseobecne-obchodni-podminky/"
                      >
                        {t("auth.terms.1")}
                      </Link>{" "}
                      {t("auth.terms.2")}{" "}
                      <Link
                        target="blank_"
                        href="https://www.pandulino.com/ochrana-osobnich-udaju/"
                      >
                        {t("auth.terms.3")}
                      </Link>
                      .
                    </Typography>
                  }
                />
                <FormHelperText
                  error={errors.checked !== undefined}
                  sx={{ textAlign: "center" }}
                >
                  {errors.checked?.type === "required" &&
                    t("error.agree-with-terms")}
                </FormHelperText>
                <Box>
                  <LoadingButton
                    type="submit"
                    variant="contained"
                    color="secondary"
                    disabled={loading}
                    loading={loading}
                  >
                    {t("auth.signup")}
                  </LoadingButton>
                </Box>
              </Stack>
              <Typography variant="body2">
                {t("auth.have-an-account")}{" "}
                <Link href="/login">{t("auth.here")}</Link>.
              </Typography>
            </Stack>
          </Card>
        </Box>
      </Container>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale as string, ["form", "snack"])),
  },
});

export default Signup;
