import { db } from '@/libs/drizzle/db';
import { sampleSchema } from '@/libs/drizzle/schemas';
import { Context } from '@/libs/trpc/utils';
import { SampleZod } from '@/libs/zod/schemas';
import { and, count, eq, ilike } from 'drizzle-orm';

// Types
interface Ctx {
  ctx: Context;
}
interface GetAllOpts extends Ctx {
  input: SampleZod['getAllInput'];
}
interface GetOpts extends Ctx {
  input: SampleZod['getInput'];
}
interface CreateOpts extends Ctx {
  input: SampleZod['createInput'];
}
interface UpdateOpts extends Ctx {
  input: SampleZod['updateInput'];
}
interface DeleteOpts extends Ctx {
  input: SampleZod['deleteInput'];
}

export const sampleService = {
  async getAll({ input }: GetAllOpts) {
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

  async get({ input }: GetOpts) {
    return db.query.sampleSchema.findFirst({
      where: eq(sampleSchema.id, input.id),
    });
  },

  async create({ input }: CreateOpts) {
    return db.insert(sampleSchema).values(input).returning();
  },

  async update({ input }: UpdateOpts) {
    const { id, ...values } = input;
    return db.update(sampleSchema).set(values).where(eq(sampleSchema.id, id));
  },

  async delete({ input }: DeleteOpts) {
    return db
      .delete(sampleSchema)
      .where(eq(sampleSchema.id, input.id))
      .returning();
  },
};
