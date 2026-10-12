'use client'

import Link from 'next/link'

export default function SiteHeader() {
  return (
    <header className="bg-navy-dark text-white">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded bg-bright-blue flex items-center justify-center font-bold text-navy-dark">SN</div>
          <div>
            <div className="font-semibold">SHIPNEX</div>
            <div className="text-xs text-muted-grey">Smart Shipping. Simplified.</div>
          </div>
        </div>
        <nav className="flex gap-4 items-center">
          <Link href="/tracking" className="text-muted-grey">Track</Link>
          <Link href="/login" className="bg-bright-blue text-navy-dark px-3 py-1 rounded">Sign in</Link>
        </nav>
      </div>
    </header>
  )
}
