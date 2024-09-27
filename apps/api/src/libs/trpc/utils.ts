import { initTRPC } from '@trpc/server';
import { CreateExpressContextOptions } from '@trpc/server/adapters/express';

export type Context = Awaited<ReturnType<typeof createContext>>;

// Context
export const createContext = (opts: CreateExpressContextOptions) => {
  return { opts };
};

const t = initTRPC.context<Context>().create();

// Exported helper functions
export const router = t.router;
export const publicProcedure = t.procedure;
