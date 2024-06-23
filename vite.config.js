import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [react(), dts({include: "src/lib"})],
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, "src/lib/main.jsx"),
      formats: ["es"],
    },
  },
});
