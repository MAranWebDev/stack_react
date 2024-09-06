import {
  boolean,
  pgTable,
  timestamp,
  uuid,
  varchar,
} from 'drizzle-orm/pg-core';

export const sampleSchema = pgTable('sample', {
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
  id: uuid('id').primaryKey().defaultRandom(),
  name: varchar('name').unique().notNull(),
  isDone: boolean('is_done').notNull().default(false),
});
