import type { ThemeOptions } from '@mui/material/styles';

// TODO: Create a theme for whole app level also can use to override the components
export const getDesignTokens = (mode: 'light' | 'dark') =>
  ({
    palette: {
      mode,
      ...(mode === 'dark' && {
        background: {
          default: '#000e1c',
        },
      }),
    },
  } as ThemeOptions);
