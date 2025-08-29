export default function FAQSection({ dict = {} }) {
  const items = dict?.items || [
    { q: 'Why choose MAWA?', a: 'MAWA stands out with premium branding, long-term vision, locked liquidity (12 months) and transparent tokenomics.' },
    { q: 'Why a crocodile?', a: 'Crocodiles symbolize resilience, patience and strength.' },
    { q: 'When is launch?', a: 'Official launch planned for 13 September 2025. Follow socials for exact timing.' },
    { q: 'Is liquidity locked?', a: 'Yes — locked for 12 months with verifiable on-chain lock.' },
    { q: 'How to join?', a: 'Join us on X/Twitter and Telegram.' },
    { q: 'Tokenomics & fees?', a: 'Supply 1,000,000,000. Distribution: Liquidity 78%, Vested 2%, Migrating supply 20%. Tax: 2%.' }
  ]

  return (
    <section id="faq" className="py-16">
      <div className="max-w-4xl mx-auto text-white">
        <h2 className="text-3xl font-bold mb-6">{dict?.title ?? 'FAQ'}</h2>
        <div className="space-y-4">
          {items.map((it, idx) => (
            <details key={idx} className="card">
              <summary className="font-semibold cursor-pointer">{it.q}</summary>
              <div className="mt-2 text-white/80">{it.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
