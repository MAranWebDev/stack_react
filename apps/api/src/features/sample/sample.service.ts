import { db } from '@/drizzle/db';
import { sampleSchema } from '@/drizzle/schemas';
import { ContextType } from '@/libs/trpc';
import { eq } from 'drizzle-orm';
import { SampleValidatorType } from './sample.validator';

interface CtxType {
  ctx: ContextType;
}
interface GetAllOptsType extends CtxType {
  input: SampleValidatorType['getAllInput'];
}
interface GetOptsType extends CtxType {
  input: SampleValidatorType['getInput'];
}
interface CreateOptsType extends CtxType {
  input: SampleValidatorType['createInput'];
}
interface UpdateOptsType extends CtxType {
  input: SampleValidatorType['updateInput'];
}
interface DeleteOptsType extends CtxType {
  input: SampleValidatorType['deleteInput'];
}

export const sampleService = {
  async getAll({ input }: GetAllOptsType) {
    const limit = input.limit || 25;
    const offset = input.offset || 0;
    return db.query.sampleSchema.findMany({ limit, offset });
  },

  async get({ input }: GetOptsType) {
    return db.query.sampleSchema.findFirst({
      where: eq(sampleSchema.id, input),
    });
  },

  async create({ input }: CreateOptsType) {
    return db.insert(sampleSchema).values(input).returning();
  },

  async update({ input }: UpdateOptsType) {
    const { id, ...values } = input;
    return db.update(sampleSchema).set(values).where(eq(sampleSchema.id, id));
  },

  async delete({ input }: DeleteOptsType) {
    return db
      .delete(sampleSchema)
      .where(eq(sampleSchema.id, input))
      .returning();
  },
};
