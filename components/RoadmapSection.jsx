export default function RoadmapSection({ dict = {} }) {
  const roadmap = dict?.phases || {
    1: { title: 'Phase 1: Foundation', status: 'COMPLETED', desc: 'Premium branding, site launched, initial community.' },
    2: { title: 'Phase 2: Community Growth', status: 'IN PROGRESS', desc: 'Social expansion, engagement.' },
    3: { title: 'Phase 3: Jupiter Launch', status: 'PLANNED • 2025-09-13', desc: 'Official launch on Jupiter, initial liquidity.' },
    4: { title: 'Phase 4: DEX Expansion', status: 'PLANNED', desc: 'Listings on major Solana DEXs.' },
    5: { title: 'Phase 5: CEX Listings', status: 'PLANNED', desc: 'Centralized exchange listings.' },
    6: { title: 'Phase 6: Ecosystem Development', status: 'PLANNED', desc: 'Merch, NFTs, rewards.' }
  }

  return (
    <section id="roadmap" className="py-16">
      <div className="max-w-5xl mx-auto text-white">
        <h2 className="text-3xl font-bold mb-6">{dict?.title ?? 'The MAWA Journey'}</h2>
        <div className="space-y-6">
          {Object.keys(roadmap).map((k) => {
            const p = roadmap[k]
            return (
              <div key={k} className="card">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">{p.title}</h3>
                    <p className="text-sm text-white/70">{p.desc}</p>
                  </div>
                  <div className="text-sm font-bold text-white/80">{p.status}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
