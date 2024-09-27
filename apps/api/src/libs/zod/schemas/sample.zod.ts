import { z } from 'zod';

// Base schemas
const values = z.object({
  id: z.string().trim().max(60),
  name: z.string().trim().min(2).max(20),
  isDone: z.boolean(),
});

const defaultValues = z.object({
  page: z.number().nonnegative().default(0),
  rowsPerPage: z.number().positive().lte(25).default(10),
});

// Schemas
export const sampleZod = {
  getAllInput: values.partial().merge(defaultValues),
  getInput: values.pick({ id: true }),
  createInput: values.pick({ name: true }),
  updateInput: values.partial({ name: true, isDone: true }),
  deleteInput: values.pick({ id: true }),
};

// Exported types
export interface SampleZod {
  getAllInput: z.infer<typeof sampleZod.getAllInput>;
  getInput: z.infer<typeof sampleZod.getInput>;
  createInput: z.infer<typeof sampleZod.createInput>;
  updateInput: z.infer<typeof sampleZod.updateInput>;
  deleteInput: z.infer<typeof sampleZod.deleteInput>;
}
