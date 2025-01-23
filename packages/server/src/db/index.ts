import { env } from '@/env'
import { createClient } from '@libsql/client'
import { drizzle } from 'drizzle-orm/libsql'

export const client = createClient({ url: env.DB_FILE_NAME })
export const db = drizzle({ client })
