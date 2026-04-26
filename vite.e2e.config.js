import { defineConfig } from "vite";
import { playwright } from "@vitest/browser-playwright";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: "./src/tests/setupTests.js",
    globals: true,
    css: true,
    browser: {
      provider: playwright(),
      enabled: true,
      instances: [
        { browser: 'chromium'}
      ]
    }
  }
});
