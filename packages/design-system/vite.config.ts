import { defineConfig } from "vite";
import { resolve } from "node:path";

export default defineConfig({
  build: {
    outDir: "dist",
    cssMinify: false,
    minify: true,
    sourcemap: false,
    lib: {
      entry: resolve(__dirname, "index.ts"),
      name: "index",
      formats: ["es"],
      fileName: () => "index.mjs",
    },
  },
  plugins: [],
});
