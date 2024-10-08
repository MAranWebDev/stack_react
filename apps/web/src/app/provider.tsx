import { I18nextSSRProvider } from '@/libs/i18next/i18next-ssr.provider';
import { MuiThemeProvider } from '@/libs/mui/mui-theme.provider';
import { TrpcProvider } from '@/libs/trpc/trpc.provider';
import { PropsWithChildren } from 'react';

export const AppProvider = ({ children }: PropsWithChildren) => {
  return (
    // "mui" must be first to trigger functionalities in other providers
    <MuiThemeProvider>
      <TrpcProvider>
        <I18nextSSRProvider>{children}</I18nextSSRProvider>
      </TrpcProvider>
    </MuiThemeProvider>
  );
};
