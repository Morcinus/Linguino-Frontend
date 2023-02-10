import axios from "axios";
import { SnackbarProvider } from "notistack";
import "regenerator-runtime/runtime";

import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";

import { ThemeProvider } from "@mui/material/styles";

import nextI18nConfig from "../../next-i18next.config";
import ContentContainer from "../app/components/layouts/ContentContainer";
import Navigation from "../app/components/layouts/Navigation";
import "../app/styles/globals.css";
import theme from "../app/styles/theme";
import { AuthProvider } from "../infrastructure/services/AuthProvider";
import { ErrorHandler } from "../infrastructure/services/ErrorHandler";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;

function MyApp({ Component, pageProps }: AppProps) {
  return (
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
            <ContentContainer>
              <Component {...pageProps} />
            </ContentContainer>
          </AuthProvider>
        </ErrorHandler>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp, nextI18nConfig);
