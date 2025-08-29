export default function HowToBuySection({ buyUrl }) {
  return (
    <section id="howtobuy">
      <div className="card">
        <h3 className="text-xl font-semibold">How to buy</h3>
        <ol className="mt-3 list-decimal pl-5 text-white/80">
          <li>Install a Solana wallet (Phantom).</li>
          <li>Get SOL and connect to Jupiter.</li>
          <li>Swap SOL for MAWA on Jupiter: <a href={buyUrl} target="_blank" rel="noreferrer" className="underline">Buy on Jupiter</a>.</li>
        </ol>
      </div>
    </section>
  )
}
