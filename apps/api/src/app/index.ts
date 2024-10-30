import { SERVER_PORT } from '@/config/env';
import { ROUTES } from '@/constants/routes';
import { createContext } from '@/libs/trpc/utils';
import { createExpressMiddleware } from '@trpc/server/adapters/express';
import cors from 'cors';
import express from 'express';
import { trpcRouter } from './trpc-router';

const app = express();

// "cors"
app.use(cors());

// "trpc"
app.use(
  ROUTES.TRPC_API,
  createExpressMiddleware({ router: trpcRouter, createContext }),
);

app.listen(SERVER_PORT, () => {
  console.log(`Server is running on port: ${SERVER_PORT}`);
});
