import { test, expect } from '@playwright/test';

test('homepage has title and hero', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Personal Website|CV|Resume|Thinh Gia Ha/i);
  await expect(page.locator('text=About')).toBeVisible();
});
