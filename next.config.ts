import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  reactStrictMode: true,
  devIndicators: {
      buildActivity: true,
  },
  poweredByHeader: false,


};



export default nextConfig;
