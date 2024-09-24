import { MuiThemeProvider } from '@/libs/mui/mui-theme.provider';
import { TrpcProvider } from '@/libs/trpc/trpc.provider';
import { PropsWithChildren } from 'react';

export const AppProvider = ({ children }: PropsWithChildren) => {
  return (
    // Must be placed first to trigger functionality in other providers
    <MuiThemeProvider>
      <TrpcProvider>{children}</TrpcProvider>
    </MuiThemeProvider>
  );
};
