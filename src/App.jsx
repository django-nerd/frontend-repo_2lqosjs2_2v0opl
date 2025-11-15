import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'

function App() {
  return (
    <div className="bg-[#0B0D14] text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Services />
        <Testimonials />
        <Contact />
        <footer className="border-t border-white/10 py-10 text-center text-white/60">
          © {new Date().getFullYear()} Your Name — All rights reserved.
        </footer>
      </main>
    </div>
  )
}

export default App
