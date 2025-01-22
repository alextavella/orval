'use client'

import { queryClient } from '@/app/lib/queryClient'
import { QueryClientProvider } from '@tanstack/react-query'

export function AppProvider({ children }: React.PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
