'use client'

import AuthForm from '../../components/AuthForm'

export default function SignupPage() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-20">
      <div className="bg-navy-secondary p-8 rounded-lg">
        <h1 className="text-2xl font-semibold">Create your SHIPNEX account</h1>
        <p className="text-muted-grey mt-2">Start managing shipments in minutes.</p>
        <div className="mt-6">
          <AuthForm mode="signup" />
        </div>
      </div>
    </section>
  )
}
