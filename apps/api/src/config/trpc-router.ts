import { sampleRouter } from '@/features/sample/sample.router';
import { usersRouter } from '@/features/users/users.router';
import { router } from '@/libs/trpc';

// Setup all routers here
export const trpcRouter = router({
  sample: sampleRouter,
  users: usersRouter,
});

// export API type definition to the client
export type TrpcRouterType = typeof trpcRouter;
