import { db } from '@/drizzle/db';
import { sampleSchema } from '@/drizzle/schemas';
import { eq } from 'drizzle-orm';
import { SampleValidatorType } from './sample.validator';

type GetAllOptsType = { input: SampleValidatorType['getAllInput'] };
type GetOptsType = { input: SampleValidatorType['getInput'] };
type CreateOptsType = { input: SampleValidatorType['createInput'] };
type UpdateOptsType = { input: SampleValidatorType['updateInput'] };
type DeleteOptsType = { input: SampleValidatorType['deleteInput'] };

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
