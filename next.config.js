const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: ['raw.githubusercontent.com'],
  },

  sassOptions: {
    includePaths: [path.join(__dirname, 'src', 'styles')],
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    config.optimization.minimize = false;

    return config;
  },
};

module.exports = nextConfig;
