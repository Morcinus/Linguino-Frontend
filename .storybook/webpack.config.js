const path = require("path");

/**
 * The doc doesn't really mention using webpack.config.js, but .storybook/main.js instead.
 *
 * Nevertheless, configuring the webpack.config.js seems to work fine.
 *
 * @param config
 * @param mode
 * @return {Promise<*>}
 * @see https://storybook.js.org/docs/react/configure/webpack
 * @see https://storybook.js.org/docs/react/configure/webpack#using-your-existing-config
 */
module.exports = async ({ config, mode }) => {
  /**
   * Fixes npm packages that depend on `fs` module, etc.
   *
   * @see https://github.com/storybookjs/storybook/issues/4082#issuecomment-495370896
   */
  config.resolve.fallback = {
    fs: false,
    tls: false,
    net: false,
    module: false,
    assert: false,
    path: require.resolve("path-browserify"),
    util: false,
    crypto: false,
  };

  config.resolve.alias = {
    ...config.resolve.alias,
    "next-i18next": "react-i18next",
  };

  config.resolve.modules = [
    path.resolve(__dirname, "..", "src"),
    "node_modules",
  ];

  return config;
};
