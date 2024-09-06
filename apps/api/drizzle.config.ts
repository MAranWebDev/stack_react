import { DATABASE_URL } from '@/config/env';
import { MIGRATIONS_FOLDER } from '@/drizzle/constants';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  dialect: 'postgresql',
  schema: './src/drizzle/schemas/*', // For drizzle generate
  out: MIGRATIONS_FOLDER, // For drizzle generate
  dbCredentials: { url: DATABASE_URL }, // For drizzle studio,
  verbose: true, // print all queries that will be executed
  strict: true, // always ask for an approve before pushing the schema
});
