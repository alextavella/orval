import { db } from '@/db'
import { notes } from '@/db/schema'
import { z } from 'zod'

export const inputSchema = z.object({
  message: z.string(),
})

export const outputSchema = z.object({
  id: z.number(),
  message: z.string(),
})

type Input = z.infer<typeof inputSchema>
type Output = z.infer<typeof outputSchema>

export async function createNote({ message }: Input): Promise<Output> {
  const [note] = await db.insert(notes).values({ message }).returning()

  return note
}
