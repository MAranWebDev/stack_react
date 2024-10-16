import { sampleService } from '@/features/sample/sample.service';
import { publicProcedure, router } from '@/libs/trpc/utils';
import {
  sampleZodCreateInput,
  sampleZodDeleteInput,
  sampleZodGetAllInput,
  sampleZodGetInput,
  sampleZodUpdateInput,
} from '@/libs/zod/schemas';

export const sampleRouter = router({
  getAll: publicProcedure
    .input(sampleZodGetAllInput)
    .query((opts) => sampleService.getAll(opts)),

  get: publicProcedure
    .input(sampleZodGetInput)
    .query((opts) => sampleService.get(opts)),

  create: publicProcedure
    .input(sampleZodCreateInput)
    .mutation((opts) => sampleService.create(opts)),

  update: publicProcedure
    .input(sampleZodUpdateInput)
    .mutation((opts) => sampleService.update(opts)),

  delete: publicProcedure
    .input(sampleZodDeleteInput)
    .mutation((opts) => sampleService.delete(opts)),
});
