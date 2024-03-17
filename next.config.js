/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: "/website",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
