'use client'

import { createNoteAction } from '@/app/data/actions'
import { useActionState } from 'react'
import { useFormStatus } from 'react-dom'

const initialState = {
  message: '',
}

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      className="bg-green-500 text-gray-50"
      aria-disabled={pending}
    >
      Add
    </button>
  )
}

export function AddNoteForm() {
  const [state, formAction] = useActionState(createNoteAction, initialState)

  return (
    <form
      className="flex flex-col gap-4 p-4 rounded-md bg-white"
      action={formAction}
    >
      <label className="text-gray-800" htmlFor="message">
        Message
      </label>
      <input
        type="text"
        id="message"
        name="message"
        placeholder="Message"
        className="text-gray-600"
      />
      <SubmitButton />
      <p className="text-blue-400" aria-live="polite" role="status">
        {state?.message}
      </p>
    </form>
  )
}
