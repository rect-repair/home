import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CEDAR-OS',
  description: 'A game launcher for the [[rect*]]repair <> boshi game exchange event',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      </head>
      <body className="crt-effect">
        {children}
      </body>
    </html>
  )
}
