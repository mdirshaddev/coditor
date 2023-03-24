'use client';

import {
  experimental_extendTheme as extendTheme,
  Experimental_CssVarsProvider as CssVarsProvider,
} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { getDesignTokens } from './getDesignTokens';
import { ColorSchemeScript } from './ColorSchemeScript';

const { palette: darkPalette } = getDesignTokens('dark');
const { palette: lightPalette } = getDesignTokens('light');

export const theme = extendTheme({
  cssVarPrefix: 'me',
  colorSchemes: {
    light: {
      palette: lightPalette,
    },
    dark: {
      palette: darkPalette,
    },
  },
  components: {
    MuiCssBaseline: {
      defaultProps: {
        enableColorScheme: true,
      },
    },
  },
});

export function BrandingCssVarsProvider(props: React.PropsWithChildren) {
  const { children } = props;
  return (
    <CssVarsProvider
      theme={theme}
      defaultMode="system"
      disableTransitionOnChange
    >
      {children}
      <CssBaseline />
      <ColorSchemeScript />
    </CssVarsProvider>
  );
}
