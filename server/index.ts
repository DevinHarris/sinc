
import * as dotenv from 'dotenv'
import { neon } from '@neondatabase/serverless'
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from '@/server/schema'

dotenv.config({
    path: '.env.local'
})

const sql = neon(process.env.AUTH_DRIZZLE_URL!);
export const db = drizzle(sql, { schema, logger: true })