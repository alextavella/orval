import { notesRouter } from '@/modules/notes/notes.router'
import { FastifyInstance } from 'fastify'

export default function (app: FastifyInstance) {
  // app.register(routes, { prefix: '/api' })
  app.register(notesRouter, { prefix: '/notes' })
}
