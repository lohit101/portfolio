import { test, expect } from "@playwright/test";

for (const browserName of ["chromium", "webkit"] as const) {
  test.describe(`${browserName} mobile browser surface`, () => {
    for (const reducedMotion of ["reduce", "no-preference"] as const) {
      test(`follows the visible intro in both directions (${reducedMotion})`, async ({
        playwright,
        baseURL,
      }) => {
        const browser = await playwright[browserName].launch();
        try {
          const page = await browser.newPage({
            viewport: { width: 390, height: 844 },
            isMobile: true,
            hasTouch: true,
          });
          await page.emulateMedia({ reducedMotion, colorScheme: "dark" });
          await page.goto(baseURL!);
          const theme = page.locator('meta[name="theme-color"]');
          const surface = async (color: string, meta: string) => {
            await expect(page.locator("html")).toHaveCSS(
              "background-color",
              color,
            );
            await expect(page.locator("body")).toHaveCSS(
              "background-color",
              color,
            );
            await expect(theme).toHaveAttribute("content", meta);
          };
          await surface("rgb(231, 38, 4)", "#e72604");
          await page.evaluate(() => window.scrollTo(0, 1300));
          await surface("rgb(255, 255, 255)", "#fff");
          if (reducedMotion === "no-preference")
            await expect(page.locator(".hero")).toHaveCSS(
              "visibility",
              "hidden",
            );
          await page.setViewportSize({ width: 844, height: 390 });
          await surface("rgb(255, 255, 255)", "#fff");
          await page.evaluate(() => window.scrollTo(0, 0));
          await surface("rgb(231, 38, 4)", "#e72604");
        } finally {
          await browser.close();
        }
      });
    }
  });
}
