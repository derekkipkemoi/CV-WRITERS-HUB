import { createTheme as muiCreateTheme, PaletteMode } from '@mui/material/styles';
import { colorSchemes } from './color-schemes';
import { components } from './components/components';
import { shadows } from './shadows';
import { typography } from './typography';
import type { Theme } from './types';

declare module '@mui/material/styles/createPalette' {
  interface PaletteRange {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
    950: string;
  }

  interface Palette {
    neutral: PaletteRange;
  }

  interface PaletteOptions {
    neutral?: PaletteRange;
  }

  interface TypeBackground {
    level1: string;
    level2: string;
    level3: string;
  }
}

// Custom theme creation function
export function customCreateTheme(mode: PaletteMode): Theme {
  const colorScheme = colorSchemes[mode];

  const theme = muiCreateTheme({
    breakpoints: { values: { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1440 } },
    components,
    palette: {
      mode,
      ...colorScheme.palette,
    },
    shadows,
    shape: { borderRadius: 8 },
    typography,
  });

  return theme as Theme;
}
