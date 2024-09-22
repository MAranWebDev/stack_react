import { SnackbarProvider } from 'notistack';
import { PropsWithChildren } from 'react';

export const NotistackProvider = ({ children }: PropsWithChildren) => {
  return (
    <SnackbarProvider
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      maxSnack={3}
    >
      {children}
    </SnackbarProvider>
  );
};
