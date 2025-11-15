import { useState, useEffect } from 'react'
import { Menu, X, Github, Linkedin, Instagram } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur-md bg-black/40 border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-violet-500 to-cyan-400 shadow-lg shadow-violet-500/20" />
          <span className="text-white/90 font-semibold tracking-wide">Your Name</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-white/70 hover:text-white transition-colors">
              {item.label}
            </a>
          ))}
          <div className="ml-4 hidden sm:flex items-center gap-4 text-white/70">
            <a href="#" aria-label="GitHub" className="hover:text-white"><Github size={18} /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-white"><Linkedin size={18} /></a>
            <a href="#" aria-label="Instagram" className="hover:text-white"><Instagram size={18} /></a>
          </div>
        </nav>

        <button onClick={() => setOpen(!open)} className="md:hidden text-white/80">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-4 pb-4">
          <div className="rounded-xl border border-white/10 bg-white/5 p-3 space-y-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block px-3 py-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
