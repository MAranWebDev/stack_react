import { VITE_TRPC_URL } from '@/config/env';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client';
import { PropsWithChildren, useState } from 'react';
import { trpc } from './hooks';

export const TrpcProvider = ({ children }: PropsWithChildren) => {
  const [trpcClient] = useState(() =>
    trpc.createClient({ links: [httpBatchLink({ url: VITE_TRPC_URL })] }),
  );
  const [reactQueryClient] = useState(() => new QueryClient());

  return (
    // Trpc
    <trpc.Provider client={trpcClient} queryClient={reactQueryClient}>
      {/* React Query */}
      <QueryClientProvider client={reactQueryClient}>
        {children}
      </QueryClientProvider>
    </trpc.Provider>
  );
};
