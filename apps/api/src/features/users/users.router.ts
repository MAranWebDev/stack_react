import { publicProcedure, router } from '@/libs/trpc';
import { usersService } from './users.service';
import { usersValidator } from './users.validator';

export const usersRouter = router({
  getAll: publicProcedure.query(() => usersService.getAll()),

  get: publicProcedure
    .input(usersValidator.getInput)
    .query((opts) => usersService.get(opts)),

  create: publicProcedure
    .input(usersValidator.createInput)
    .mutation((opts) => usersService.create(opts)),
});
