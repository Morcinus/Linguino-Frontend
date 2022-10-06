import axios from "axios";
import i18n from "i18next";

import common from '../public/locales/cs/common.json' assert { type: 'json' };
import form from '../public/locales/cs/form.json' assert { type: 'json' };
import snack from '../public/locales/cs/snack.json' assert { type: 'json' };

import { initReactI18next } from "react-i18next";

import { ThemeProvider } from '@mui/material/styles';
import theme from '../src/app/styles/theme';

import * as NextImage from "next/image";

import "../src/app/styles/globals.css";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;

export const decorators = [
  Story => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
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

// Allow Storybook to handle Next's <Image> component
const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: { viewports: customViewports },
};
