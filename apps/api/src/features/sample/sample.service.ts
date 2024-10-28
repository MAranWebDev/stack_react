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
import { and, asc, count, desc, eq, ilike, sql } from 'drizzle-orm';

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
    const whereConditions = [
      id ? sql`cast(${sampleSchema.id} as text) ilike ${`%${id}%`}` : undefined,
      name ? ilike(sampleSchema.name, `%${name}%`) : undefined,
      isDone != undefined ? eq(sampleSchema.isDone, isDone) : undefined,
    ].filter(Boolean);

    const where = and(...whereConditions);
    const offset = page * rowsPerPage;
    const schemaColumn = sampleSchema[columnName];
    const orderBy = isDesc ? desc(schemaColumn) : asc(schemaColumn);

    // Data
    const previous = page > 0 ? page - 1 : null;

    const [{ count: dataCount }] = await db
      .select({ count: count() })
      .from(sampleSchema)
      .where(where);

    const next = dataCount / rowsPerPage > page ? page + 1 : null;

    const results = await db.query.sampleSchema.findMany({
      where,
      orderBy,
      limit: rowsPerPage,
      offset,
    });

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
