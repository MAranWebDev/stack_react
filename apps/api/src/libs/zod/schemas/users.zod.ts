import { z } from 'zod';

// Base Schemas
const values = z.object({
  name: z.string(),
  email: z.string(),
  password: z.string(),
});

// Schemas
export const usersZod = {
  getInput: values.pick({ email: true }),
  createInput: values,
};

// Exportes types
export interface UsersZodType {
  getInput: z.infer<typeof usersZod.getInput>;
  createInput: z.infer<typeof usersZod.createInput>;
}
