const { i18n } = require("./next-i18next.config");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Had to be turned off otherwise dynamic segments don't work
  // i18n,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "loremflickr.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
