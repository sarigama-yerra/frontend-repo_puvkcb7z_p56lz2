import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Maya Chen',
    role: 'CTO, Nova',
    quote: 'We replaced three providers with GlacioPay. Revenue up 12% and the dashboards are gorgeous.'
  },
  {
    name: 'Jordan Lee',
    role: 'Founder, Nimbus',
    quote: 'Integration took a single afternoon. The API is a joy and our users love the checkout.'
  },
  {
    name: 'Anya Patel',
    role: 'COO, Orbit',
    quote: 'Rock-solid reliability and insightful alerts. Exactly what we needed to scale.'
  }
]

export default function Testimonials() {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_200px_at_50%_0%,rgba(56,189,248,0.15),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Loved by ambitious teams</h2>
          <p className="mt-3 text-white/70">Real stories from builders shipping revenue faster.</p>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 text-white/90">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (<Star key={i} className="h-4 w-4 text-amber-400" />))}
              </div>
              <blockquote className="mt-4 text-white/80">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm text-white/60">{t.name} • {t.role}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
