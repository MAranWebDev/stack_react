// CSS
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// Libs
import { CssBaseline } from '@mui/material';
import { esES } from '@mui/material/locale';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { SnackbarProvider } from 'notistack';
import { PropsWithChildren } from 'react';

// Theme settings
const theme = createTheme(
  {},
  esES, // Spanish localization
);

export const MuiThemeProvider = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider theme={theme}>
      {/* Normalize css */}
      <CssBaseline />

      {/* notistack: Must be inside theme provider to inherit styles */}
      <SnackbarProvider
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        maxSnack={3}
      >
        {children}
      </SnackbarProvider>
    </ThemeProvider>
  );
};
