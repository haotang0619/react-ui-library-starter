# UI Library Starter

A starter for building a React UI library that can be published to npm or used privately.

## Overview

- ⚛️ [React](https://react.dev/) — Supports React 18 and 19 (peer dependency)
- ⛑ TypeScript — Strict mode
- 📦 [tsdown](https://tsdown.dev/) — Builds ESM + CJS with type declarations
- 🎨 CSS Modules — Bundled into a single `style.css`
- 📚 Storybook — Component docs and demo, built with Vite
- 🧪 Vitest + Testing Library — Component tests in jsdom
- 📏 ESLint — To find and fix problems in your code
- 💖 Prettier — Code Formatter for consistent style
- 🚓 Commitlint — To make sure your commit messages follow the [convention](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional)
- 🐶 Husky — For running scripts before committing
- 🚫 lint-staged — Run ESLint and Prettier against staged Git files
- 🤖 GitHub Actions — Runs lint, type check, tests and builds on push and pull requests

## Prerequisite

Node.js 22 or later is required for development.

## Starting a New Library

1. Update `name`, `description`, `author` and `license` in `package.json`.
2. Reset `version` in `package.json` and the entries in `CHANGELOG.mdx`.
3. Replace the example `Test` component, its test and its story with your own components.

## Development

To start the project locally, run:

```bash
npm install # only for the first time or for installing new dependencies
npm run start
```

- Check `http://localhost:3000` for Storybook demo.

### Adding a Component

1. Create the component in `src/components`, e.g. `Button.tsx`, with styles in `Button.module.css`.
2. Export it from `src/components/index.ts`.
3. Add a test next to it, e.g. `Button.test.tsx`.
4. Add a story in `stories`, e.g. `Button.stories.tsx`.

Add `'use client';` at the top of a component file if it uses hooks, state or browser APIs, so it works in React Server Components (e.g. Next.js App Router). The build keeps this directive per file.

## Usage

```tsx
import { Test } from 'react-ui-library-starter';
import 'react-ui-library-starter/style.css';
```

Consumers import `style.css` once, e.g. in the app entry.

## Publishing

1. `npm version patch`
2. `npm publish` — Runs lint, type check, tests and build first.
3. `npm run build-storybook`
4. Upload `/storybook-static` to some web server.

## Directory Structure

- [`.github`](.github) — GitHub Actions workflows.
- [`.husky`](.husky) — Husky hooks.
- [`.storybook`](.storybook) — Storybook configuration.
- [`src`](src) — Library source code and tests.
- [`stories`](stories) — Storybook stories and docs pages.

## Scripts

- `npm run start` — Starts Storybook in development mode.
- `npm run build` — Builds the library into `/dist` in ESM and CJS with type declarations and `style.css`.
- `npm run build-storybook` — Creates an optimized production build of Storybook into `/storybook-static`.
- `npm run lint` — Runs ESLint and checks formatting with Prettier.
- `npm run format` — Formats all files with Prettier.
- `npm run typecheck` — Type checks the whole project.
- `npm run test` — Runs tests once.
- `npm run test:watch` — Runs tests in watch mode.

## Conventional Commits

- `feat` - A new feature
- `fix` - A bug fix
- `docs` - Documentation only changes
- `style` - Changes to UIUX or changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- `refactor` - A code change that neither fixes a bug nor adds a feature
- `perf` - A code change that improves performance
- `test` - Adding missing tests or correcting existing tests
- `build` — Changes that affect the build system or external dependencies (example scopes: tsdown, npm)
- `ci` - Changes to our CI configuration files and scripts (example scopes: GitHub Actions)
- `chore` - Other changes that don't modify src or test files
- `revert` - Reverts a previous commit
