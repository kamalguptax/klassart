/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    allowedDevOrigins: ['http://192.168.31.127:3000'], // ya jo bhi IP/port se access kar rahe ho
  },
}

module.exports = nextConfig