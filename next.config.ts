const { withSentryConfig } = require("@sentry/nextjs");

const nextConfig = {
  experimental: {
    instrumentationHook: true,
  },
};

// Make sure adding Sentry options is the last code to run before exporting
module.exports = withSentryConfig(nextConfig, {
  org: "edagurciadev",
  project: "repair-shop",

  // An auth token is required for uploading source maps.
  authToken: process.env.SENTRY_AUTH_TOKEN,

  silent: false, // Can be used to suppress logs

  hideSourceMaps: true,

  disableLogger: true,
});
