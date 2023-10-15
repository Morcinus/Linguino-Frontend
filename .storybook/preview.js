import axios from "axios";
import i18n from "i18next";

import { initReactI18next } from "react-i18next";

import { AppRouterContext } from "next/dist/shared/lib/app-router-context";

import { ThemeProvider } from "@mui/material/styles";

import common from "../public/locales/cs/common.json";
import form from "../public/locales/cs/form.json";
import snack from "../public/locales/cs/snack.json";
import AuthDecorator from "../src/decorators/authDecorator";
import "../src/styles/globals.css";
import theme from "../src/styles/theme";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
  AuthDecorator,
  (Story, Context) => {
    i18n.use(initReactI18next).init({
      lng: "cs",
      fallbackLng: "cs",

      // have a common namespace used around the full app
      ns: ["common"],
      defaultNS: "common",

      // debug: true,

      interpolation: {
        escapeValue: false, // not needed for react!!
      },

      // https://github.com/i18next/i18next/issues/1473
      resources: { cs: { common: common, form: form, snack: snack } },
    });

    return <Story />;
  },
];

const BREAKPOINTS_INT = {
  xs: 375,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
};

const customViewports = Object.fromEntries(
  Object.entries(BREAKPOINTS_INT).map(([key, val], idx) => {
    console.log(val);
    return [
      key,
      {
        name: key,
        styles: {
          width: `${val}px`,
          height: `${(idx + 5) * 10}vh`,
        },
      },
    ];
  })
);

export const parameters = {
  nextRouter: {
    Provider: AppRouterContext.Provider,
  },
  nextjs: {
    appDirectory: true,
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: { viewports: customViewports },
};
