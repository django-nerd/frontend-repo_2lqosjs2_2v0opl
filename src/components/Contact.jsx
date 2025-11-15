import { useState } from 'react'
import { Mail, Github, Linkedin, Instagram } from 'lucide-react'

export default function Contact() {
  const [status, setStatus] = useState(null)
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || ''

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = {
      name: form.get('name'),
      email: form.get('email'),
      message: form.get('message'),
      source: 'portfolio'
    }
    setStatus('loading')
    try {
      const res = await fetch(`${BACKEND_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('success')
      e.currentTarget.reset()
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="bg-[#0B0D14] text-white py-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold">Get In Touch</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-4">
            <div>
              <label className="text-sm text-white/70">Name</label>
              <input name="name" required className="mt-1 w-full rounded-lg bg-black/30 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-violet-500" placeholder="Your full name" />
            </div>
            <div>
              <label className="text-sm text-white/70">Email</label>
              <input type="email" name="email" required className="mt-1 w-full rounded-lg bg-black/30 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-violet-500" placeholder="you@example.com" />
            </div>
            <div>
              <label className="text-sm text-white/70">Message</label>
              <textarea name="message" rows="5" required className="mt-1 w-full rounded-lg bg-black/30 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-violet-500" placeholder="Tell me about your project" />
            </div>
            <button className="w-full px-4 py-3 rounded-lg bg-white text-black font-medium">Send Message</button>
            {status === 'loading' && <p className="text-white/70 text-sm">Sending…</p>}
            {status === 'success' && <p className="text-emerald-400 text-sm">Thanks! I will get back to you shortly.</p>}
            {status === 'error' && <p className="text-rose-400 text-sm">Something went wrong. Try again later.</p>}
          </form>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-white/80">Prefer email?</div>
            <a href="mailto:you@example.com" className="mt-2 inline-flex items-center gap-2 text-white">
              <Mail size={18} /> you@example.com
            </a>
            <div className="mt-6 text-white/70 text-sm">Or find me on</div>
            <div className="mt-3 flex gap-3 text-white/80">
              <a href="#" aria-label="GitHub" className="hover:text-white"><Github /></a>
              <a href="#" aria-label="LinkedIn" className="hover:text-white"><Linkedin /></a>
              <a href="#" aria-label="Instagram" className="hover:text-white"><Instagram /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
