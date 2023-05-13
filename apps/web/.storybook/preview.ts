import '../src/app/globals.css';

import { themes } from '@storybook/theming';

export const parameters = {
  docs: {
    theme: themes.dark
  },
  backgrounds: {
    default: 'dark'
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  nextjs: {
    appDirectory: true
  },
  options: {
    storySort: {
      order: ['About', '*']
    }
  }
};
