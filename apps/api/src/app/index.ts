import { SERVER_PORT } from '@/config/env';
import { createContext } from '@/libs/trpc/utils';
import { createExpressMiddleware } from '@trpc/server/adapters/express';
import cors from 'cors';
import express from 'express';
import { expressHandler } from 'trpc-playground/handlers/express';
import { trpcRouter } from './trpc-router';

// Constants
const ENDPOINTS = {
  TRPC_API: '/trpc',
  TRPC_PLAYGROUND: '/trpc-playground',
} as const;

const runApp = async () => {
  const app = express();

  // cors
  app.use(cors());

  // trpc
  app.use(
    ENDPOINTS.TRPC_API,
    createExpressMiddleware({ router: trpcRouter, createContext }),
  );

  // trpc-playground
  app.use(
    ENDPOINTS.TRPC_PLAYGROUND,
    await expressHandler({
      trpcApiEndpoint: ENDPOINTS.TRPC_API,
      playgroundEndpoint: ENDPOINTS.TRPC_PLAYGROUND,
      router: trpcRouter,
    }),
  );

  app.listen(SERVER_PORT, () => {
    console.log(`Server is running on port: ${SERVER_PORT}`);
  });
};

runApp();
