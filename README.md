# SHIPNEX - Smart Shipping

SHIPNEX is a Next.js + TypeScript starter scaffold for a shipping and logistics MVP. This branch (feature/init-shipnex-mvp) contains the initial app scaffold: landing page, animated login/signup UI, Supabase client scaffolding, and DB schema SQL.

Quickstart (Windows / VS Code)

1. Install Node.js (recommended 18.x or 20.x) and Git.
2. Clone the repo and checkout the branch:
   git clone https://github.com/munatreasure4-jpg/shipping-repository-.git
   cd shipping-repository-
   git fetch origin
   git checkout feature/init-shipnex-mvp
3. Install dependencies:
   npm install
4. Create a Supabase project (https://supabase.com/) and copy the API URL and anon key.
5. Create a .env.local in the project root with:
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
6. Run the dev server:
   npm run dev
7. Open http://localhost:3000

Database
- supabase/schema.sql contains recommended tables and RLS templates. Run it in your Supabase SQL editor or via the CLI.

Security notes
- Do NOT commit service_role keys or other secrets.
- Admin-only server actions must use server-side environment variables (to be added later behind Next.js API routes).

Next steps
- Implement shipment workflows, tracking, admin dashboard, and RLS policies. I will implement these in small stages and report progress.
