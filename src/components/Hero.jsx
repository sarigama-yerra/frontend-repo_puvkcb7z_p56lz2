import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-40">
        <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-blue-500/30 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-[520px] w-[520px] rounded-full bg-cyan-400/30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-10 pb-20 md:pt-20 md:pb-28">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 ring-1 ring-white/20 px-3 py-1.5 text-xs text-white/80 mb-5">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Now in public beta
            </div>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white">
              Modern payments, designed for SaaS
            </h1>
            <p className="mt-5 text-white/70 text-lg max-w-xl">
              A glassmorphic fintech suite to accept cards, manage billing, and grow revenue — with elegant developer APIs and a stunning customer experience.
            </p>
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <a href="#pricing" className="inline-flex justify-center items-center gap-2 rounded-xl bg-white text-slate-900 px-5 py-3 font-medium hover:bg-white/90 transition">
                Get started free
              </a>
              <a href="#features" className="inline-flex justify-center items-center gap-2 rounded-xl bg-white/10 ring-1 ring-white/20 text-white px-5 py-3 font-medium hover:bg-white/20 transition">
                See features
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-white/60">
              <div className="text-sm">No card required</div>
              <div className="h-1 w-1 rounded-full bg-white/30" />
              <div className="text-sm">5-minute setup</div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/3] lg:aspect-[5/4] rounded-3xl overflow-hidden ring-1 ring-white/10 bg-gradient-to-br from-white/10 to-white/0 backdrop-blur-xl"
          >
            <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
