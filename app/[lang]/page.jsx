import { getDictionary } from '../../dictionaries'
import HeroSection from '../../components/HeroSection'
import AboutSection from '../../components/AboutSection'
import RoadmapSection from '../../components/RoadmapSection'
import TokenomicsSection from '../../components/TokenomicsSection'
import FAQSection from '../../components/FAQSection'
import HowToBuySection from '../../components/HowToBuySection'
import SocialSection from '../../components/SocialSection'

export default async function Home({ params: { lang } }) {
  const dict = await getDictionary(lang)
  return (
    <div>
      <section className="section">
        <div className="container">
          <HeroSection buyUrl={dict.buy_url} lang={lang} dictHero={dict.hero} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <AboutSection dict={dict} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <HowToBuySection buyUrl={dict.buy_url} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <TokenomicsSection dict={dict.tokenomics} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <RoadmapSection dict={dict.roadmap} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <FAQSection dict={dict.faq} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SocialSection social={dict.social} />
        </div>
      </section>
    </div>
  )
}
