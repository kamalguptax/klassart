/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    allowedDevOrigins: [], // ya jo bhi IP/port se access kar rahe ho
  },
}

module.exports = nextConfig