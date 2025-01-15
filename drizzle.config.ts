import * as dotenv from 'dotenv';
import { defineConfig } from 'drizzle-kit';
import type { Config } from 'drizzle-kit';

dotenv.config({
    path: ".env.local"
})

export default defineConfig({
    dialect: 'postgresql',
    schema: './server/schema.ts',
    out: './server/migrations',
    dbCredentials: {
        url: process.env.NEXT_PUBLIC_DATABASE_URL!
    }
}) satisfies Config;