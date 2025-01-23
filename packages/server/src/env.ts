import 'dotenv/config'

import { z } from 'zod'

const envSchema = z.object({
  DB_FILE_NAME: z.string().default('file:test.db'),
})

export const env = envSchema.parse(process.env)
