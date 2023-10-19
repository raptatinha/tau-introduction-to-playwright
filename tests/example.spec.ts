import { test, expect } from '@playwright/test';

test.describe('Example Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://playwright.dev/');
  });

  test('has title', async ({ page }) => {
    await expect(page).toHaveTitle(/Playwright/);
  });

  test('get started link', async ({ page }) => {
    await page.getByRole('link', { name: 'Get started' }).click();
    await expect(page).toHaveURL(/.*intro/);
  });

  test.only('check Java page', async ({ page }) => {
    await page.getByRole('link', { name: 'Get started' }).click();
    await page.getByRole('button', { name: 'Node.js' }).hover();
    await page.getByLabel('Main', { exact: true }).getByText('Java').click();
    await expect(page).toHaveURL(/.*java/);
    await expect(
      page.getByText('Installing Playwright', { exact: true })
    ).not.toBeVisible();
    await expect(
      page.getByText('Playwright is distributed as a set of')
    ).toBeVisible();
  });
});
