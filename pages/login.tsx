import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

import LoadingButton from "@mui/lab/LoadingButton";
import { FormHelperText } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import useAuth from "../util/useAuth";

const EMAIL_REGEX = /\S+@\S+\.\S+/;

interface InputTypes {
  email: string;
  password: string;
}

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputTypes>();
  const { login, loading, errors: authErrors, user } = useAuth();
  const { t } = useTranslation("form");
  const router = useRouter();

  const onSubmit = (data: { email: string; password: string }) => {
    login(data.email, data.password);
  };

  useEffect(() => {
    if (user) router.push("/");
  }, [user]);

  return (
    <div>
      <Container maxWidth="xs">
        <Box sx={{ my: 16 }}>
          <Card sx={{ p: 3, textAlign: "center" }}>
            <Stack direction="column" justifyContent="center" spacing={2}>
              <Typography variant="h3" sx={{ mb: 2 }}>
                {t("auth.login-header")}
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
                <TextField
                  id="password"
                  type="password"
                  label={t("auth.password")}
                  helperText={
                    errors.password?.type === "required" &&
                    t("error.field-is-required")
                  }
                  error={errors.password !== undefined}
                  {...register("password", {
                    required: true,
                    minLength: 6,
                  })}
                  fullWidth
                  autoComplete="new-password"
                />
                <FormHelperText
                  error={authErrors?.includes("WRONG_EMAIL_OR_PASSWORD")}
                  sx={{ textAlign: "center" }}
                >
                  {authErrors?.includes("WRONG_EMAIL_OR_PASSWORD") && (
                    <>
                      {t("error.wrong-email-or-password")}{" "}
                      <Link href="/forgot-password">
                        {t("auth.forgot-password")}
                      </Link>
                    </>
                  )}
                </FormHelperText>
                <Box>
                  <LoadingButton
                    type="submit"
                    variant="contained"
                    disabled={loading}
                    loading={loading}
                  >
                    {t("auth.login")}
                  </LoadingButton>
                </Box>
              </Stack>
              <Typography variant="body2">
                {t("auth.dont-have-account")}{" "}
                <Link href="/signup">{t("auth.here")}</Link>.
              </Typography>
            </Stack>
          </Card>
        </Box>
      </Container>
    </div>
  );
}

export default Login;
