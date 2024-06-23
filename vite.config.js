import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import external from 'rollup-plugin-peer-deps-external';

export default defineConfig({
  plugins: [react(), dts({include: "src/lib"}),external()],
  external: ["react", "react-dom"],
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, "src/lib/main.jsx"),
      formats: ["es"],
    },
  },
});
