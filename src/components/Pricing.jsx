import { Check } from 'lucide-react'

const tiers = [
  {
    name: 'Starter',
    price: 'Free',
    subtitle: 'For side projects and MVPs',
    features: ['1k payments / mo', 'Basic analytics', 'Community support']
  },
  {
    name: 'Growth',
    price: '$29',
    subtitle: 'For growing teams',
    features: ['50k payments / mo', 'Advanced dashboards', 'Priority support']
  },
  {
    name: 'Scale',
    price: 'Custom',
    subtitle: 'For scale-ups and enterprises',
    features: ['Unlimited volume', 'Premium SLAs', 'Dedicated solutions engineer']
  }
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Simple, usage-based pricing</h2>
          <p className="mt-3 text-white/70">Start free and scale transparently. Only pay more as you grow.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div key={t.name} className="rounded-3xl bg-white/5 ring-1 ring-white/10 p-6 text-white/90">
              <div className="flex items-baseline justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white">{t.name}</h3>
                  <p className="text-white/60 text-sm">{t.subtitle}</p>
                </div>
                <div className="text-3xl font-semibold">{t.price}<span className="text-base font-normal text-white/60">{t.price === '$29' ? '/mo' : ''}</span></div>
              </div>
              <ul className="mt-6 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-white/80">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 ring-1 ring-emerald-500/30">
                      <Check className="h-4 w-4 text-emerald-400" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#" className="mt-6 inline-flex w-full justify-center rounded-xl bg-white text-slate-900 px-5 py-3 font-medium hover:bg-white/90 transition">Choose {t.name}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
