import { initTRPC } from '@trpc/server';
import { CreateExpressContextOptions } from '@trpc/server/adapters/express';

export type ContextType = Awaited<ReturnType<typeof createContext>>;

// Setup context here
export const createContext = (opts: CreateExpressContextOptions) => {
  return { opts };
};

const t = initTRPC.context<ContextType>().create();

// Export helper functions here
export const router = t.router;
export const publicProcedure = t.procedure;
