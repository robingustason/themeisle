/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rewrites: async () => [
    {
      source: "/public/best-grammar-checker-free.html",
      destination: "/pages/api/myfile.js",
    },
  ],
};

module.exports = nextConfig;
