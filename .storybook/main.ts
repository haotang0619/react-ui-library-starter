import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  addons: ['@storybook/addon-docs'],
  framework: '@storybook/react-vite',
  stories: [
    '../CHANGELOG.mdx',
    '../stories/**/*.mdx',
    '../stories/**/*.stories.tsx',
  ],
};

export default config;
