import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { PropsWithChildren } from 'react';

// Theme settings
const theme = createTheme({});

export const MuiThemeProvider = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider theme={theme}>
      {/* Normalize css */}
      <CssBaseline />
      {/* The rest of your application */}
      {children}
    </ThemeProvider>
  );
};
