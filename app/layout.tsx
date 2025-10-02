import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Retro Desktop Interface',
  description: 'A nostalgic 90s desktop interface inspired by poolsuite.net',
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
