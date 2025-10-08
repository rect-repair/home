/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/cedar-os',
  images: {
    unoptimized: true,
    domains: ['instagram.com', 'www.instagram.com', 'cdn.itch.zone'],
  },
};

module.exports = nextConfig;
