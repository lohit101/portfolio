import { defineConfig } from "@playwright/test";
export default defineConfig({
  testDir: "./tests",
  timeout: 30_000,
  use: {
    baseURL: "http://localhost:3001",
    viewport: { width: 1440, height: 900 },
    headless: true,
  },
  webServer: {
    command: "npm run start -- --port 3001",
    url: "http://localhost:3001",
    reuseExistingServer: true,
  },
});
