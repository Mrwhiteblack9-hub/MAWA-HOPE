import '../globals.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { getDictionary } from '../../dictionaries'

export const metadata = {
  title: 'MAWA — The Serious Meme Revolution',
  description: 'MAWA — A serious memecoin with a crocodile mascot, premium branding, and a strong community.'
}

export default async function RootLayout({ children, params }) {
  const dict = await getDictionary(params.lang)
  return (
    <html lang={params.lang}>
      <body>
        <Header lang={params.lang} nav={dict.nav} buy_url={dict.buy_url} />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
