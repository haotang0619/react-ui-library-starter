# UI Library Starter

## Overview

- ⚛️ [React](https://beta.reactjs.org/) 18
- ⛑ TypeScript
- 📏 ESLint — To find and fix problems in your code
- 💖 Prettier — Code Formatter for consistent style
- 🚓 Commitlint — To make sure your commit messages follow the [convention](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional)
- 🐶 Husky — For running scripts before committing
- 🚫 lint-staged — Run ESLint and Prettier against staged Git files

## Prerequisite

Install `pnpm`

```bash
brew install pnpm # macOS
```

## Development

To start the project locally, run:

```bash
pnpm install # only for the first time or for installing new dependencies
pnpm start
```

- Check `http://localhost:3000` for Storybook demo.

## Publishing

1. `pnpm version patch`
2. `pnpm publish`
3. `pnpm build-storybook`
4. Upload `/storybook-static` to some web server.

## Directory Structure

- [`.husky`](.husky) — Husky configuration and hooks.
- [`.storybook`](.storybook) - Folder used by serving Storybook.
- [`src`](src) — React codes.
- [`stories`](stories) — Storybook demo codes.

## Scripts

- `pnpm start` — Starts the storybook in development mode.
- `pnpm build` — Creates an optimized production build of your components in cjs & esm.
- `pnpm build-storybook` — Creates an optimized production build of Storybook into `/storybook-static`.
- `pnpm lint` — Runs ESLint for all files in the `src`, `stories` & `.storybook` directory.

## Conventional Commits

- `feat` - A new feature
- `fix` - A bug fix
- `docs` - Documentation only changes
- `style` - Changes to UIUX or changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- `refactor` - A code change that neither fixes a bug nor adds a feature
- `perf` - A code change that improves performance
- `test` - Adding missing tests or correcting existing tests
- `build` — Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- `ci` - Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
- `chore` - Other changes that don't modify src or test files
- `revert` - Reverts a previous commit
