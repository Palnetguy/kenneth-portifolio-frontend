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
            {
                protocol: "https",
                hostname: "backend.masaba-kenneth.info",
            },
            {
                protocol: "https",
                hostname: "kenneth-portifolio-backend.up.railway.app",
            },
            {
                protocol: "http",
                hostname: "localhost",
                port: "8000",
            },
            {
                protocol: "http",
                hostname: "127.0.0.1",
                port: "8000",
            },
        ],
    },
};

export default nextConfig;

