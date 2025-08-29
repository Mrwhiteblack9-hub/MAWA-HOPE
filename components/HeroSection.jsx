'use client'
import Link from 'next/link'
import Countdown from './Countdown'
import Image from 'next/image'

export default function HeroSection({ buyUrl, lang = 'fr', dictHero = {}, banner = '/banner.webp' }) {
  const targetISO = '2025-09-13T00:00:00Z'

  // allow title as array or string (safe)
  const rawTitle = dictHero?.title ?? (typeof dictHero === 'string' ? dictHero : null)
  let titleParts = []
  if (Array.isArray(dictHero?.title)) titleParts = dictHero.title
  else if (typeof rawTitle === 'string') titleParts = rawTitle.split(',').map(s => s.trim())
  else if (typeof dictHero === 'string') titleParts = String(dictHero).split(',').map(s => s.trim())
  else titleParts = ['Force','Élégance','Communauté']

  const colors = dictHero?.colors ?? ['--mawa-blue','--mawa-white','--mawa-red']

  const renderColoredTitle = () => (
    <>
      {titleParts.map((word, i) => (
        <span key={i} style={{ color: `var(${colors[i] || colors[i%colors.length]})` }}>
          {word}{i < titleParts.length - 1 ? ', ' : ''}
        </span>
      ))}
    </>
  )

  return (
    <section id="hero" className="grid lg:grid-cols-5 gap-8 items-center py-8">
      {/* Texte */}
      <div className="lg:col-span-3">
        <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-white/5 text-xs">
          {dictHero?.tag ?? 'Mêmecoin sérieux'}
        </div>

        <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight text-white">
          MAWA — {renderColoredTitle()}
        </h1>

        <p className="mt-4 text-white/80 max-w-xl">
          {dictHero?.description ?? 'MAWA — A serious memecoin with a crocodile mascot.'}
        </p>

        <div className="mt-6 flex gap-3">
          {buyUrl && (
            <a href={buyUrl} target="_blank" rel="noreferrer" className="btn-primary">
              {dictHero?.buy_button ?? (lang === 'fr' ? 'Acheter sur Jupiter' : 'Buy on Jupiter')}
            </a>
          )}
          <Link href={`/${lang}/tokenomics`} className="px-5 py-2 rounded-2xl border border-white/10">
            {dictHero?.tokenomics_btn ?? (lang === 'fr' ? 'Tokenomics' : 'Tokenomics')}
          </Link>
        </div>

        <div className="mt-6">
          <Countdown targetISO={targetISO} />
        </div>

        <div className="mt-4 text-xs text-white/60">
          {dictHero?.contract_label ?? (lang === 'fr' ? 'Contrat SPL' : 'SPL Contract')} :{' '}
          <span className="font-mono bg-white/5 px-2 py-1 rounded">{dictHero?.contract_value ?? 'SOON...'}</span>
        </div>
      </div>

      {/* Image */}
      <div className="lg:col-span-2 flex justify-center lg:justify-end">
        <div className="w-full max-w-sm grid place-items-center">
          {banner ? (
            <Image
              src={banner}
              alt={dictHero?.banner ?? 'Bannière MAWA'}
              width={600}
              height={600}
              className="w-full h-auto rounded-lg shadow-lg object-contain"
              priority
            />
          ) : null}
        </div>
      </div>
    </section>
  )
}
