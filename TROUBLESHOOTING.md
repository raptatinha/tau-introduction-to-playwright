# Troubleshooting

If your question isn't here, [open an issue](https://github.com/raptatinha/tau-introduction-to-playwright/issues/new/choose) with the command you ran, the full error, your operating system and your Node version (`node -v`).

## Setup

### I only see the `main` branch
Your fork was created with "Copy the main branch only" ticked. Make a new fork without it, or get the branches from this repository:

```bash
git remote add upstream https://github.com/raptatinha/tau-introduction-to-playwright.git
git fetch upstream
git checkout -b chapter-1 upstream/chapter-1
```

Repeat the last line for the other chapters.

### The code of the video is already there
You are on `main`, which has the finished code, or on the branch of that chapter, which has the code as it is at the end. To write it yourself, see "Which branch should I use?" in the [README](README.md).

### I don't have `demo-todo-app.spec.ts`, or the scripts in `package.json`
`npm init playwright@latest` doesn't create them. Copy them from the [chapter-2 branch](https://github.com/raptatinha/tau-introduction-to-playwright/tree/chapter-2).

### My `playwright.config.ts` is different from the video
A new project gets a newer version of this file. The differences you need are in the [Chapter 2 notes](course-updates/chapter2.MD), and you can compare yours with the [chapter-2 file](https://github.com/raptatinha/tau-introduction-to-playwright/blob/chapter-2/playwright.config.ts).

### PowerShell says that running scripts is disabled on this system
Use another terminal. In VS Code, open the menu next to **+** in the Terminal panel and choose Git Bash or Command Prompt.

### `npm audit` shows vulnerabilities, or asks to overwrite files
It doesn't stop you from taking the course. Use `npm ci` and don't run `npm audit fix --force`: it can install versions that don't match the course.

## Running tests

### `Playwright Test did not expect test.beforeEach() (or beforeAll) to be called here`
This usually means that two versions of Playwright are installed. Check them with `npm ls @playwright/test playwright`. Then:

1. Make sure the project isn't inside another Playwright project.
1. Delete the `node_modules` folder.
1. Run `npm ci` and `npx playwright install`.
1. Run the tests with `npx playwright test` or the scripts in `package.json`.

### `No tests found`
Check `testDir` in `playwright.config.ts`. With `testDir: './tests'`, Playwright only looks inside that folder. To run tests from other folders, comment that line out, as in Chapter 2.1, and choose the folder in the command: `npx playwright test tests-examples/`.

### `Executable doesn't exist`
Run `npx playwright install`.

### Tests fail in `demo-todo-app.spec.ts`
Two of them fail on purpose. See the [README](README.md).

### The Java test fails or is flaky
See 2.3 in the [Chapter 2 notes](course-updates/chapter2.MD).

### The search exercise (Chapter 3) doesn't find results
The search belongs to the Playwright website and needs a moment to load. Wait for a result before using the arrow keys:

```ts
await page.getByRole('button', { name: 'Search' }).click();
await page.getByPlaceholder('Search docs').fill('locators');
await expect(page.locator('.DocSearch-Hit').first()).toBeVisible();
await page.keyboard.press('ArrowDown');
await page.keyboard.press('Enter');
```

### A test passes headed and fails headless
Open the trace to see the page at that moment: `npx playwright test --trace on`, then `npx playwright show-report`. Common causes are the window size and acting before the page is ready.

### `Argument of type 'String' is not assignable to parameter of type 'string | RegExp'`
Use `string` with a lowercase `s`: `readonly nodeDescription: string`.

### `CI=1` is not recognized (Windows)
Use Git Bash. See 2.2 in the [Chapter 2 notes](course-updates/chapter2.MD).

## Applitools

### The Applitools tests are skipped
They need your API key. Follow "Applitools API key" in the [README](README.md).

### `write EPIPE` or `bad record mac`
The connection broke while uploading. Try again, or try another network.

### The test times out
Uploads can be slow. Give it more time: `npm run test:visual:acme -- --timeout=240000`.

### Differences appear although nothing changed
Open the result in the Applitools dashboard. If the new image is the right one, accept it and save. If your baseline was created from a bad run, accept a good image to replace it.

## Course website

### I completed the course, but it shows 0%
Your progress is kept by [Test Automation University](https://testautomationu.applitools.com/), not by this repository. Please contact them.
