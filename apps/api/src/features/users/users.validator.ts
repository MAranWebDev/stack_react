import { z } from 'zod';

export const usersValidator = {
  getInput: z.string(),

  createInput: z.object({
    name: z.string(),
    email: z.string(),
    password: z.string(),
  }),
};

export type GetInputType = z.infer<typeof usersValidator.getInput>;
export type CreateInputType = z.infer<typeof usersValidator.createInput>;
