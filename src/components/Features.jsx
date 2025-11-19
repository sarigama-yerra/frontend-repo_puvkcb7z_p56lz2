import { Shield, Zap, Layers, Globe } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Bank‑grade security',
    desc: 'TLS 1.3 everywhere, tokenized card data, SCA-ready flows, and automated risk checks.'
  },
  {
    icon: Zap,
    title: 'Real-time analytics',
    desc: 'Live dashboards with MRR, churn, cohort analysis, and anomaly alerts out of the box.'
  },
  {
    icon: Layers,
    title: 'Flexible billing',
    desc: 'Subscriptions, usage-based pricing, add-ons, and taxes — all in a single API.'
  },
  {
    icon: Globe,
    title: 'Global coverage',
    desc: 'Local payment methods in 40+ countries with automatic currency conversion.'
  }
]

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Everything you need to charge and grow</h2>
          <p className="mt-3 text-white/70">Plug-and-play primitives for modern SaaS with built-in compliance and delightful UX.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 text-white/90 hover:bg-white/7 transition">
              <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center ring-1 ring-white/20 shadow-lg shadow-blue-500/30">
                <f.icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="mt-4 font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
