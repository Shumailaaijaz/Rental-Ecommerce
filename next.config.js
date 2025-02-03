/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['cdn.sanity.io'], // ✅ Correct way to allow external images
    },
  }
  
  module.exports = nextConfig;
  