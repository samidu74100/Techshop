/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['ae01.alicdn.com', 'ae04.alicdn.com', 'img.alicdn.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.alicdn.com',
      },
    ],
  },
}

module.exports = nextConfig
