import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const sampleProjects = [
  { id: 1, title: 'E-commerce UI', tag: 'Web', image: 'https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?q=80&w=1200&auto=format&fit=crop', desc: 'A sleek storefront with smooth micro-interactions.' },
  { id: 2, title: 'Finance Dashboard', tag: 'Web', image: 'https://images.unsplash.com/photo-1657812159075-7f0abd98f7b8?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxFLWNvbW1lcmNlJTIwVUl8ZW58MHwwfHx8MTc2MzE3MTU5MHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', desc: 'Data-rich dashboard with charts and dark UI.' },
  { id: 3, title: 'Travel App', tag: 'Mobile', image: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1200&auto=format&fit=crop', desc: 'Mobile-first booking flows and maps.' },
  { id: 4, title: 'Brand Landing', tag: 'UI/UX', image: 'https://images.unsplash.com/photo-1510511233900-1982d92bd835?q=80&w=1200&auto=format&fit=crop', desc: 'Minimalist landing with editorial typography.' },
]

const filters = ['All', 'Web', 'Mobile', 'UI/UX']

export default function Portfolio() {
  const [active, setActive] = useState('All')
  const [selected, setSelected] = useState(null)

  const visible = active === 'All' ? sampleProjects : sampleProjects.filter(p => p.tag === active)

  return (
    <section id="work" className="bg-[#0B0D14] text-white py-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold">Selected Work</h2>

        <div className="mt-6 flex flex-wrap gap-2">
          {filters.map(f => (
            <button key={f} onClick={() => setActive(f)} className={`px-4 py-2 rounded-full border ${active === f ? 'bg-white text-black border-white' : 'border-white/20 text-white/80 hover:bg-white/10'}`}>
              {f}
            </button>
          ))}
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {visible.map(project => (
              <motion.button key={project.id} layout onClick={() => setSelected(project)} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group text-left">
                <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5">
                  <img src={project.image} alt="" className="h-52 w-full object-cover transition duration-500 group-hover:scale-105" />
                  <div className="p-4">
                    <div className="text-sm text-white/60">{project.tag}</div>
                    <div className="text-lg font-semibold">{project.title}</div>
                    <p className="text-white/70 text-sm mt-1">{project.desc}</p>
                  </div>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </div>

        <AnimatePresence>
          {selected && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4" onClick={() => setSelected(null)}>
              <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 10, opacity: 0 }} onClick={(e) => e.stopPropagation()} className="max-w-3xl w-full rounded-2xl overflow-hidden bg-[#0B0D14] border border-white/10">
                <img src={selected.image} alt="" className="h-72 w-full object-cover" />
                <div className="p-6">
                  <div className="text-sm text-white/60">{selected.tag}</div>
                  <h3 className="text-2xl font-semibold">{selected.title}</h3>
                  <p className="text-white/80 mt-2">{selected.desc} This is a placeholder detail. Replace with tech stack, responsibilities, and results.</p>
                  <div className="mt-4 flex gap-3">
                    <a href="#" className="px-4 py-2 rounded-lg bg-white text-black">Live Demo</a>
                    <a href="#" className="px-4 py-2 rounded-lg border border-white/20 text-white/90">Source</a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
