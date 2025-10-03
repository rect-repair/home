/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['instagram.com', 'www.instagram.com', 'cdn.itch.zone'],
  },
};

module.exports = nextConfig;
