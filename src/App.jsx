import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Technologies } from './components/Technologies'
import { Experiences } from './components/Experiences'
import { Projects } from './components/Projects'
import  Certifications  from './components/Certifications'
import Contact from './components/Contact'
import { Footer } from './components/Footer'

function App() {

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-slate-950">

      {/* Background */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div>

      {/* Contenu */}
      <div className="relative z-10 container mx-auto px-8">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Technologies />
        <Certifications />
        <Experiences />
        <Contact />
      </div>

      {/* Footer */}
      <Footer />

    </div>
  )
}

export default App