import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { imagetools } from "vite-imagetools";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  build: {
    // Faster CI builds; gzip size reporting is expensive with many assets
    reportCompressedSize: false,
    chunkSizeWarningLimit: 1000,
  },
  plugins: [
    react(),
    imagetools({
      defaultDirectives: (url) => {
        // Only auto-process images with the ?responsive marker
        if (url.searchParams.has("responsive")) {
          const w = url.searchParams.get("w") || "480;768;1200";
          // webp only — avif+jpg triples build time on Vercel (2 cores)
          const formats = url.searchParams.get("format") || "webp";
          return new URLSearchParams({
            w,
            format: formats,
            as: "picture",
          });
        }
        return new URLSearchParams();
      },
    }),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime", "@tanstack/react-query", "@tanstack/query-core"],
  },
}));
