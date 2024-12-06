import { client, db } from '@/db'
import { fakerPT_BR as faker } from '@faker-js/faker'
import { notes } from './schema'

async function seed() {
  await db.delete(notes)

  const [note1] = await db
    .insert(notes)
    .values([
      {
        message: faker.lorem.words(3),
      },
    ])
    .returning()

  console.log('[note1]', note1)
}

seed().then(() => {
  console.log('🌱 Database seeded successfully!')
  client.close()
})
