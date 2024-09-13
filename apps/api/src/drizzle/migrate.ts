import { DATABASE_URL } from '@/config/env';
import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';
import { MIGRATIONS_FOLDER } from './constants';

const connection = postgres(DATABASE_URL, { max: 1 });
const db = drizzle(connection, { logger: true });

const main = async () => {
  // This will run migrations on the database, skipping the ones already applied
  await migrate(db, { migrationsFolder: MIGRATIONS_FOLDER });

  // Don't forget to close the connection, otherwise the script will hang
  await connection.end();
};

main();
