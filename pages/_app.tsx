import "../styles/globals.css";
import type { AppProps } from "next/app";

import { ThemeProvider } from "@mui/material/styles";
import theme from "../styles/theme";
import axios from "axios";
import { AuthProvider } from "../util/useAuth";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
import { SnackbarProvider } from "notistack";

axios.defaults.baseURL = publicRuntimeConfig.API_URL;

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
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default MyApp;
