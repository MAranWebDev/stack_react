// Direct imports
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// Libs
import { useThemeModeStore } from '@/libs/zustand/stores';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { SnackbarProvider } from 'notistack';
import { PropsWithChildren } from 'react';
import { THEME_MODES } from './constants';
import { useI18nMuiLocale } from './hooks';

export const MuiThemeProvider = ({ children }: PropsWithChildren) => {
  const { muiLocale } = useI18nMuiLocale();

  // "zustand"
  const isDarkMode = useThemeModeStore((state) => state.isDarkMode);

  const mode = isDarkMode ? THEME_MODES.DARK : THEME_MODES.LIGHT;

  // Theme settings
  const theme = createTheme(
    {
      palette: { mode },
      components: {
        MuiButton: {
          styleOverrides: { root: { textTransform: 'none' } },
        },
        MuiToggleButton: {
          styleOverrides: { root: { textTransform: 'none' } },
        },
      },
    },
    muiLocale,
  );

  return (
    <ThemeProvider theme={theme}>
      {/* Normalize css */}
      <CssBaseline />

      {/* "notistack": must be inside theme provider to inherit styles */}
      <SnackbarProvider maxSnack={1} preventDuplicate={true}>
        {children}
      </SnackbarProvider>
    </ThemeProvider>
  );
};
