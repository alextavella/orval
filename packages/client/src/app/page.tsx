import { AddNoteForm } from './components/AddNoteForm'

export default function Home() {
  return (
    <div className="grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 items-center">
        <AddNoteForm />
      </main>
    </div>
  )
}
