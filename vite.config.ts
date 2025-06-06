import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ["react", "react-dom/client", "react-redux", "@reduxjs/toolkit"],
  },
  test: {
    globals: true,
    reporters: "verbose",
    setupFiles: ["src/setupTests.ts"],
    coverage: {
      provider: "v8",
      reporter: ["text", "html", "lcov"],
      include: ["**/*.tsx", "**/*.ts"],
      exclude: ["src/main.tsx", "**/*.d.ts", "**/types.ts", "**/*.config.*"],
      reportsDirectory: "coverage",
    },
    browser: {
      enabled: true,
      screenshotFailures: false,
      provider: "playwright",
      headless: true,
      instances: [{ browser: "chromium" }],
    },
  },
});
