export default function TokenomicsSection({ dict = {} }) {
  // Accept dict.tokenomics or fallback to dict.home fields
  const t = dict || {}
  const params = t.params || t || {}
  const percentages = t.percentages || { liquidity: '78%', vested: '2%', migrating: '20%' }

  return (
    <section id="tokenomics" className="py-16">
      <div className="max-w-4xl mx-auto text-white">
        <h2 className="text-3xl font-bold mb-6">{t.title ?? 'Tokenomics'}</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="card">
            <h3 className="font-semibold">Distribution</h3>
            <ul className="mt-4 text-white/80 space-y-2">
              <li>Liquidity (DEX): <strong>{percentages.liquidity}</strong></li>
              <li>Vested: <strong>{percentages.vested}</strong></li>
              <li>Migrating supply: <strong>{percentages.migrating}</strong></li>
            </ul>
          </div>

          <div className="card">
            <h3 className="font-semibold">{t.params_title ?? 'MAWA token parameters'}</h3>
            <ul className="mt-4 text-white/80 space-y-2">
              <li>{params.supply ?? 'Supply: 1,000,000,000'}</li>
              <li>{params.decimals ?? 'Decimals: 9'}</li>
              <li>{params.mint ?? 'Mint authority: renounced'}</li>
              <li>{params.lock ?? 'LP lock: 12 months'}</li>
              <li>{params.tax ?? 'Tax: 2%'}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
