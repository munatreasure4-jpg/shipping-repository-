'use client'

import { useState } from 'react'
import { supabase } from '../lib/supabase'

export default function AuthForm({ mode = 'login' }: { mode?: 'login' | 'signup' }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setMessage(null)
    try {
      if (mode === 'signup') {
        const { data, error } = await supabase.auth.signUp({ email, password })
        if (error) throw error
        setMessage('Signup successful — check your email to confirm.')
      } else {
        const { data, error } = await supabase.auth.signInWithPassword({ email, password })
        if (error) throw error
        setMessage('Signed in successfully')
      }
    } catch (err: any) {
      setMessage(err.message || 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md w-full">
      <div>
        <label className="block text-sm font-medium">Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required className="mt-1 w-full rounded px-3 py-2 bg-white/5" />
      </div>

      <div>
        <label className="block text-sm font-medium">Password</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" required className="mt-1 w-full rounded px-3 py-2 bg-white/5" />
      </div>

      <div>
        <button type="submit" className="w-full bg-bright-blue text-navy-dark px-4 py-2 rounded" disabled={loading}>{loading ? 'Please wait...' : mode === 'signup' ? 'Create account' : 'Sign in'}</button>
      </div>

      {message && <p className="text-sm mt-2 text-muted-grey">{message}</p>}
    </form>
  )
}
