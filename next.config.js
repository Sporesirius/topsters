const withPlugins = require("next-compose-plugins");

// next.js configuration
const nextConfig = {
  reactStrictMode: false, //temp fix
  poweredByHeader: false,
  swcMinify: true,
  removeConsole: {
    exclude: ['error'],
  },
  i18n: {
    locales: ["en-US"],
    defaultLocale: "en-US"
  },
  experimental: {
    runtime: "nodejs",
    serverComponents: false,
  },
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]_[hash:base64:5]",
  },

  // Webpack
  webpack: function (config) {
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      type: "asset/inline",
    });
    return config;
  },
};

module.exports = withPlugins([], nextConfig);
