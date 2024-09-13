import { DATABASE_URL } from '@/config/env';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schemas';

const connection = postgres(DATABASE_URL);
export const db = drizzle(connection, { schema });
