import path from "node:path";
import type { NextConfig } from "next";

const projectRoot = path.resolve(__dirname);

const nextConfig: NextConfig = {
    turbopack: {
        root: projectRoot,
    },
    images: {
        formats: ["image/avif", "image/webp"],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "kenneth-bkt-24.s3.us-west-2.amazonaws.com",
            },
        ],
    },
};

export default nextConfig;

