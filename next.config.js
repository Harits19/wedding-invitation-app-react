/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
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
