import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar/Navbar'

const inter = Inter({
  weight: ['300', '400', '500'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "SINC - Your fitness, simple."
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-hidden`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
