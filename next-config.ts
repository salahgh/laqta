import { NextConfig } from "next";

const nextConfig: NextConfig = {
    typescript: {
        ignoreBuildErrors: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    // Ensure static generation works properly
    output: 'standalone', // Optional: for better deployment
    experimental: {
        // Enable static generation optimizations
        optimizePackageImports: ['@/lib/strapi'],
    },
};

export default nextConfig;
