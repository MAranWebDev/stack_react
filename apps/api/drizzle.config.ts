import { defineConfig } from 'drizzle-kit';
import {
  MIGRATIONS_FOLDER,
  SCHEMAS_FOLDER,
} from './src/libs/drizzle/constants';

export default defineConfig({
  dialect: 'postgresql',
  schema: SCHEMAS_FOLDER, // For drizzle generate
  out: MIGRATIONS_FOLDER, // For drizzle generate
  verbose: true, // Print all queries that will be executed
  strict: true, // Always ask for an approve before pushing the schema
});
