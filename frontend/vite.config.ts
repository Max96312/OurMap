import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
        target: "es2015", // 빌드 대상 환경
        outDir: "dist", // 출력 디렉토리
        assetsDir: "assets", // 빌드된 정적 자원을 저장할 디렉토리
        minify: "terser", // 코드 최소화 도구 (terser 또는 esbuild)
        sourcemap: false, // 소스맵 생성 여부
    },
});
