'use client'

import { useState } from 'react'

export default function TrackingPage() {
  const [tracking, setTracking] = useState('')
  const [result, setResult] = useState<string | null>(null)

  function handleLookup(e: React.FormEvent) {
    e.preventDefault()
    // Mocked lookup — will be replaced with real lookup calling Supabase in later stage
    setResult(`No shipment found for ${tracking} (mocked).`)
  }

  return (
    <section className="max-w-3xl mx-auto px-6 py-20">
      <div className="bg-navy-secondary p-8 rounded-lg">
        <h1 className="text-2xl font-semibold">Track a shipment</h1>
        <form onSubmit={handleLookup} className="mt-6 flex gap-2">
          <input value={tracking} onChange={(e) => setTracking(e.target.value)} placeholder="Enter tracking number" className="flex-1 rounded px-3 py-2 bg-white/5" />
          <button className="bg-bright-blue text-navy-dark px-4 py-2 rounded">Lookup</button>
        </form>
        {result && <p className="mt-4 text-muted-grey">{result}</p>}
      </div>
    </section>
  )
}
