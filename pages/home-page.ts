import { expect, type Locator, type Page } from "@playwright/test";

export class HomePage{
    readonly page:Page;
    readonly getStartedButton: Locator;
    readonly title: RegExp;

    constructor (page:Page){
        this.page = page;
        this.getStartedButton = page.getByRole('link', { name: 'Get started' });
        this.title = /Playwright/;
    }

    async clickGetStarted() {
        await this.getStartedButton.click();
    }

    async assertPageTitle() {
        await expect(this.page).toHaveTitle(this.title);
    }
}

export default HomePage;