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
        url: process.env.AUTH_DRIZZLE_URL!
    }
}) satisfies Config;