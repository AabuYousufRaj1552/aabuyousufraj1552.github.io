import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",  // This is required for static sites
  images: {
    unoptimized: true, // This fixes the broken image!
  },
};

export default nextConfig;;
