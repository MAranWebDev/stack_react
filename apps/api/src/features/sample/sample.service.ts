import { db } from '@/libs/drizzle/db';
import { sampleSchema } from '@/libs/drizzle/schemas';
import { Context } from '@/libs/trpc/utils';
import {
  SampleZodCreateInput,
  SampleZodDeleteInput,
  SampleZodGetAllInput,
  SampleZodGetInput,
  SampleZodUpdateInput,
} from '@/libs/zod/schemas';
import { and, asc, count, desc, eq, ilike } from 'drizzle-orm';

// Types
interface Ctx {
  ctx: Context;
}
interface GetAllOpts extends Ctx {
  input: SampleZodGetAllInput;
}
interface GetOpts extends Ctx {
  input: SampleZodGetInput;
}
interface CreateOpts extends Ctx {
  input: SampleZodCreateInput;
}
interface UpdateOpts extends Ctx {
  input: SampleZodUpdateInput;
}
interface DeleteOpts extends Ctx {
  input: SampleZodDeleteInput;
}

export const sampleService = {
  async getAll({ input }: GetAllOpts) {
    // Inputs
    const { filters, sortBy, page, rowsPerPage } = input;
    const { id, name, isDone } = filters || {};
    const { columnName, isDesc } = sortBy;

    // Conditions
    const where = and(
      id ? ilike(sampleSchema.id, `%${id}%`) : undefined,
      name ? ilike(sampleSchema.name, `%${name}%`) : undefined,
      isDone != undefined ? eq(sampleSchema.isDone, isDone) : undefined,
    );

    const schemaColumn = sampleSchema[columnName];
    const orderBy = isDesc ? desc(schemaColumn) : asc(schemaColumn);
    const offset = page * rowsPerPage;

    // Data
    const previous = page > 0 ? page - 1 : null;

    const [{ count: dataCount }] = await db
      .select({ count: count() })
      .from(sampleSchema)
      .where(where);

    const next = dataCount / rowsPerPage > page ? page + 1 : null;

    const results = await db
      .select()
      .from(sampleSchema)
      .where(where)
      .orderBy(orderBy)
      .limit(rowsPerPage)
      .offset(offset);

    return { dataCount, previous, next, results };
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
