import { defineConfig } from "vite";
import dts from "unplugin-dts/vite";

export default defineConfig({
  build: {
    outDir: "dist",
    cssMinify: false,
    sourcemap: false,
  },
  plugins: [dts()],
});
