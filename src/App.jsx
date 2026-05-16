import useReveal from './hooks/useReveal.js'

import Nav from './sections/Nav.jsx'
import Hero from './sections/Hero.jsx'
import Marquee from './sections/Marquee.jsx'
import Services from './sections/Services.jsx'
import CaseStudies from './sections/CaseStudies.jsx'
import Architecture from './sections/Architecture.jsx'
import Technology from './sections/Technology.jsx'
import About from './sections/About.jsx'
import CTA from './sections/CTA.jsx'
import Footer from './sections/Footer.jsx'

export default function App() {
  useReveal()

  return (
    <main className="relative z-[2]">
      <Nav />
      <Hero />
      <Marquee />
      <Services />
      <CaseStudies />
      <Architecture />
      <Technology />
      <About />
      <CTA />
      <Footer />
    </main>
  )
}
