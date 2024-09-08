import { z } from 'zod';

// Constants
const SCHEMAS = {
  ID: z.string().max(60),
  NAME: z.string().min(2).max(20),
} as const;

export const sampleValidator = {
  getAllInput: z.object({
    page: z.number().nonnegative().optional().default(0),
    rowsPerPage: z.number().positive().lte(25).optional().default(10),
  }),

  getInput: SCHEMAS.ID,

  createInput: z.object({
    name: SCHEMAS.NAME,
  }),

  updateInput: z.object({
    id: z.string().max(60),
    name: SCHEMAS.NAME.optional(),
    isDone: z.boolean().optional(),
  }),

  deleteInput: SCHEMAS.ID,
};

// Exported types
export interface SampleValidatorType {
  getAllInput: z.infer<typeof sampleValidator.getAllInput>;
  getInput: z.infer<typeof sampleValidator.getInput>;
  createInput: z.infer<typeof sampleValidator.createInput>;
  updateInput: z.infer<typeof sampleValidator.updateInput>;
  deleteInput: z.infer<typeof sampleValidator.deleteInput>;
}
