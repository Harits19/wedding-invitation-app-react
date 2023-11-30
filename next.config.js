/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    unoptimized: true,
    remotePatterns: [

      {
        hostname: "*",
      },
    ],
  },
}

module.exports = nextConfig
