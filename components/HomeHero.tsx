'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function HomeHero() {
  return (
    <section className="bg-navy-dark text-white">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-5xl font-bold">SHIPNEX</h1>
            <p className="mt-4 text-muted-grey text-lg">Smart Shipping. Simplified.</p>
            <p className="mt-6 text-md text-muted-grey">Manage shipments, generate tracking numbers, and give customers transparent status updates — all from a modern dashboard built for logistics teams.</p>

            <div className="mt-8 flex gap-4">
              <Link href="/signup" className="inline-block bg-bright-blue text-navy-dark px-6 py-3 rounded font-medium">Get started</Link>
              <Link href="/tracking" className="inline-block border border-white/20 px-6 py-3 rounded">Track shipment</Link>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="p-6 bg-navy-secondary rounded-lg">
            <div className="h-44 flex items-center justify-center text-cyan">[Hero illustration placeholder]</div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
