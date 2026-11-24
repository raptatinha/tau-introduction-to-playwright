# Chapter 4 - What changed since the video

The video was recorded in 2023. Last reviewed: November 2026.

- **API key:** copy `.env.example` to `.env` and fill in `APPLITOOLS_API_KEY` before running. Without it the Applitools tests are skipped.
- **Line added:** `test.skip(!process.env.APPLITOOLS_API_KEY, ...)` is not in the video.
- **Get started test:** `assertInstallationVisible()` is not in the video. It waits for the new page, so the screenshot does not show the previous one.
- **Dashboard:** the Applitools website and Eyes Test Manager may look different from the video.

## New in Applitools (optional)

The video uses what Applitools now calls the [standard SDK](https://applitools.com/docs/eyes/sdks/playwright-ts-standard/quickstart). It is still documented, so you can follow the video as it is. When you finish the chapter, take a look at:

- **[Fixture](https://applitools.com/docs/eyes/playwright):** import `test` from `@applitools/eyes-playwright/fixture` and call `eyes.check()` without writing `eyes.open()` and `eyes.close()`. The [settings](https://applitools.com/docs/eyes/playwright/api/overview) go in `playwright.config.ts`.
- **Setup command:** `npx eyes-setup` configures a project for you. It changes your files, so try it in a separate project.
- **Report:** the Applitools reporter shows the visual results inside the Playwright HTML report.
- **Playwright screenshots:** import `expect` from the fixture to run `toHaveScreenshot()` with Applitools.
- **Match levels:** the docs now list *Dynamic* as the default. It accepts text that changes, such as dates and numbers.
- **[MCP server](https://applitools.com/docs/eyes/integrations/mcp-servers/applitools-mcp):** helps AI assistants add visual tests (fixture only).

Found something else? [Open an issue](https://github.com/raptatinha/tau-introduction-to-playwright/issues).

Happy Testing 🎭!
