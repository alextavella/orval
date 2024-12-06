import { db } from '@/db'
import { notes } from '@/db/schema'

type Input = {
  message: string
}

type Output = {
  id: number
  message: string
}

export async function createNote({ message }: Input): Promise<Output> {
  const [note] = await db.insert(notes).values({ message }).returning()

  return note
}
