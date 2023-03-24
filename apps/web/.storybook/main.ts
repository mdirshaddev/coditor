import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  staticDirs: ['../public'],
  stories: ['../docs/**/*.mdx', '../src/**/*.stories.@(ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-styling'
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {}
  }
};

export default config;
