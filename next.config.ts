import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    esmExternals: true, // ESM 외부 모듈 지원 활성화
  },
  reactStrictMode: true, // 추가로 React Strict Mode를 활성화
};

export default nextConfig;
