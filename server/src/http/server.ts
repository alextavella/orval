import fastifyCors from '@fastify/cors'
import fastifySwagger from '@fastify/swagger'
import fastifySwaggerUI from '@fastify/swagger-ui'
import fastify from 'fastify'

import {
  jsonSchemaTransform,
  serializerCompiler,
  validatorCompiler,
  ZodTypeProvider,
} from 'fastify-type-provider-zod'

import routes from './routes'

const app = fastify().withTypeProvider<ZodTypeProvider>()
app.register(fastifyCors, { origin: '*' })
app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.register(fastifySwagger, {
  openapi: {
    openapi: '3.0.0',
    info: {
      title: 'Notes API',
      description: 'Sample backend service',
      version: '1.0.0',
    },
    servers: [
      {
        url: 'http://localhost:3333',
        description: 'Development',
      },
    ],
  },
  transform: jsonSchemaTransform,
})

app.register(fastifySwaggerUI, {
  routePrefix: '/docs',
})
// fastify.register(require("@fastify/autoload"), {
//   dir: path.join(__dirname, 'routes')
// })

app.after(() => {
  routes(app)
})

async function run() {
  await app.ready()
  await app.listen({ port: 3333 })
  app.swagger({ yaml: true })
  console.log(`🚀 Server running at http://localhost:3333/docs`)
}

run()
