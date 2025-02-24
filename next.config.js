/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'eu-west-2.graphassets.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
