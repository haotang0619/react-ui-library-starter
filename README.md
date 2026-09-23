# UI Library Starter

## Overview

- ⚛️ [React](https://beta.reactjs.org/) 18
- ⛑ TypeScript
- 📏 ESLint — To find and fix problems in your code
- 💖 Prettier — Code Formatter for consistent style
- 🚓 Commitlint — To make sure your commit messages follow the [convention](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional)
- 🐶 Husky — For running scripts before committing
- 🚫 lint-staged — Run ESLint and Prettier against staged Git files

## Development

To start the project locally, run:

```bash
npm install # only for the first time or for installing new dependencies
npm run start
```

- Check `http://localhost:3000` for Storybook demo.

## Publishing

1. `npm version patch`
2. `npm publish`
3. `npm run build-storybook`
4. Upload `/storybook-static` to some web server.

## Directory Structure

- [`.husky`](.husky) — Husky configuration and hooks.
- [`.storybook`](.storybook) - Folder used by serving Storybook.
- [`src`](src) — React codes.
- [`stories`](stories) — Storybook demo codes.

## Scripts

- `npm run start` — Starts the storybook in development mode.
- `npm run build` — Creates an optimized production build of your components in cjs & esm.
- `npm run build-storybook` — Creates an optimized production build of Storybook into `/storybook-static`.
- `npm run lint` — Runs ESLint for all files in the `src`, `stories` & `.storybook` directory.

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
