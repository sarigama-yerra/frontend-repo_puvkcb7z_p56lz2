import { Menu, CreditCard, Sparkles } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="relative z-20">
      <div className="mx-auto max-w-7xl px-6 py-5">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 ring-1 ring-white/10 shadow-lg shadow-blue-500/30 flex items-center justify-center">
              <CreditCard className="h-5 w-5 text-white" />
            </div>
            <span className="text-white font-semibold tracking-tight text-lg">GlacioPay</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
            <a href="#faq" className="hover:text-white transition">FAQ</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="px-4 py-2 rounded-lg text-white/80 hover:text-white transition">Sign in</a>
            <a href="#pricing" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-slate-900 font-medium hover:bg-white/90 transition">
              <Sparkles className="h-4 w-4" />
              Start free
            </a>
          </div>

          <button onClick={() => setOpen(v => !v)} className="md:hidden rounded-lg p-2 text-white/80 hover:text-white hover:bg-white/10">
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-4 rounded-2xl bg-white/5 backdrop-blur-sm ring-1 ring-white/10 p-4 text-white/90 space-y-3">
            <a href="#features" className="block">Features</a>
            <a href="#pricing" className="block">Pricing</a>
            <a href="#faq" className="block">FAQ</a>
            <div className="pt-2 flex gap-3">
              <a href="#" className="px-3 py-2 rounded-lg bg-white/10">Sign in</a>
              <a href="#pricing" className="px-3 py-2 rounded-lg bg-white text-slate-900 font-medium">Start free</a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
