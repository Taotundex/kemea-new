import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
<<<<<<< Updated upstream
  title: 'Kemea',
  description: 'Created with create next app',
=======
  title: 'Create Next App',
  description: 'Generated by create next app',
>>>>>>> Stashed changes
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
