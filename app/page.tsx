
import { Header } from '@/components/Header'
import Hero from '@/components/hero/Hero'
import Stats from '@/components/Stats'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Services from '@/components/Services'
import Process from '@/components/Process'
import Portfolio from '@/components/Portfolio'
import Pricing from '@/components/Pricing'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import CTA from '@/components/CTA'
import Contact from '@/components/Contact'
import { Footer } from '@/components/Footer'
import { Chatbot } from '@/components/Chatbot'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <Skills />
        <Services />
        <Process />
        <Portfolio />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CTA />
        <Contact />
        <Chatbot />
      </main>
      <Footer />
    </>
  )
}
