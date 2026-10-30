import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.adityachemicals.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "adityachemicals.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.adityachemicals.in",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "adityachemicals.in",
        pathname: "/**",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/cphi",
        destination: "/EXHIBITION BROCHURE - 14-10-2026 - USA-2.pdf",
      },
    ];
  },
};

export default nextConfig;
