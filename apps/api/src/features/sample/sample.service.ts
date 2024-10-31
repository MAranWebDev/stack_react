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
    const { page, rowsPerPage, sortBy, filters } = input;
    const newPage = page ?? 0;
    const newRowsPerPage = rowsPerPage ?? 10;
    const { id, name, isDone } = filters || {};
    const { column, isDesc } = sortBy || { column: 'id', isDesc: false };

    // Conditions
    const whereConditions = [
      id ? sql`cast(${sampleSchema.id} as text) ilike ${`%${id}%`}` : undefined,
      name ? ilike(sampleSchema.name, `%${name}%`) : undefined,
      isDone != undefined ? eq(sampleSchema.isDone, isDone) : undefined,
    ].filter(Boolean);
    const where = and(...whereConditions);

    const schemaColumn = sampleSchema[column];
    const orderBy = isDesc ? desc(schemaColumn) : asc(schemaColumn);

    const offset = newPage * newRowsPerPage;

    // Data
    const previous = newPage > 0 ? newPage - 1 : null;

    const [{ count: dataCount }] = await db
      .select({ count: count() })
      .from(sampleSchema)
      .where(where);

    const next = dataCount / newRowsPerPage > newPage ? newPage + 1 : null;

    const results = await db.query.sampleSchema.findMany({
      where,
      orderBy,
      limit: rowsPerPage,
      offset,
    });

    return {
      dataCount,
      previous,
      next,
      results,
    };
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
