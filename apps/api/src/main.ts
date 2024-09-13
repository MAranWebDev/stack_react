import { createExpressMiddleware } from '@trpc/server/adapters/express';
import cors from 'cors';
import express from 'express';
import { trpcRouter } from './app/router/trpc-router';
import { createContext } from './app/router/trpc-utils';
import { SERVER_PORT } from './config/env';

const app = express();

// Cors
app.use(cors());

// Trpc
app.use(
  '/trpc',
  createExpressMiddleware({ router: trpcRouter, createContext }),
);

app.listen(SERVER_PORT, () => {
  console.log(`Server is running on port: ${SERVER_PORT}`);
});
