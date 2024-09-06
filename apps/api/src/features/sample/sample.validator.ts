import { z } from 'zod';

export const sampleValidator = {
  getAllInput: z.object({
    limit: z.number().optional(),
    offset: z.number().optional(),
  }),

  getInput: z.string().max(60),

  createInput: z.object({
    name: z.string().min(2).max(20),
  }),

  updateInput: z.object({
    id: z.string().max(60),
    name: z.string().min(2).max(20).optional(),
    isDone: z.boolean().optional(),
  }),

  deleteInput: z.string().max(60),
};

// Exported types
export interface SampleValidatorType {
  getAllInput: z.infer<typeof sampleValidator.getAllInput>;
  getInput: z.infer<typeof sampleValidator.getInput>;
  createInput: z.infer<typeof sampleValidator.createInput>;
  updateInput: z.infer<typeof sampleValidator.updateInput>;
  deleteInput: z.infer<typeof sampleValidator.deleteInput>;
}
