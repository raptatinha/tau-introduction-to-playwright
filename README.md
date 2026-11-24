# Introduction to Playwright

Hi 👋🏽!

Welcome to the course "Introduction to Playwright" by [Renata Andrade](https://testingwithrenata.com/) for the [Test Automation University](https://testautomationu.applitools.com/).

## Watching the videos? Read this first

The videos were recorded in 2023. The code in this repository was updated in 2026, so a few things look different. Before each chapter, take a minute to read its update notes:

[Chapter 1](course-updates/chapter1.MD) | [Chapter 2](course-updates/chapter2.MD) | [Chapter 3](course-updates/chapter3.MD) | [Chapter 4](course-updates/chapter4.MD) | [Chapter 5](course-updates/chapter5.MD)

## Dependencies
- Playwright v1.65.1
- Applitools Eyes for Playwright v1.53.1
- dotenv v18.0.10
- Node v24 (Playwright requires v20 or newer)

> Pre requirements:
- [Node setup](https://nodejs.org/en/download)
- [VS Code setup](https://code.visualstudio.com/docs/getstarted/getting-started)

## Fork and clone the project
1. Fork the project following the [GitHub instructions](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo). **Untick "Copy the main branch only"**, otherwise you won't get the chapter branches;
1. Clone your fork: `git clone https://github.com/<your-user>/tau-introduction-to-playwright.git`;
1. Access the project `cd tau-introduction-to-playwright`

## Install the project
On your terminal, type:
1. `git checkout chapter-1` (use the branch of the chapter you are watching; `main` has the finished code)
1. `npm ci`
1. `npx playwright install`

Run steps 2 and 3 again each time you change branches.

The Applitools tests (Chapter 4) need an API key and are skipped until you add one: copy [.env.example](.env.example) to a new file called `.env` and fill in `APPLITOOLS_API_KEY`.

> Some tests in `tests-examples/demo-todo-app.spec.ts` fail on purpose. They are used in Chapters 2 and 5.

___

💡 Share on LinkedIn something interesting you've learned! Don't forget to tag me [Renata Andrade](https://www.linkedin.com/in/raptatinha/).

💜 If you have questions, feel free to post them on [github](https://github.com/raptatinha/tau-introduction-to-playwright/issues).

Happy Testing 🎭
