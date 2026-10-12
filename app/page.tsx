import HomeHero from '../components/HomeHero'

export default function Page() {
  return (
    <>
      <HomeHero />
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-semibold">Features</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-navy-secondary rounded">Shipments management</div>
          <div className="p-6 bg-navy-secondary rounded">Tracking & timelines</div>
          <div className="p-6 bg-navy-secondary rounded">Admin dashboard</div>
        </div>
      </section>
    </>
  )
}
