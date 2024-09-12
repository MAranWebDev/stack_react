import { db } from '@/drizzle/db';
import { usersSchema } from '@/drizzle/schemas';
import { ContextType } from '@/libs/trpc';
import { UsersZodType } from '@/libs/zod/schemas';
import { eq } from 'drizzle-orm';

interface CtxType {
  ctx: ContextType;
}
interface GetOptsType extends CtxType {
  input: UsersZodType['getInput'];
}
interface CreateOptsType extends CtxType {
  input: UsersZodType['createInput'];
}

export const usersService = {
  async getAll() {
    return db.query.usersSchema.findMany();
  },

  async get({ input }: GetOptsType) {
    return db.query.usersSchema.findFirst({
      where: eq(usersSchema.email, input.email),
    });
  },

  async create({ input }: CreateOptsType) {
    return db.insert(usersSchema).values(input).returning();
  },
};
