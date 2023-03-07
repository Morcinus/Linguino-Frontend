import axios from "axios";
import { SnackbarProvider } from "notistack";
import "regenerator-runtime/runtime";

import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";

import { ThemeProvider } from "@mui/material/styles";

import Navigation from "components/atoms/navigation/NavigationBars/NavigationBars";
import ContentContainer from "components/layouts/ContentContainer/ContentContainer";

import nextI18nConfig from "../../next-i18next.config";
import { AuthProvider } from "../infrastructure/services/AuthProvider";
import { ErrorHandler } from "../infrastructure/services/ErrorHandler";
import "../styles/globals.css";
import theme from "../styles/theme";

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
