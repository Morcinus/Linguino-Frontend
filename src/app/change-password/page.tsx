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
  params: {
    resetToken: string;
  };
}

const ChangePasswordPage: React.FC<IChangePasswordPage> = ({ params }) => {
  const desktop = useMediaQuery(theme.breakpoints.up("md"));
  const { t } = useTranslation("cs", "form");
  const [emailSent, setEmailSent] = useState(false);
  const router = useRouter();

  return (
    <Container maxWidth="xs" sx={{ pt: 3 }}>
      <Box>
        {emailSent === false ? (
          <>
            {desktop ? (
              <Card sx={{ textAlign: "center" }}>
                <ChangePasswordForm
                  onPasswordChanged={() => setEmailSent(true)}
                  resetToken={params.resetToken}
                />
              </Card>
            ) : (
              <ChangePasswordForm
                onPasswordChanged={() => setEmailSent(true)}
                resetToken={params.resetToken}
              />
            )}
          </>
        ) : (
          <>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
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
