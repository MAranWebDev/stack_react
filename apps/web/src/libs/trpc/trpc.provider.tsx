import { VITE_TRPC_URL } from '@/config/env';
import { useNotistack } from '@/libs/mui/hooks';
import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { httpBatchLink } from '@trpc/client';
import { PropsWithChildren, useState } from 'react';
import { trpc } from './hooks';

export const TrpcProvider = ({ children }: PropsWithChildren) => {
  // trpc
  const [trpcClient] = useState(() =>
    trpc.createClient({ links: [httpBatchLink({ url: VITE_TRPC_URL })] }),
  );

  const { showNotification } = useNotistack();

  // react-query
  const [reactQueryClient] = useState(
    () =>
      new QueryClient({
        queryCache: new QueryCache({
          onError({ message }) {
            showNotification({ variant: 'error', text: message });
          },
        }),
        mutationCache: new MutationCache({
          onError({ message }) {
            showNotification({ variant: 'error', text: message });
          },
          onSuccess() {
            showNotification({ variant: 'success' });
          },
        }),
      }),
  );

  return (
    // trpc
    <trpc.Provider client={trpcClient} queryClient={reactQueryClient}>
      {/* react-query */}
      <QueryClientProvider client={reactQueryClient}>
        {children}

        {/* react-query-devtools */}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </trpc.Provider>
  );
};
