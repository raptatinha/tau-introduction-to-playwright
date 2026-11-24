# Chapter 3 - What changed since the video

The video was recorded in 2023. Last reviewed: November 2026.

- **3.1 - template:** `afterAll` no longer receives `page`. Playwright does not support `page` in `beforeAll` or `afterAll`.
- **3.2 - Java test:** `hoverNode()` now waits for the page to load, and the test checks the Java URL (`javaPageUrl`). The old pattern also matched the Node.js page.
- **Resources:** `.type()` is deprecated. Use `.fill()`, or `.pressSequentially()` to type key by key.

Found something else? [Open an issue](https://github.com/raptatinha/tau-introduction-to-playwright/issues).

Happy Testing 🎭!
