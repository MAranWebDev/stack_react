import { VITE_TRPC_URL } from '@/config/env';
import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { httpBatchLink } from '@trpc/client';
import { useSnackbar } from 'notistack';
import { PropsWithChildren, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { trpc } from './hooks';

export const TrpcProvider = ({ children }: PropsWithChildren) => {
  // "trpc"
  const [trpcClient] = useState(() =>
    trpc.createClient({ links: [httpBatchLink({ url: VITE_TRPC_URL })] }),
  );

  // "notistack"
  const { enqueueSnackbar } = useSnackbar();

  // "react-i18next"
  const { t } = useTranslation();

  // Methods
  const enqueueError = (message: string) => {
    const errorMessage = message || t('messages.errorResponse');
    enqueueSnackbar(errorMessage, { variant: 'error' });
  };

  // "react-query"
  const [reactQueryClient] = useState(
    () =>
      new QueryClient({
        queryCache: new QueryCache({
          onError({ message }) {
            enqueueError(message);
          },
        }),
        mutationCache: new MutationCache({
          onError({ message }) {
            enqueueError(message);
          },
          onSuccess() {
            enqueueSnackbar(t('messages.successResponse'), {
              variant: 'success',
            });
          },
        }),
      }),
  );

  return (
    // "trpc"
    <trpc.Provider client={trpcClient} queryClient={reactQueryClient}>
      {/* "react-query" */}
      <QueryClientProvider client={reactQueryClient}>
        {children}

        {/* "react-query-devtools" by default, only included in NODE_ENV === 'development' */}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </trpc.Provider>
  );
};
