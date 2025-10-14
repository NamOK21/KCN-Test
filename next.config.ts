import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "export",
    images: {
        unoptimized: true,
    },
    trailingSlash: true,
    webpack(config) {
        // Thêm loader cho SVG như React component
        config.module.rules.push({
            test: /\.svg$/i,            // Áp dụng cho file .svg
            issuer: /\.[jt]sx?$/,       // Khi import trong JS/TS/JSX/TSX
            use: ["@svgr/webpack"],     // Sử dụng SVGR
        });
        return config;
    },
};

export default nextConfig;
