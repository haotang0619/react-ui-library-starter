import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  addons: ['@storybook/addon-docs'],
  framework: '@storybook/react-vite',
  stories: [
    '../stories/**/*.mdx',
    '../CHANGELOG.mdx',
    '../stories/**/*.stories.tsx',
  ],
};

export default config;
