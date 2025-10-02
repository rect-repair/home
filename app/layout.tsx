import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '[[rect*]]repair home',
  description: 'home computer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="crt-effect">
        {children}
      </body>
    </html>
  )
}
