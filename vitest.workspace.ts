import { configDefaults, defineWorkspace } from "vitest/config";

export default defineWorkspace([
  {
    extends: "./vite.config.ts",
    test: {
      name: "browser",
      exclude: [...configDefaults.exclude, "src/**/*.jsdom.test.*"],
      browser: {
        enabled: true,
        screenshotFailures: false,
        provider: "playwright",
        headless: true,
        instances: [{ browser: "chromium" }],
      },
    },
  },
  {
    extends: "./vite.config.ts",
    test: {
      name: "jsdom",
      environment: "jsdom",
      browser: undefined,
      include: ["src/**/*.jsdom.test.*"],
      setupFiles: ["src/setupTests.ts"],
    },
  },
]);
