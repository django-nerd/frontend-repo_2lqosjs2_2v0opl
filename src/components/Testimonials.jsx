import { Quote } from 'lucide-react'

const items = [
  { name: 'Alex Morgan', role: 'Product Lead', quote: 'An absolute pleasure to work with — consistently delivers exceptional quality and polish.' },
  { name: 'Priya Shah', role: 'Founder', quote: 'Understood our vision quickly and brought it to life with beautiful design and clean code.' },
  { name: 'Daniel Kim', role: 'CTO', quote: 'Reliable, thoughtful, and detail-oriented. Highly recommend for any critical web project.' },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#0B0D14] text-white py-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold">Testimonials</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {items.map((t) => (
            <div key={t.name} className="rounded-2xl border border-white/10 bg-white/5 p-6 relative">
              <Quote className="absolute -top-3 -left-3 text-white/20" />
              <p className="text-white/80">“{t.quote}”</p>
              <div className="mt-4 text-sm text-white/70">{t.name} · {t.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
