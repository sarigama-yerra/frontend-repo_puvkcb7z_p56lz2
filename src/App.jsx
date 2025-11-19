import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Logos from './components/Logos'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_10%_-10%,rgba(59,130,246,0.35),transparent),radial-gradient(1000px_500px_at_110%_10%,rgba(34,211,238,0.30),transparent)]" />
        <div className="absolute inset-x-0 top-[-10%] h-[500px] blur-3xl opacity-30 [background:conic-gradient(from_180deg_at_50%_50%,rgba(56,189,248,0.35),rgba(59,130,246,0.35),transparent_60%)]" />
      </div>
      <div className="relative">
        <Navbar />
        <Hero />
        <Logos />
        <Features />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CTA />
        <Footer />
      </div>
    </div>
  )
}

export default App
