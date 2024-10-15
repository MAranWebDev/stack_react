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
import { trpc } from './hooks';

// Constants
const MESSAGES = {
  ERROR: 'El error del servidor viene vacío',
  SUCCESS: 'Petición exitosa',
} as const;

export const TrpcProvider = ({ children }: PropsWithChildren) => {
  // "trpc"
  const [trpcClient] = useState(() =>
    trpc.createClient({ links: [httpBatchLink({ url: VITE_TRPC_URL })] }),
  );

  // "notistack"
  const { enqueueSnackbar } = useSnackbar();

  // Methods
  const enqueueError = (message: string) => {
    const errorMessage = message || MESSAGES.ERROR;
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
            enqueueSnackbar(MESSAGES.SUCCESS, { variant: 'success' });
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
