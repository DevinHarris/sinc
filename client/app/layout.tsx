import './globals.css'
import type { Metadata } from 'next'
import { Source_Sans_3 } from 'next/font/google'

const SourceSans3 = Source_Sans_3({
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
      <body className={SourceSans3.className}>{children}</body>
    </html>
  )
}
