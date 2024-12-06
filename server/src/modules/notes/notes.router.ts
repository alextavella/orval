import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { createNoteSchema } from './notes.schema'
import { createNote } from './notes.usecase'

export const notesRouter: FastifyPluginAsyncZod = async app => {
  app.post('/', createNoteSchema, async request => {
    const { message } = request.body
    return await createNote({
      message,
    })
  })
}
