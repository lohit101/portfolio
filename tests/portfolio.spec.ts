import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("hero reveals its message, transitions to white, and reverses", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/");
  await expect(
    page.getByRole("heading", { name: "Lohit", exact: true }),
  ).toBeAttached();
  await expect(page.locator(".hero-continuation")).toHaveCSS(
    "visibility",
    "hidden",
  );
  await page.evaluate(() => window.scrollTo(0, 500));
  await expect(page.locator(".hero-continuation")).toHaveCSS("opacity", "1");
  await page.evaluate(() => window.scrollTo(0, 1200));
  await expect(page.locator(".hero-ink")).toHaveCSS("opacity", "0");
  await page.evaluate(() => window.scrollTo(0, 0));
  await expect(page.locator(".hero-ink")).toHaveCSS("opacity", "1");
  expect(errors).toEqual([]);
});

test("quick view supports interaction, Escape, and focus restoration", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  const opener = page.getByRole("button", {
    name: "Small switch. Big feeling.",
  });
  await opener.click();
  const dialog = page.getByRole("dialog");
  await expect(dialog).toBeVisible();
  const toggle = dialog.getByRole("switch");
  await toggle.click();
  await expect(toggle).toBeChecked();
  await page.keyboard.press("Escape");
  await expect(dialog).not.toBeVisible();
  await expect(opener).toBeFocused();
});

test("responsive reduced-motion page has no accessibility violations or overflow", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  for (const width of [390, 768, 1440, 2560]) {
    await page.setViewportSize({ width, height: 900 });
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth > innerWidth,
      ),
    ).toBe(false);
  }
  expect(
    (
      await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
        .analyze()
    ).violations,
  ).toEqual([]);
});

test("full introduction remains within the hero without JavaScript", async ({
  browser,
}) => {
  const context = await browser.newContext({
    javaScriptEnabled: false,
    viewport: { width: 390, height: 844 },
  });
  const page = await context.newPage();
  await page.goto("http://localhost:3001");
  const hero = await page.locator(".hero").boundingBox();
  const continuation = await page.locator(".hero-continuation").boundingBox();
  expect(continuation!.y + continuation!.height).toBeLessThanOrEqual(
    hero!.y + hero!.height,
  );
  await context.close();
});

test("quick view opens after animated navigation and scrolling", async ({
  page,
}) => {
  await page.goto("/");
  await page.evaluate(() => window.scrollTo(0, 1950));
  await expect
    .poll(() =>
      page
        .locator(".floating-navigation")
        .evaluate((el) => Math.round(el.getBoundingClientRect().top)),
    )
    .toBe(0);
  await page.evaluate(() => window.scrollTo(0, 1800));
  await expect(
    page.locator(".floating-navigation .navigation"),
  ).toBeInViewport();
  await page.getByRole("link", { name: "Fragments", exact: true }).click();
  await expect
    .poll(() =>
      page
        .locator("#fragments")
        .evaluate((el) => Math.abs(el.getBoundingClientRect().top - 111)),
    )
    .toBeLessThan(2);
  await page.evaluate(() =>
    window.scrollTo(
      0,
      document.querySelector(".fragment-2")!.getBoundingClientRect().top +
        scrollY -
        150,
    ),
  );
  await expect
    .poll(() =>
      page
        .locator(".fragment-2")
        .evaluate((el) => Math.round(el.getBoundingClientRect().top)),
    )
    .toBeGreaterThan(80);
  const opener = page.getByRole("button", {
    name: "Small switch. Big feeling.",
  });
  await opener.click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await page.getByRole("dialog").getByRole("switch").click();
  await expect(page.getByRole("dialog").getByRole("switch")).toBeChecked();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog")).not.toBeVisible();
  await expect(opener).toBeFocused();
});

test("entrance hands directly to visible content and a fixed navbar", async ({
  page,
}) => {
  await page.goto("/");
  await page.evaluate(() => window.scrollTo(0, 1125));
  await expect(page.locator(".portfolio-body")).toHaveCSS("opacity", "1");
  await expect(page.locator(".hero")).toHaveCSS("visibility", "hidden");
  await expect(page.locator(".work-section h2")).toBeInViewport();
  await expect(page.locator(".floating-navigation")).toHaveCSS("opacity", "1");
  for (const y of [1400, 2800]) {
    await page.evaluate((y) => window.scrollTo(0, y), y);
    await expect
      .poll(() =>
        page
          .locator(".floating-navigation")
          .evaluate((el) => el.getBoundingClientRect().top),
      )
      .toBe(0);
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await expect(page.locator(".floating-navigation")).toHaveCSS(
    "visibility",
    "hidden",
  );
  await expect(page.locator(".hero")).toHaveCSS("opacity", "1");
});

test("transparent navbar hides downward and returns upward", async ({
  page,
}) => {
  await page.goto("/");
  const shell = page.locator(".floating-navigation");
  const nav = shell.locator(".navigation");
  await expect(shell).toHaveCSS("mix-blend-mode", "difference");
  await expect(shell).toHaveCSS("background-color", "rgba(0, 0, 0, 0)");
  await page.evaluate(() => window.scrollTo(0, 1750));
  await expect
    .poll(() => nav.evaluate((el) => el.getBoundingClientRect().bottom))
    .toBeLessThan(0);
  await page.evaluate(() => window.scrollTo(0, 1630));
  await expect
    .poll(() =>
      nav.evaluate((el) => Math.round(el.getBoundingClientRect().top)),
    )
    .toBe(0);
  await page.evaluate(() => window.scrollTo(0, 2100));
  await expect
    .poll(() => nav.evaluate((el) => el.getBoundingClientRect().bottom))
    .toBeLessThan(0);
  await nav.getByRole("link", { name: "Work", exact: true }).focus();
  await expect
    .poll(() =>
      nav.evaluate((el) => Math.round(el.getBoundingClientRect().top)),
    )
    .toBe(0);
});

test("mobile reduced-motion navbar toggles without a slide", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  const nav = page.locator(".portfolio-body > .navigation");
  await page.evaluate(() => window.scrollTo(0, 2200));
  await expect
    .poll(() => nav.evaluate((el) => el.getBoundingClientRect().bottom))
    .toBeLessThan(0);
  await page.evaluate(() => window.scrollTo(0, 2050));
  await expect
    .poll(() => nav.evaluate((el) => el.getBoundingClientRect().top))
    .toBe(0);
});
