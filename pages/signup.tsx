import React from "react";
import { useForm } from "react-hook-form";
import Link from "@mui/material/Link";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// Material UI
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import LoadingButton from "@mui/lab/LoadingButton";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { FormHelperText } from "@mui/material";
import { useTranslation } from "next-i18next";

// API
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
  const { signUp, loading } = useAuth();
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
                {t("auth.registration")}
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
                    errors.username?.type === "required" &&
                    t("error.field-is-required")
                  }
                  error={errors.username !== undefined}
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
                      {t("auth.i-agree-with")}{" "}
                      <Link
                        target="blank_"
                        href="https://www.pandulino.com/vseobecne-obchodni-podminky/"
                      >
                        {t("auth.terms-of-trade")}
                      </Link>{" "}
                      {t("auth.and")}{" "}
                      <Link
                        target="blank_"
                        href="https://www.pandulino.com/ochrana-osobnich-udaju/"
                      >
                        {t("auth.processing-of-personal-data")}
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
                    t("error.you-have-to-agree-with-terms")}
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
                {t("auth.have-an-account-?-login")}{" "}
                <Link href="/login">{t("auth.here")}</Link>.
              </Typography>
            </Stack>
          </Card>
        </Box>
      </Container>
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["form", "snack"])),
      // Will be passed to the page component as props
    },
  };
}

export default Signup;
