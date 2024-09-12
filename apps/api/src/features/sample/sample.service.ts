import { db } from '@/drizzle/db';
import { sampleSchema } from '@/drizzle/schemas';
import { ContextType } from '@/libs/trpc';
import { and, count, eq, ilike } from 'drizzle-orm';
import { SampleZodType } from './sample.zod';

interface CtxType {
  ctx: ContextType;
}
interface GetAllOptsType extends CtxType {
  input: SampleZodType['getAllInput'];
}
interface GetOptsType extends CtxType {
  input: SampleZodType['getInput'];
}
interface CreateOptsType extends CtxType {
  input: SampleZodType['createInput'];
}
interface UpdateOptsType extends CtxType {
  input: SampleZodType['updateInput'];
}
interface DeleteOptsType extends CtxType {
  input: SampleZodType['deleteInput'];
}

export const sampleService = {
  async getAll({ input }: GetAllOptsType) {
    const { page, rowsPerPage, id, name, isDone } = input;

    const previous = page > 0 ? page - 1 : null;
    const offset = page * rowsPerPage;

    const where = and(
      id ? ilike(sampleSchema.id, `%${id}%`) : undefined,
      name ? ilike(sampleSchema.name, `%${name}%`) : undefined,
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
      where: eq(sampleSchema.id, input.id),
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
      .where(eq(sampleSchema.id, input.id))
      .returning();
  },
};
