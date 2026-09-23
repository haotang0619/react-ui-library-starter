import js from '@eslint/js';
import prettier from 'eslint-config-prettier/flat';
import perfectionist from 'eslint-plugin-perfectionist';
import reactHooks from 'eslint-plugin-react-hooks';
import { defineConfig, globalIgnores } from 'eslint/config';
import tseslint from 'typescript-eslint';

export default defineConfig([
  globalIgnores(['dist/', 'storybook-static/']),
  {
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      perfectionist.configs['recommended-natural'],
    ],
    files: ['**/*.{js,mjs,ts,tsx}'],
    rules: {
      'no-console': 'warn',
      'perfectionist/sort-imports': [
        'error',
        {
          customGroups: [
            { elementNamePattern: '^(react|next)$|^next/', groupName: 'react' },
          ],
          groups: [
            'builtin',
            'react',
            'external',
            'internal',
            'parent',
            'sibling',
          ],
          ignoreCase: true,
          newlinesBetween: 1,
          order: 'asc',
          type: 'alphabetical',
        },
      ],
    },
  },
  prettier,
]);
