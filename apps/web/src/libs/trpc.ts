import { createTRPCReact } from '@trpc/react-query';
import { inferRouterInputs, inferRouterOutputs } from '@trpc/server';
import type { TrpcRouterType } from '@workspace/api';

// Trpc hooks
export const trpc = createTRPCReact<TrpcRouterType>();

// Exported types
export type RouterInputType = inferRouterInputs<TrpcRouterType>;
export type RouterOutputType = inferRouterOutputs<TrpcRouterType>;
