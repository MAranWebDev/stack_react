import { publicProcedure, router } from '@/libs/trpc';
import { sampleService } from './sample.service';
import { sampleZod } from './sample.zod';

export const sampleRouter = router({
  getAll: publicProcedure
    .input(sampleZod.getAllInput)
    .query((opts) => sampleService.getAll(opts)),

  get: publicProcedure
    .input(sampleZod.getInput)
    .query((opts) => sampleService.get(opts)),

  create: publicProcedure
    .input(sampleZod.createInput)
    .mutation((opts) => sampleService.create(opts)),

  update: publicProcedure
    .input(sampleZod.updateInput)
    .mutation((opts) => sampleService.update(opts)),

  delete: publicProcedure
    .input(sampleZod.deleteInput)
    .mutation((opts) => sampleService.delete(opts)),
});
