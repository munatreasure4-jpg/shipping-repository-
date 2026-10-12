'use client'

import './globals.css'
import { Inter } from 'next/font/google'
import SiteHeader from '../components/SiteHeader'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SHIPNEX',
  description: 'Smart Shipping. Simplified.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-navy-dark text-white min-h-screen` }>
        <SiteHeader />
        <main>{children}</main>
      </body>
    </html>
  )
}
