import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatar.iran.liara.run",
        port: "",
        pathname: "/public/**",
        search: "",
      },
    ],
  },
  reactStrictMode: true,
  webpack: (config, { dev }) => {
    if (dev) {
      config.resolve.alias['react-dom$'] = 'react-dom';
      config.resolve.alias['scheduler/tracing'] = 'scheduler/tracing';
    }
    return config;
  }
};

export default nextConfig;
