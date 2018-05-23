module.exports = {
  components: "src/components/**/*.{ts,tsx}",
  propsParser: require("react-docgen-typescript").parse,
  webpackConfig: require("react-scripts-ts/config/webpack.config.dev.js"),
  ignore: [
    "src/setupTests.ts",
    "**/*.spec.ts",
    "**/*.spec.tsx",
    "**/*.test.ts",
    "**/*.test.tsx",
    "**/*.d.ts"
  ]
};
