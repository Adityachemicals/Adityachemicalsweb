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
        destination: "/IFT_Brochure.pdf",
      },
    ];
  },
};

export default nextConfig;
