/**
 * Generated by orval v7.4.1 🍺
 * Do not edit manually.
 * Notes API
 * Sample backend service
 * OpenAPI spec version: 1.0.0
 */
import type {
  MutationFunction,
  UseMutationOptions,
  UseMutationResult,
} from '@tanstack/react-query'
import { useMutation } from '@tanstack/react-query'
import type { BodyType, ErrorType } from '../lib/api'
import { customInstance } from '../lib/api'
import type { CreateNote201, CreateNoteBody } from './model'

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1]

/**
 * Create a note
 * @summary notes
 */
export const createNote = (
  createNoteBody: BodyType<CreateNoteBody>,
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal,
) => {
  return customInstance<CreateNote201>(
    {
      url: `/notes`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: createNoteBody,
      signal,
    },
    options,
  )
}

export const getCreateNoteMutationOptions = <
  TData = Awaited<ReturnType<typeof createNote>>,
  TError = ErrorType<unknown>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    TData,
    TError,
    { data: BodyType<CreateNoteBody> },
    TContext
  >
  request?: SecondParameter<typeof customInstance>
}) => {
  const mutationKey = ['createNote']
  const { mutation: mutationOptions, request: requestOptions } = options
    ? options.mutation &&
      'mutationKey' in options.mutation &&
      options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey }, request: undefined }

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof createNote>>,
    { data: BodyType<CreateNoteBody> }
  > = props => {
    const { data } = props ?? {}

    return createNote(data, requestOptions)
  }

  return { mutationFn, ...mutationOptions } as UseMutationOptions<
    TData,
    TError,
    { data: BodyType<CreateNoteBody> },
    TContext
  >
}

export type CreateNoteMutationResult = NonNullable<
  Awaited<ReturnType<typeof createNote>>
>
export type CreateNoteMutationBody = BodyType<CreateNoteBody>
export type CreateNoteMutationError = ErrorType<unknown>

/**
 * @summary notes
 */
export const useCreateNote = <
  TData = Awaited<ReturnType<typeof createNote>>,
  TError = ErrorType<unknown>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    TData,
    TError,
    { data: BodyType<CreateNoteBody> },
    TContext
  >
  request?: SecondParameter<typeof customInstance>
}): UseMutationResult<
  TData,
  TError,
  { data: BodyType<CreateNoteBody> },
  TContext
> => {
  const mutationOptions = getCreateNoteMutationOptions(options)

  return useMutation(mutationOptions)
}
