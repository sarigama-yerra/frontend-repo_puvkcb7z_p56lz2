import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 to-white/5 p-8 ring-1 ring-white/10">
          <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-cyan-400/30 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-blue-500/30 blur-3xl" />
          <div className="relative grid lg:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">Start processing in minutes</h3>
              <p className="mt-3 text-white/70 max-w-xl">Create an account, paste a single API key, and go live with SCA-ready flows. No contracts. Cancel anytime.</p>
            </div>
            <div className="flex justify-end">
              <a href="#pricing" className="inline-flex items-center gap-2 rounded-xl bg-white text-slate-900 px-5 py-3 font-medium hover:bg-white/90 transition">
                Create your free account
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
