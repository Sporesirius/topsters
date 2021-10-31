/** @type {import('next').NextConfig} */
const withPlugins = require("next-compose-plugins");

// next.js configuration
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  swcMinify: true,
  experimental: {
    concurrentFeatures: true,
    serverComponents: true
  },
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]_[hash:base64:5]",
  },
  images: {
    domains: ['socialistmodernism.com'],
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
