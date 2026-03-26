import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@agency/ui", "@agency/config"],
};

export default nextConfig;
