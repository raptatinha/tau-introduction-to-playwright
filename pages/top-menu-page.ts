import { expect, Locator, Page } from '@playwright/test';

export class TopMenuPage {
    readonly page: Page;
    readonly getStartedLink: Locator;
    readonly nodeLink: Locator;
    readonly javaLink: Locator;
    readonly nodeLabel: Locator;
    readonly javaLabel: Locator;
    readonly installationHeading: Locator;
    readonly nodeDescription: string = 'Installing Playwright';
    readonly javaDescription: string = `Playwright is distributed as a set of Maven modules. The easiest way to use it is to add one dependency to your project's pom.xml as described below. If you're not familiar with Maven please refer to its documentation.`;

    constructor(page: Page) {
        this.page = page;
        this.getStartedLink = page.getByRole('link', { name: 'Get started' });
        this.nodeLink = page.getByRole('button', {name: 'Node.js'});
        this.javaLink = page.getByRole('navigation', { name: 'Main' }).getByText('Java');
        this.nodeLabel = page.getByText(this.nodeDescription, {exact:true});
        this.javaLabel = page.getByText(this.javaDescription);
        this.installationHeading = page.getByRole('heading', { name: 'Installation', exact: true });
    }

    async assertInstallationVisible() {
        await expect(this.installationHeading).toBeVisible();
        await expect(this.page.locator('#nprogress')).toHaveCount(0); // loading bar at the top of the page
    }

    async hoverNode() {
        // wait for the new page: the URL changes before the content
        await expect(this.installationHeading).toBeVisible();
        await this.nodeLink.hover();
    }
    
    async clickJava() {
        await this.javaLink.click();
    }

    async assertPageUrl(pageUrl: RegExp) {
        await expect(this.page).toHaveURL(pageUrl);
    }

    async assertNodeDescriptionNotVisible() {
        await expect(this.nodeLabel).not.toBeVisible();
    }

    async assertJavaDescriptionVisible() {
        await expect(this.javaLabel).toBeVisible();
    }

}
export default TopMenuPage;