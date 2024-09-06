import { db } from '@/drizzle/db';
import { usersSchema } from '@/drizzle/schemas';
import { ContextType } from '@/libs/trpc';
import { eq } from 'drizzle-orm';
import { CreateInputType, GetInputType } from './users.validator';

interface GetOptsType {
  ctx: ContextType;
  input: GetInputType;
}

interface CreateOptsType {
  ctx: ContextType;
  input: CreateInputType;
}

export const usersService = {
  async getAll() {
    return db.query.usersSchema.findMany();
  },

  async get({ input }: GetOptsType) {
    return db.query.usersSchema.findFirst({
      where: eq(usersSchema.email, input),
    });
  },

  async create({ input }: CreateOptsType) {
    return db.insert(usersSchema).values(input).returning();
  },
};
