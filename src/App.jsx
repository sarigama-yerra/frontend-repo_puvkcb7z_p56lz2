import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="fixed inset-0 bg-[radial-gradient(1200px_600px_at_10%_-10%,rgba(59,130,246,0.35),transparent),radial-gradient(1000px_500px_at_110%_10%,rgba(34,211,238,0.30),transparent)]" />
      <div className="relative">
        <Navbar />
        <Hero />
        <Features />
        <Pricing />
        <Footer />
      </div>
    </div>
  )
}

export default App
