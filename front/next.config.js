/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  rewrites() {
    return [
      {
        source: '/login',
        destination: '/auth?auth=login',
      },
      {
        source: '/register',
        destination: '/auth?auth=register',
      },
    ];
  },

  // experimental: {
  //   staticPageGenerationTimeout: 1800,
  // },
};

module.exports = nextConfig;
