// Direct imports
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// Libs
import { useDarkModeStore } from '@/libs/zustand/stores';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { SnackbarProvider } from 'notistack';
import { PropsWithChildren } from 'react';
import { useI18nMuiLocale } from './hooks';

export const MuiThemeProvider = ({ children }: PropsWithChildren) => {
  const { muiLocale } = useI18nMuiLocale();

  // "zustand"
  const isDarkMode = useDarkModeStore((state) => state.isDarkMode);

  const mode = isDarkMode ? 'dark' : 'light';

  // Theme settings
  const theme = createTheme(
    {
      palette: { mode },
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
