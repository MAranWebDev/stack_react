import { publicProcedure, router } from '@/libs/trpc';
import { usersZod } from '@/libs/zod/schemas';
import { usersService } from './users.service';

export const usersRouter = router({
  getAll: publicProcedure.query(() => usersService.getAll()),

  get: publicProcedure
    .input(usersZod.getInput)
    .query((opts) => usersService.get(opts)),

  create: publicProcedure
    .input(usersZod.createInput)
    .mutation((opts) => usersService.create(opts)),
});
