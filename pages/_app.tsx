import axios from "axios";
import { SnackbarProvider } from "notistack";

import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";

import { ThemeProvider } from "@mui/material/styles";

import ContentContainer from "../components/ContentContainer";
import { ErrorHandler } from "../components/ErrorHandler";
import Navigation from "../components/Navigation";
import nextI18nConfig from "../next-i18next.config";
import "../styles/globals.css";
import theme from "../styles/theme";
import { AuthProvider } from "../util/hooks/useAuth";

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
