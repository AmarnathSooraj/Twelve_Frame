import Navbar from '../../layouts/Navbar'
import Footer from '../../layouts/Footer'
import Hero from './Hero'
import Work from './Work'
import Services from './Services'
import FAQ from './FAQ'
import CTA from './CTA'

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-ground text-ink">
      <div className="relative overflow-clip rounded-xl bg-primary ring-1 ring-ink/10">
        <Navbar />
        <main id="main">
          <Hero />
          <Work />
          <Services />
          <FAQ />
          <CTA />
        </main>
        <Footer />
      </div>
    </div>
  )
}
