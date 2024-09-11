import { z } from 'zod';

// Base schemas
const values = z.object({
  id: z.string().max(60),
  name: z.string().min(2).max(20),
  isDone: z.boolean(),
});

const defaultValues = z.object({
  page: z.number().nonnegative().default(0),
  rowsPerPage: z.number().positive().lte(25).default(10),
});

// Schemas
export const sampleValidator = {
  getAllInput: values.partial().merge(defaultValues),
  getInput: values.pick({ id: true }),
  createInput: values.pick({ name: true }),
  updateInput: values.partial({ name: true, isDone: true }),
  deleteInput: values.pick({ id: true }),
};

// Exported types
export interface SampleValidatorType {
  getAllInput: z.infer<typeof sampleValidator.getAllInput>;
  getInput: z.infer<typeof sampleValidator.getInput>;
  createInput: z.infer<typeof sampleValidator.createInput>;
  updateInput: z.infer<typeof sampleValidator.updateInput>;
  deleteInput: z.infer<typeof sampleValidator.deleteInput>;
}
