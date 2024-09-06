import { pgTable, text, timestamp, varchar } from 'drizzle-orm/pg-core';

export const userProfilesSchema = pgTable('user-profiles', {
  createdAt: timestamp('created_at'),
  updatedAt: timestamp('updated_at'),
  id: varchar('id').primaryKey(),
  permissions: text('permissions'), // Change this for an array
});
