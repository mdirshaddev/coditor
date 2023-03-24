import '../src/app/globals.css';

import { themes } from '@storybook/theming';
import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import { CssBaseline } from '@mui/material';
import { BrandingCssVarsProvider } from '../src/modules/theme';

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

export const decorators = [
  withThemeFromJSXProvider({
    Provider: BrandingCssVarsProvider,
    GlobalStyles: CssBaseline
  })
];
