import { VITE_TRPC_URL } from '@/config/env';
import { useEnqueueMessages } from '@/libs/mui/hooks';
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
  const { enqueueError, enqueueSuccess } = useEnqueueMessages();

  // "trpc"
  const [trpcClient] = useState(() =>
    trpc.createClient({ links: [httpBatchLink({ url: VITE_TRPC_URL })] }),
  );

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
            enqueueSuccess();
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
