import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ChatGPT-Translate-Web',
  description: 'Using AI technology for translation',
  keywords: 'Translation, translator, translation assistant, AI translation, online translation, chat translation',
  icons: {
    icon: './favicon.ico'
  }
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
