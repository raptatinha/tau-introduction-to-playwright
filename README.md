# Introduction to Playwright

Hi 👋🏽!

Welcome to the course "Introduction to Playwright" by [Renata Andrade](https://testingwithrenata.com/) for the [Test Automation University](https://testautomationu.applitools.com/).

## Watching the videos? Read this first

The videos were recorded in 2023. The code in this repository was updated in 2026, so a few things look different. Before each chapter, take a minute to read its update notes:

[Chapter 1](course-updates/chapter1.MD) | [Chapter 2](course-updates/chapter2.MD) | [Chapter 3](course-updates/chapter3.MD) | [Chapter 4](course-updates/chapter4.MD) | [Chapter 5](course-updates/chapter5.MD)

## Which branch should I use?

| Branch | What it has |
|---|---|
| `chapter-1` to `chapter-5` | The code as it is at the **end** of that chapter's videos |
| `main` | The finished course, plus the exercises, extra resources and update notes |

There are two ways to follow the course:

- **Write the code with me (recommended):** create your own project with `npm init playwright@latest`, as in the Chapter 1 video, and type the code as you watch. Use the chapter branches to compare, and to copy files that the video already has ready, such as `tests-examples/demo-todo-app.spec.ts` and the scripts in `package.json`.
- **Run the finished code:** follow the steps below and check out the branch of the chapter you are watching.

## Requirements
- [Git](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org/en/download) v24 (Playwright requires v20 or newer)
- [VS Code](https://code.visualstudio.com/docs/getstarted/getting-started)
- Any terminal. On Windows, we suggest Git Bash, which comes with Git.

The packages used here are Playwright v1.65.1, Applitools Eyes for Playwright v1.53.1 and dotenv v18.0.10. `npm ci` installs these exact versions, so there is no need to update them.

## Fork and clone the project
1. Fork the project following the [GitHub instructions](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo). **Untick "Copy the main branch only"**, otherwise you won't get the chapter branches.
1. Clone your fork, replacing `<your-user>`: `git clone https://github.com/<your-user>/tau-introduction-to-playwright.git`
1. Access the project: `cd tau-introduction-to-playwright`

Clone it into its own folder, not inside another Playwright project.

> **Forked it before this update?** [Sync your fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork) on `main` and on each chapter branch, or make a new fork.

## Install the project
On your terminal, inside the project folder, type:
1. `git checkout chapter-1`
1. `npm ci`
1. `npx playwright install`
1. `npx playwright test --project=chromium` to check that everything works

When you move to another chapter, repeat steps 1 to 3 with that chapter's branch. If Git says you have changes, commit them first.

## What should I expect when running the tests?
- **Some tests fail on purpose.** In `tests-examples/demo-todo-app.spec.ts`, the test "should allow me to add todo items" fails from `chapter-2` on, and "should hide other controls when editing" also fails on `chapter-5` and `main`. You use them in Chapters 2 and 5.
- **Some tests are skipped.** The ones in `template.spec.ts` are only a template, and the Applitools ones wait for your API key.

## Applitools API key (Chapter 4 only)
1. Create a free account at [Applitools](https://auth.applitools.com/users/register) and copy your API key from the user menu. There is nothing to install on your computer.
1. Copy `.env.example` to a new file called `.env`, in the same folder: `cp .env.example .env`
1. In `.env`, type your key right after `APPLITOOLS_API_KEY=`
1. Run `npm run test:visual:acme`

Git ignores the `.env` file. Never share your key or add it to `.env.example`.

## Need help?
Take a look at [Troubleshooting](TROUBLESHOOTING.md) first. It has the answers to the most common questions.

___

💡 Share on LinkedIn something interesting you've learned! Don't forget to tag me [Renata Andrade](https://www.linkedin.com/in/raptatinha/).

💜 If you have questions, feel free to post them on [github](https://github.com/raptatinha/tau-introduction-to-playwright/issues).

Happy Testing 🎭
