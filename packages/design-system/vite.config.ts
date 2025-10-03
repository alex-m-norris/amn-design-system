import { defineConfig } from "vite";
import { resolve } from "path";
import dts from "unplugin-dts/vite";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      formats: ["es"],
      fileName: "index",
    },
    outDir: "dist",
    cssMinify: false,
    sourcemap: false,
  },
  plugins: [dts()],
});
