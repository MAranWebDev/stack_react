import { z } from 'zod';

// Types
type SortByValues = [(typeof SORT_BY)[keyof typeof SORT_BY]];

// Constants
const SORT_BY = {
  ID: 'id',
  NAME: 'name',
  IS_DONE: 'isDone',
} as const;

const SORT_BY_VALUES = Object.values(SORT_BY) as SortByValues;

// Base schemas
const page = z.number().nonnegative();
const rowsPerPage = z.number().positive().lte(25);
const id = z.string().trim().max(60);
const name = z.string().trim().min(2).max(20);
const isDone = z.boolean();
const columnName = z.enum(SORT_BY_VALUES);
const isDesc = z.boolean();

const filters = z.object({ id, name, isDone });
const sortBy = z.object({ columnName, isDesc });

// Exported schemas
export const sampleZodGetAllInput = z.object({
  page: page.default(0),
  rowsPerPage: rowsPerPage.default(10),
  filters: filters.partial().optional(),
  sortBy: sortBy.default({ columnName: SORT_BY.ID, isDesc: false }),
});
export const sampleZodGetInput = z.object({ id });
export const sampleZodCreateInput = z.object({ name });
export const sampleZodUpdateInput = filters.partial().merge(z.object({ id }));
export const sampleZodDeleteInput = z.object({ id });

// Exported types
export type SampleZodGetAllInput = z.infer<typeof sampleZodGetAllInput>;
export type SampleZodGetInput = z.infer<typeof sampleZodGetInput>;
export type SampleZodCreateInput = z.infer<typeof sampleZodCreateInput>;
export type SampleZodUpdateInput = z.infer<typeof sampleZodUpdateInput>;
export type SampleZodDeleteInput = z.infer<typeof sampleZodDeleteInput>;
