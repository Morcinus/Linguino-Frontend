// prettier-ignore
"use client"

import theme from "styles/theme";

import { Box, Card, Container, useMediaQuery } from "@mui/material";

import LoginForm from "components/molecules/LoginForm/LoginForm";

export interface ILoginPage {}

const LoginPage: React.FC<ILoginPage> = () => {
  const desktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Container maxWidth="xs" sx={{ pt: 3 }}>
      <Box>
        {desktop ? (
          <Card sx={{ textAlign: "center" }}>
            <LoginForm />
          </Card>
        ) : (
          <LoginForm />
        )}
      </Box>
    </Container>
  );
};

export default LoginPage;
