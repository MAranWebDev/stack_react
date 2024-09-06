import { pgTable, timestamp, uuid, varchar } from 'drizzle-orm/pg-core';
import { userProfilesSchema } from './user-profiles.schema';

export const usersSchema = pgTable('users', {
  createdAt: timestamp('created_at'),
  updatedAt: timestamp('updated_at'),
  id: uuid('id').defaultRandom().primaryKey(),
  name: varchar('name').notNull(),
  email: varchar('email').notNull().unique(),
  password: varchar('password').notNull(),
  userProfileId: varchar('user_profile_id').references(
    () => userProfilesSchema.id,
  ),
});
