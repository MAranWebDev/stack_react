import { createTRPCReact } from '@trpc/react-query';
import type { TrpcRouterType } from '@workspace/api';

// Trpc hooks
export const trpc = createTRPCReact<TrpcRouterType>();
