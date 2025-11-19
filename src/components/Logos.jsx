export default function Logos() {
  const logos = ["Nova", "Vertex", "Pulse", "Nimbus", "Aurora", "Orbit", "Quanta", "Lumen"]
  return (
    <section className="relative py-10">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-white/50">Trusted by modern teams</p>
        <div className="mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
          <div className="flex gap-10 animate-[marquee_28s_linear_infinite] hover:[animation-play-state:paused]">
            {[...logos, ...logos].map((name, idx) => (
              <div key={idx} className="shrink-0 h-10 px-6 rounded-xl bg-white/5 ring-1 ring-white/10 backdrop-blur-sm flex items-center text-white/70 text-sm">
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      `}</style>
    </section>
  )
}
