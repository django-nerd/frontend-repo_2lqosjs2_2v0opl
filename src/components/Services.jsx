import { Code, MonitorSmartphone, PenTool, Sparkles } from 'lucide-react'

const services = [
  { icon: Code, title: 'Web Development', desc: 'High-quality, scalable frontends with robust architecture.' },
  { icon: MonitorSmartphone, title: 'Responsive Design', desc: 'Seamless experiences across desktop, tablet and mobile.' },
  { icon: PenTool, title: 'UI/UX Design', desc: 'Pixel-perfect interfaces with strong visual hierarchy.' },
  { icon: Sparkles, title: 'Performance & SEO', desc: 'Fast load times, accessibility and search optimization.' },
]

export default function Services() {
  return (
    <section id="services" className="bg-[#0B0D14] text-white py-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold">Services</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-500/40 to-cyan-400/40 flex items-center justify-center mb-3">
                <Icon className="text-white" size={18} />
              </div>
              <div className="font-semibold">{title}</div>
              <p className="text-white/70 text-sm mt-1">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
