// prettier-ignore
"use client";

import axios from "axios";
import { SnackbarProvider } from "notistack";

import { ThemeProvider } from "@mui/material/styles";

import ContentContainer from "../components/layouts/ContentContainer";
import Navigation from "../components/layouts/Navigation";
import { AuthProvider } from "../infrastructure/services/AuthProvider";
import { ErrorHandler } from "../infrastructure/services/ErrorHandler";
import "../styles/globals.css";
import theme from "../styles/theme";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <ThemeProvider theme={theme}>
          <SnackbarProvider
            maxSnack={3}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
          >
            <ErrorHandler>
              <AuthProvider>
                <Navigation />
                <ContentContainer>{children}</ContentContainer>
              </AuthProvider>
            </ErrorHandler>
          </SnackbarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
