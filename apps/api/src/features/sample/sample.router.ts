import { publicProcedure, router } from '@/libs/trpc';
import { sampleService } from './sample.service';
import { sampleValidator } from './sample.validator';

export const sampleRouter = router({
  getAll: publicProcedure
    .meta({ openapi: { method: 'GET', path: '/get-all' } })
    .input(sampleValidator.getAllInput)
    .query((opts) => sampleService.getAll(opts)),

  get: publicProcedure
    .input(sampleValidator.getInput)
    .query((opts) => sampleService.get(opts)),

  create: publicProcedure
    .input(sampleValidator.createInput)
    .mutation((opts) => sampleService.create(opts)),

  update: publicProcedure
    .input(sampleValidator.updateInput)
    .mutation((opts) => sampleService.update(opts)),

  delete: publicProcedure
    .input(sampleValidator.deleteInput)
    .mutation((opts) => sampleService.delete(opts)),
});
