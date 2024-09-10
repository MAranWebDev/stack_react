import { z } from 'zod';

// Constants
const SCHEMAS = {
  PAGE: z.number().nonnegative(),
  ROWS_PER_PAGE: z.number().positive().lte(25),
  ID: z.string().max(60),
  NAME: z.string().min(2).max(20),
  IS_DONE: z.boolean(),
} as const;

export const sampleValidator = {
  getAllInput: z.object({
    page: SCHEMAS.PAGE.optional().default(0),
    rowsPerPage: SCHEMAS.ROWS_PER_PAGE.optional().default(10),
    likeId: SCHEMAS.ID.optional(),
    likeName: SCHEMAS.NAME.optional(),
    isDone: SCHEMAS.IS_DONE.optional(),
  }),

  getInput: SCHEMAS.ID,

  createInput: z.object({
    name: SCHEMAS.NAME,
  }),

  updateInput: z.object({
    id: SCHEMAS.ID,
    name: SCHEMAS.NAME.optional(),
    isDone: SCHEMAS.IS_DONE.optional(),
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
