import { defineConfig } from 'drizzle-kit';

// "drizzle.config" is not in "tsconfig" so it can't use absolute import
import {
  MIGRATIONS_FOLDER,
  SCHEMAS_FOLDER,
} from './src/libs/drizzle/constants';

export default defineConfig({
  dialect: 'postgresql',
  schema: SCHEMAS_FOLDER, // For drizzle generate only
  out: MIGRATIONS_FOLDER, // For drizzle generate only
  verbose: true, // Print all queries that will be executed
  strict: true, // Always ask for an approve before pushing the schema
});
