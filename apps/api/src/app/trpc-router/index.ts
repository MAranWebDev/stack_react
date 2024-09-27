import { router } from '@/libs/trpc/utils';
import { inferRouterInputs, inferRouterOutputs } from '@trpc/server';
import { sampleRouter } from './sample.router';

// Setup all routers here
export const trpcRouter = router({
  sample: sampleRouter,
});

// Exported TRPC API types shared with the client
export type TrpcRouter = typeof trpcRouter;
export type TrpcRouterInput = inferRouterInputs<TrpcRouter>;
export type TrpcRouterOutput = inferRouterOutputs<TrpcRouter>;
