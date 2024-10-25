import { I18nextSSRProvider } from '@/libs/i18next/i18next-ssr.provider';
import { MuiThemeProvider } from '@/libs/mui/mui-theme.provider';
import { TrpcProvider } from '@/libs/trpc/trpc.provider';
import { PropsWithChildren } from 'react';

export const AppProvider = ({ children }: PropsWithChildren) => {
  return (
    <MuiThemeProvider>
      <I18nextSSRProvider>
        {/* "trpc" uses "mui-notistack" and "react-i18next" */}
        <TrpcProvider>{children}</TrpcProvider>
      </I18nextSSRProvider>
    </MuiThemeProvider>
  );
};
