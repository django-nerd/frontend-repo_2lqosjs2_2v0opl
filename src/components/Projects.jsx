import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const allProjects = [
  { id: 1, title: 'E-commerce Redesign', tag: 'Web', image: 'https://images.unsplash.com/photo-1522199710521-72d69614c702?q=80&w=1200&auto=format&fit=crop', blurb: 'Modern storefront experience optimizing conversion.', details: 'Detailed case study content goes here. Goals, process, impact.' },
  { id: 2, title: 'Finance Dashboard', tag: 'Web', image: 'https://images.unsplash.com/photo-1703206848101-e0b15d418ddd?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxFLWNvbW1lcmNlJTIwUmVkZXNpZ258ZW58MHwwfHx8MTc2MzE3MTU1NXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', blurb: 'Data-rich analytics with realtime charts.', details: 'Details about technology, charts, and insights.' },
  { id: 3, title: 'Travel App', tag: 'Mobile', image: 'https://images.unsplash.com/photo-1703206848101-e0b15d418ddd?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxFLWNvbW1lcmNlJTIwUmVkZXNpZ258ZW58MHwwfHx8MTc2MzE3MTU1NXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', blurb: 'Plan and book trips with ease.', details: 'UX flows, booking engine, performance wins.' },
  { id: 4, title: 'Design System', tag: 'UI/UX', image: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=1200&auto=format&fit=crop', blurb: 'Scalable components and tokens.', details: 'Docs, tokens, component library.' },
]

const filters = ['All', 'Web', 'Mobile', 'UI/UX', 'Other']

export default function Projects() {
  const [active, setActive] = useState('All')
  const [selected, setSelected] = useState(null)

  const projects = useMemo(() => {
    if (active === 'All') return allProjects
    return allProjects.filter(p => p.tag === active)
  }, [active])

  return (
    <section id="projects" className="bg-neutral-950 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Selected Work</h2>
          <div className="flex flex-wrap gap-2">
            {filters.map(f => (
              <button key={f} onClick={() => setActive(f)} className={`px-3 py-1.5 rounded-full text-sm border ${active===f? 'bg-white text-neutral-900 border-white' : 'text-white/80 border-white/15 hover:bg-white/5'}`}>{f}</button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {projects.map(p => (
              <motion.button layoutId={`card-${p.id}`} key={p.id} onClick={() => setSelected(p)} initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} exit={{opacity:0}} transition={{duration:0.3}} className="group text-left rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10">
                <div className="aspect-[16/10] w-full bg-cover bg-center" style={{backgroundImage:`url(${p.image})`}} />
                <div className="p-4">
                  <h3 className="text-white font-semibold">{p.title}</h3>
                  <p className="mt-1 text-sm text-neutral-300">{p.blurb}</p>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="fixed inset-0 z-50 grid place-items-center bg-black/60 p-4" onClick={() => setSelected(null)}>
            <motion.div layoutId={`card-${selected.id}`} onClick={(e)=>e.stopPropagation()} className="max-w-3xl w-full rounded-2xl overflow-hidden bg-neutral-900 border border-white/10">
              <div className="aspect-video bg-cover bg-center" style={{backgroundImage:`url(${selected.image})`}} />
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-white text-xl font-semibold">{selected.title}</h3>
                  <button onClick={() => setSelected(null)} className="text-neutral-400 hover:text-white">Close</button>
                </div>
                <p className="mt-3 text-neutral-300">{selected.details}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
