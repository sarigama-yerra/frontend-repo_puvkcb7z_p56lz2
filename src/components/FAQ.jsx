const faqs = [
  {
    q: 'How long does integration take?',
    a: 'Most teams ship the first payments in under an hour with our copy-paste SDKs and clear guides.'
  },
  {
    q: 'Do you support global payment methods?',
    a: 'Yes. Cards, wallets, and local rails in 40+ countries with automatic currency conversion.'
  },
  {
    q: 'What about security and compliance?',
    a: 'We handle PCI DSS, tokenization, and SCA. You get audit trails and role-based access controls.'
  },
  {
    q: 'Can I migrate from Stripe or Paddle?',
    a: 'Absolutely. We offer assisted migration tools and map subscriptions with zero downtime.'
  }
]

export default function FAQ() {
  return (
    <section id="faq" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Questions, answered</h2>
          <p className="mt-3 text-white/70">If you can’t find what you’re looking for, reach out and we’ll help.</p>
        </div>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {faqs.map((f) => (
            <div key={f.q} className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 text-white/80">
              <h3 className="font-medium text-white">{f.q}</h3>
              <p className="mt-2 text-sm text-white/70">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
