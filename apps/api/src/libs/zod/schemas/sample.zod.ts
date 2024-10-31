import { z } from 'zod';

// Constants
const COLUMNS = ['id', 'name', 'isDone'] as const;

// Base schemas
const page = z.number().nonnegative();
const rowsPerPage = z.number().positive().lte(25);

const column = z.enum(COLUMNS);
const isDesc = z.boolean();
const sortBy = z.object({ column, isDesc });

const id = z.string().trim().max(60);
const name = z.string().trim().min(2).max(20);
const isDone = z.boolean();
const formText = z.string().trim().max(20);
const filters = z.object({ id, name: formText, isDone });

// Exported schemas
export const sampleZodGetAllInput = z.object({
  page: page.optional(),
  rowsPerPage: rowsPerPage.optional(),
  sortBy: sortBy.optional(),
  filters: filters.partial().optional(),
});
export const sampleZodGetInput = z.object({ id });
export const sampleZodCreateInput = z.object({ name });
export const sampleZodUpdateInput = filters.partial().merge(z.object({ id }));
export const sampleZodDeleteInput = z.object({ id });
export const sampleZodGetAllForm = filters
  .extend({ isDone: formText })
  .partial();

// Exported types
export type SampleZodGetAllInput = z.infer<typeof sampleZodGetAllInput>;
export type SampleZodGetInput = z.infer<typeof sampleZodGetInput>;
export type SampleZodCreateInput = z.infer<typeof sampleZodCreateInput>;
export type SampleZodUpdateInput = z.infer<typeof sampleZodUpdateInput>;
export type SampleZodDeleteInput = z.infer<typeof sampleZodDeleteInput>;
export type SampleZodGetAllForm = z.infer<typeof sampleZodGetAllForm>;
