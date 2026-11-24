# Chapter 1 - What changed since the video

The video was recorded in 2023. Last reviewed: November 2026.

- **Installer:** `npm init playwright@latest` no longer creates `tests-examples/demo-todo-app.spec.ts`. Get it from the [chapter-1 branch](https://github.com/raptatinha/tau-introduction-to-playwright/blob/chapter-1/tests-examples/demo-todo-app.spec.ts).
- **Versions:** the video installs the latest Playwright. This repository uses fixed versions; run `npm ci` and then `npx playwright install`.
- **Website and extension:** the Playwright website, installer questions and VS Code extension may look different from the video.
- **Running the todo file:** the config has `testDir: './tests'`, so tests in `tests-examples` are not found. Comment out `testDir` to run them, as Chapter 2 does.

Found something else? [Open an issue](https://github.com/raptatinha/tau-introduction-to-playwright/issues).

Happy Testing 🎭!
