import { AppProvider } from '@/app/components/AppProvider'
import './globals.css'

export const metadata = {
  title: 'Next.js Forms Example',
  description: 'Example application with forms and Postgres.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  )
}
