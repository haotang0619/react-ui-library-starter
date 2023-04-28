import type { StorybookConfig } from '@storybook/react-webpack5';
const config: StorybookConfig = {
  stories: [
    '../CHANGELOG.mdx',
    '../stories/**/*.mdx',
    '../stories/**/*.stories.tsx',
  ],
  addons: [
    'storybook-code-panel/register',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
};
export default config;
