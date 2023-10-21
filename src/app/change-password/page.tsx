// prettier-ignore
"use client"

import { useTranslation } from "i18n/client";
import theme from "styles/theme";

import { useState } from "react";

import { useRouter } from "next/navigation";

import {
  Box,
  Button,
  Card,
  Container,
  Typography,
  useMediaQuery
} from "@mui/material";

import ChangePasswordForm from "components/molecules/ChangePasswordForm/ChangePasswordForm";

export interface IChangePasswordPage {
  searchParams: {
    resetToken: string;
    email: string;
  };
}

const ChangePasswordPage: React.FC<IChangePasswordPage> = ({ searchParams }) => {
  const desktop = useMediaQuery(theme.breakpoints.up("md"));
  const { t } = useTranslation("cs", "form");
  const [passwordChanged, setPasswordChanged] = useState(false);
  const router = useRouter();

  return (
    <Container maxWidth="xs" sx={{ pt: 3 }}>
      <Box>
        {passwordChanged === false ? (
          <>
            {desktop ? (
              <Card sx={{ textAlign: "center" }}>
                <ChangePasswordForm
                  onPasswordChanged={() => setPasswordChanged(true)}
                  resetToken={searchParams.resetToken}
                  email={searchParams.email}
                />
              </Card>
            ) : (
              <ChangePasswordForm
                onPasswordChanged={() => setPasswordChanged(true)}
                resetToken={searchParams.resetToken}
                email={searchParams.email}
              />
            )}
          </>
        ) : (
          <>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <Typography variant="h3">
                {t("changePassword.passwordChanged")}
              </Typography>

              <Button
                variant="contained"
                onClick={() => router.push("/login")}
                sx={{ justifySelf: "center" }}
              >
                {t("changePassword.login")}
              </Button>
            </Box>
          </>
        )}
      </Box>
    </Container>
  );
};

export default ChangePasswordPage;
