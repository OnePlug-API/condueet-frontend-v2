import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import tsConfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@components": path.resolve(__dirname, "src/components"),
      "@libs": path.resolve(__dirname, "src/libs"),
      "@pages": path.resolve(__dirname, "src/pages"),
    },
  },
  plugins: [react(), tsConfigPaths()],
});
