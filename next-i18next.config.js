const HttpBackend = require("i18next-http-backend/cjs");
const ChainedBackend = require("i18next-chained-backend").default;
const LocalStorageBackend = require("i18next-localstorage-backend").default;

module.exports = {
  backend: {
    backendOptions: [{ expirationTime: 7 * 24 * 60 * 60 * 1000 }],
    backends:
      typeof window !== "undefined" ? [LocalStorageBackend, HttpBackend] : [],
  },
  i18n: {
    defaultLocale: "cs",
    locales: ["cs"],
  },
  serializeConfig: false,
  use: typeof window !== "undefined" ? [ChainedBackend] : [],
};
