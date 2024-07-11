/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        port: "",
      },
      {
        protocol: "https",
        hostname: "rawstory.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
