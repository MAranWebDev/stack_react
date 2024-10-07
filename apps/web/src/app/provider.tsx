import { CenteredSpinner } from '@/components/ui/spinner';
import { I18nextSSRProvider } from '@/libs/i18next/i18next-ssr.provider';
import { MuiThemeProvider } from '@/libs/mui/mui-theme.provider';
import { TrpcProvider } from '@/libs/trpc/trpc.provider';
import { PropsWithChildren, Suspense } from 'react';

export const AppProvider = ({ children }: PropsWithChildren) => {
  return (
    <Suspense fallback={<CenteredSpinner />}>
      {/* // "mui" must be first to trigger functionalities in other providers */}
      <MuiThemeProvider>
        <TrpcProvider>
          <I18nextSSRProvider>{children}</I18nextSSRProvider>
        </TrpcProvider>
      </MuiThemeProvider>
    </Suspense>
  );
};
