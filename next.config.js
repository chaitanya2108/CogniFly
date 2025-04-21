/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/module/:id",
        destination: "/module/[id]",
      },
    ];
  },
};

module.exports = nextConfig;
