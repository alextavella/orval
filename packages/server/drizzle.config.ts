import { env } from '@/env'
import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  out: './.migrations',
  schema: './src/db/schema/index.ts',
  dialect: 'sqlite',
  dbCredentials: {
    url: env.DB_FILE_NAME,
  },
})
