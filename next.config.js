/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // allow loading local assets from /public
    domains: []
  }
};

module.exports = nextConfig;
