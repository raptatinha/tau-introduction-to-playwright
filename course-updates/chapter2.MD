# Chapter 2 - What changed since the video

The video was recorded in 2023. Last reviewed: November 2026.

- **2.1 - dotenv:** a new project has `import dotenv from 'dotenv'` lines instead of `require('dotenv').config()`. Both work. The repository adds `{ quiet: true }` to hide a log message.
- **2.1 - timeouts:** `timeout` and `expect` go outside the `use` block (the video corrects this too).
- **2.2 - todo file:** it is in the `tests-examples` folder of the [chapter-2 branch](https://github.com/raptatinha/tau-introduction-to-playwright/tree/chapter-2/tests-examples); the installer no longer creates it.
- **2.2 - Windows:** `CI=1 npx ...` needs Git Bash, or the [cross-env](https://www.npmjs.com/package/cross-env) package.
- **2.2 - tags:** `@smoke` in the title still works. You can also use [`{ tag: '@smoke' }`](https://playwright.dev/docs/test-annotations#tag-tests).
- **2.3 - Java test:** add `await expect(page.getByRole('heading', { name: 'Installation', exact: true })).toBeVisible();` before the hover. On the website the URL changes before the new page shows up, so without this line the test can click the old Java link, or find 3 of them. The locator from the video works after this line.

Found something else? [Open an issue](https://github.com/raptatinha/tau-introduction-to-playwright/issues).

Happy Testing 🎭!
