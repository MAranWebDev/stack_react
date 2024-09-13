import { sampleRouter } from '@/features/sample/sample.router';
import { usersRouter } from '@/features/users/users.router';
import { inferRouterInputs, inferRouterOutputs } from '@trpc/server';
import { router } from './trpc-utils';

// Setup all routers here
export const trpcRouter = router({
  sample: sampleRouter,
  users: usersRouter,
});

// Exported TRPC API types shared with the client
export type TrpcRouterType = typeof trpcRouter;
export type RouterInputType = inferRouterInputs<TrpcRouterType>;
export type RouterOutputType = inferRouterOutputs<TrpcRouterType>;
