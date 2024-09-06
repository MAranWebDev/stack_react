import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { MuiThemeProvider } from './config/MuiThemeProvider';
import { ReactRouter } from './config/ReactRouter';
import { TrpcProvider } from './config/TrpcProvider';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TrpcProvider>
      <MuiThemeProvider>
        <ReactRouter />
      </MuiThemeProvider>
    </TrpcProvider>
  </StrictMode>,
);
