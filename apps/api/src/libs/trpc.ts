import { initTRPC } from '@trpc/server';
import { CreateExpressContextOptions } from '@trpc/server/adapters/express';
import { OpenApiMeta } from 'trpc-openapi';

export type ContextType = Awaited<ReturnType<typeof createContext>>;

// Setup context
export const createContext = (opts: CreateExpressContextOptions) => {
  return { opts };
};

const t = initTRPC.context<ContextType>().meta<OpenApiMeta>().create();

// Export helper functions here
export const router = t.router;
export const publicProcedure = t.procedure;
