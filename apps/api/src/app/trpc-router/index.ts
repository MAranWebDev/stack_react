import { router } from '@/libs/trpc/utils';
import { inferRouterInputs, inferRouterOutputs } from '@trpc/server';
import { sampleRouter } from './sample.router';

// Routers
export const trpcRouter = router({
  sample: sampleRouter,
});

// Exported TRPC types for client only
export type TrpcRouter = typeof trpcRouter;
export type TrpcRouterInput = inferRouterInputs<TrpcRouter>;
export type TrpcRouterOutput = inferRouterOutputs<TrpcRouter>;
