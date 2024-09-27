import { createTRPCReact } from '@trpc/react-query';
import type { TrpcRouter } from '@workspace/api';

export const trpc = createTRPCReact<TrpcRouter>();
