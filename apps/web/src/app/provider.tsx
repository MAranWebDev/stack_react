import { MuiThemeProvider } from '@/libs/mui/mui-theme.provider';
import { NotistackProvider } from '@/libs/notistack/notistack.provider';
import { TrpcProvider } from '@/libs/trpc/trpc.provider';
import { PropsWithChildren } from 'react';

export const AppProvider = ({ children }: PropsWithChildren) => {
  return (
    <TrpcProvider>
      <NotistackProvider>
        <MuiThemeProvider>{children}</MuiThemeProvider>
      </NotistackProvider>
    </TrpcProvider>
  );
};
