import { inputSchema, outputSchema } from './notes.usecase'

export const createNoteSchema = {
  schema: {
    description: 'Create a note',
    tags: ['Notes'],
    summary: 'notes',
    operationId: 'createNote',
    body: inputSchema,
    response: {
      201: outputSchema,
    },
  },
}
