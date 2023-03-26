// prettier-ignore
"use client"

import { Box, Card, Container, useMediaQuery } from "@mui/material";
import SignupForm from "components/molecules/SignupForm/SignupForm";
import theme from "styles/theme";

export interface ISignupPage {
  
}

const SignupPage: React.FC<ISignupPage> = () => {
  const desktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Container maxWidth="xs" sx={{ pt: 3 }}>
      <Box>
        {desktop ? (
          <Card sx={{ textAlign: "center" }}>
            <SignupForm />
          </Card>
        ) : (
          <SignupForm />
        )}
      </Box>
    </Container>
  );
};

export default SignupPage;
