import { createTRPCReact } from '@trpc/react-query';
import type { TrpcRouterType } from '@workspace/api';

export const trpc = createTRPCReact<TrpcRouterType>();
