import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/start",
        destination: "/health-check",
        permanent: true,
      },
      {
        source: "/about-us",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/intelligence/insights",
        destination: "/about",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
