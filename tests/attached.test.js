import { test } from "@playwright/test";
import { allure } from "allure-playwright";

page = "www.google.com";

test("Test with attachments", async ({ page }) => {
  // ...
  await allure.attachment("search-results.png", await page.screenshot(), {
    contentType: "image/png",
  });
});