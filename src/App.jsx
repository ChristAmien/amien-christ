import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Technologies } from './components/Technologies'
import { Experiences } from './components/Experiences'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import { Footer } from './components/footer/Footer'
import { LoadingScreen } from './components/LoadingScreen'

function App() {
  const [loading, setLoading] = useState(true)

  return (
    <div className="relative min-h-screen w-full overflow-x-clip bg-slate-950">

      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}

      {/* Background */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div>

      {/* Contenu */}
      <div className={`relative z-10 transition-opacity duration-500 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <div className="container mx-auto px-8">
          <Navbar />
          <Hero />
          <About />
        </div>

        {/* Projects (scroll horizontal) */}
        <Projects />

        <div className="container mx-auto px-8">
          <Technologies />
          <Certifications />
          <Experiences />
          <Contact />
        </div>

        {/* Footer */}
        <Footer />
      </div>

    </div>
  )
}

export default App