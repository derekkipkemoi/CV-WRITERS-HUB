import type { ColorSystemOptions } from '@mui/material/styles';
import { california, kepple, neonBlue, nevada, redOrange, shakespeare, stormGrey } from './colors';
import type { ColorScheme } from './types';

export const colorSchemes = {
  dark: {
    palette: {
      action: { disabledBackground: 'rgba(0, 0, 0, 0.12)' },
      // background: {
      //   default: 'var(--mui-palette-neutral-950)',
      //   paper: 'var(--mui-palette-neutral-900)',
      //   level1: 'var(--mui-palette-neutral-800)',
      //   level2: 'var(--mui-palette-neutral-700)',
      //   level3: 'var(--mui-palette-neutral-600)',
      // },
      common: { black: '#000000', white: '#ffffff' },
      // divider: 'var(--mui-palette-neutral-700)',
      error: {
        ...redOrange,
        light: redOrange[300],
        main: redOrange[400],
        dark: redOrange[500],
        // contrastText: 'var(--mui-palette-common-black)',
      },
      info: {
        ...shakespeare,
        light: shakespeare[300],
        main: shakespeare[400],
        dark: shakespeare[500],
        // contrastText: 'var(--mui-palette-common-black)',
      },
      neutral: { ...nevada },
      primary: {
        ...neonBlue,
        light: neonBlue[300],
        main: neonBlue[400],
        dark: neonBlue[500],
        // contrastText: 'var(--mui-palette-common-black)',
      },
      secondary: {
        ...nevada,
        light: nevada[100],
        main: nevada[200],
        dark: nevada[300],
        // contrastText: 'var(--mui-palette-common-black)',
      },
      success: {
        ...kepple,
        light: kepple[300],
        main: kepple[400],
        dark: kepple[500],
        // contrastText: 'var(--mui-palette-common-black)',
      },
      // text: {
      //   primary: 'var(--mui-palette-neutral-100)',
      //   secondary: 'var(--mui-palette-neutral-400)',
      //   disabled: 'var(--mui-palette-neutral-600)',
      // },
      warning: {
        ...california,
        light: california[300],
        main: california[400],
        dark: california[500],
        // contrastText: 'var(--mui-palette-common-black)',
      },
    },
  },
  light: {
    palette: {
      action: { disabledBackground: 'rgba(0, 0, 0, 0.06)' },
      // background: {
      //   default: 'var(--mui-palette-common-white)',
      //   paper: 'var(--mui-palette-common-white)',
      //   level1: 'var(--mui-palette-neutral-50)',
      //   level2: 'var(--mui-palette-neutral-100)',
      //   level3: 'var(--mui-palette-neutral-200)',
      // },
      common: { black: '#000000', white: '#ffffff' },
      // divider: 'var(--mui-palette-neutral-200)',
      error: {
        ...redOrange,
        light: redOrange[400],
        main: redOrange[500],
        dark: redOrange[600],
        // contrastText: 'var(--mui-palette-common-white)',
      },
      info: {
        ...shakespeare,
        light: shakespeare[400],
        main: shakespeare[500],
        dark: shakespeare[600],
        // contrastText: 'var(--mui-palette-common-white)',
      },
      neutral: { ...stormGrey },
      primary: {
        ...neonBlue,
        light: neonBlue[400],
        main: neonBlue[500],
        dark: neonBlue[600],
        // contrastText: 'var(--mui-palette-common-white)',
      },
      secondary: {
        ...nevada,
        light: nevada[600],
        main: nevada[700],
        dark: nevada[800],
        // contrastText: 'var(--mui-palette-common-white)',
      },
      success: {
        ...kepple,
        light: kepple[400],
        main: kepple[500],
        dark: kepple[600],
        // contrastText: 'var(--mui-palette-common-white)',
      },
      // text: {
      //   primary: 'var(--mui-palette-neutral-900)',
      //   secondary: 'var(--mui-palette-neutral-500)',
      //   disabled: 'var(--mui-palette-neutral-400)',
      // },
      warning: {
        ...california,
        light: california[400],
        main: california[500],
        dark: california[600],
        // contrastText: 'var(--mui-palette-common-white)',
      },
    },
  },
} satisfies Partial<Record<ColorScheme, ColorSystemOptions>>;
