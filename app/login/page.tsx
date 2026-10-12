'use client'

import AuthForm from '../../components/AuthForm'

export default function LoginPage() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-20">
      <div className="bg-navy-secondary p-8 rounded-lg">
        <h1 className="text-2xl font-semibold">Sign in to SHIPNEX</h1>
        <p className="text-muted-grey mt-2">Welcome back — enter your credentials to access your dashboard.</p>
        <div className="mt-6">
          <AuthForm mode="login" />
        </div>
      </div>
    </section>
  )
}
