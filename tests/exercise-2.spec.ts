import { test, expect} from '@playwright/test';

test.describe("Checking the Playwright Docs Page", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://playwright.dev/');
    });
    test('check installation page', async ({ page }) => {
        await page.getByRole('link', { name: 'Docs' }).click();
        await expect(page).toHaveTitle(/Installation/);
    });
    test('check mouse click',async ({page}) => {
        await page.getByRole('link', { name: 'Docs' }).click();
        await page.getByRole('button', { name: 'Search' }).click();
        await page.getByPlaceholder('Search docs').fill('click');
        await page.getByRole('link', { name: 'Mouse click​ Actions' }).click();
        await expect(page).toHaveURL('https://playwright.dev/docs/input#mouse-click');
    });
});

