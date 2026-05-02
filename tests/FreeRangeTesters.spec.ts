import { test, Browser, Page, expect } from '@playwright/test';

(async () => {
  let browser: Browser;
  let page: Page;

  test.describe('Navegación en www.freerangetesters.com', () => {
    test("Validar título de la página Free Range Testers", async ({ page }) => {
        await test.step("Estando yo en la web principal www.freerangetesters.com", async () => {
        await page.goto('https://www.freerangetesters.com');
        await expect(page).toHaveTitle('Free Range Testers');
        });
    });
  })
})();