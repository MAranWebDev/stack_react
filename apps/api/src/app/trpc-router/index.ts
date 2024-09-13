import { router } from '@/libs/trpc/utils';
import { inferRouterInputs, inferRouterOutputs } from '@trpc/server';
import { sampleRouter } from './sample.router';

// Setup all routers here
export const trpcRouter = router({
  sample: sampleRouter,
});

// Exported TRPC API types shared with the client
export type TrpcRouterType = typeof trpcRouter;
export type TrpcRouterInputType = inferRouterInputs<TrpcRouterType>;
export type TrpcRouterOutputType = inferRouterOutputs<TrpcRouterType>;
