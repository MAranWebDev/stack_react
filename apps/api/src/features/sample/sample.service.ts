import { db } from '@/drizzle/db';
import { sampleSchema } from '@/drizzle/schemas';
import { ContextType } from '@/libs/trpc';
import { and, count, eq, ilike } from 'drizzle-orm';
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
    const { page, rowsPerPage, likeId, likeName, isDone } = input;

    const previous = page > 0 ? page - 1 : null;
    const offset = page * rowsPerPage;

    const where = and(
      likeId ? ilike(sampleSchema.id, `%${likeId}%`) : undefined,
      likeName ? ilike(sampleSchema.name, `%${likeName}%`) : undefined,
      isDone != undefined ? eq(sampleSchema.isDone, isDone) : undefined,
    );

    const [{ count: dataCount }] = await db
      .select({ count: count() })
      .from(sampleSchema)
      .where(where);

    const next = dataCount / rowsPerPage > page ? page + 1 : null;

    const results = await db
      .select()
      .from(sampleSchema)
      .where(where)
      .limit(rowsPerPage)
      .offset(offset);

    return { dataCount, next, previous, results };
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
