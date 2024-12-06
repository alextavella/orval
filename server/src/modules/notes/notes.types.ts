import { z } from 'zod'

export const createNoteSchema = {
  schema: {
    description: 'Create a note',
    tags: ['Notes'],
    summary: 'notes',
    operationId: 'createNote',
    body: z.object({
      message: z.string(),
    }),
  },
}
