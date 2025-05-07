import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    reporters: "verbose",
    coverage: {
      provider: "v8",
      include: ["**/*.tsx", "**/*.ts"],
      exclude: [
        "src/main.tsx",
        "**/*.d.ts",
        "**/types.ts",
        "**/App.tsx",
        "**/*.config.*",
      ],
      reportsDirectory: "coverage",
    },
    browser: {
      enabled: true,
      provider: "playwright",
      headless: true,
      instances: [{ browser: "chromium" }],
    },
  },
});
