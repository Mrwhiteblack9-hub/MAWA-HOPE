import Link from 'next/link'
import LanguageSwitcher from './LanguageSwitcher'

export default function Header({ lang, nav, buy_url }){
  return (
    <header className="w-full border-b border-white/10 bg-mawa-bg/80 backdrop-blur-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href={`/${lang}`} className="flex items-center gap-3">
          <img src="/logo.jpg" alt="MAWA Logo" className="w-10 h-10 rounded-full"/>
          <span className="font-semibold text-xl">MAWA</span>
        </Link>

        <nav className="hidden md:flex gap-6 items-center text-sm">
          <Link href={`/${lang}/about`}>{nav.about}</Link>
          <Link href={`/${lang}/tokenomics`}>{nav.tokenomics}</Link>
          <Link href={`/${lang}/roadmap`}>{nav.roadmap}</Link>
          <a className="btn-primary" href={buy_url} target="_blank" rel="noopener noreferrer">{nav.buy}</a>
          <LanguageSwitcher currentLang={lang} />
        </nav>
        <div className="md:hidden">
          <LanguageSwitcher currentLang={lang} />
        </div>
      </div>
    </header>
  )
}
