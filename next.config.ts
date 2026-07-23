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
      {
        source: "/intelligence/problems",
        destination: "/what-we-solve",
        permanent: true,
      },
      {
        source: "/intelligence/tools",
        destination: "/health-check",
        permanent: true,
      },
      {
        source: "/intelligence",
        destination: "/what-we-solve",
        permanent: true,
      },
      {
        source: "/how-we-work",
        destination: "/method",
        permanent: true,
      },
      {
        source: "/start/thank-you",
        destination: "/health-check",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
