'use server'

import { revalidatePath } from 'next/cache'
import { z } from 'zod'
import { createNote } from './appstore'

export async function createNoteAction(
  prevState: {
    message: string
  },
  formData: FormData,
) {
  const schema = z.object({
    message: z.string(),
  })
  const parse = schema.safeParse({
    message: formData.get('message'),
  })

  if (!parse.success) {
    return { message: 'Failed to create note' }
  }

  const { message } = parse.data
  const note = await createNote({
    message,
  })

  revalidatePath('/')

  return { message: `Note ${note.id} created.` }
}
