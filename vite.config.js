import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import external from "rollup-plugin-peer-deps-external";

export default defineConfig({
  plugins: [react(), external()],
  build: {
    minify: false,
    sourcemap: true,
    copyPublicDir: false,
    cssCodeSplit: true,
    lib: {
      entry: resolve(__dirname, "src/lib/main.jsx"),
      formats: ["es"],
    },
    rollupOptions: {
      external: [
        "@aux4/dispatcher.js",
        "@aux4/use-handler",
        "react",
        "react-dom",
        "@emotion/css",
        "@emotion/react",
        "@emotion/styled",
        "@fortawesome/fontawesome-svg-core",
        "@fortawesome/free-brands-svg-icons",
        "@fortawesome/free-solid-svg-icons",
        "@fortawesome/react-fontawesome",
        "@mui/lab",
        "@mui/material",
        "@pairingwithme/markdown",
        "moment",
        "notistack",
        "react-qr-code",
        "react-router-dom",
      ],
    },
  },
});
