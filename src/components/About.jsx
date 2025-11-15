import { Code2, Palette, Rocket } from 'lucide-react'
import { motion } from 'framer-motion'

export default function About() {
  const skills = [
    { name: 'React', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'UI/UX', level: 75 },
    { name: 'Performance', level: 88 },
  ]

  return (
    <section id="about" className="relative bg-[#0B0D14] text-white py-24">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-start">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
          <p className="mt-4 text-white/80">
            I'm a product-focused developer who loves crafting sleek, reliable web experiences. I believe great design and sound engineering go hand in hand.
          </p>
          <div className="mt-6 grid grid-cols-3 gap-4">
            <div className="rounded-xl bg-white/5 border border-white/10 p-4 flex flex-col items-center text-center">
              <Code2 className="text-cyan-300" />
              <span className="mt-2 text-sm text-white/70">Clean Code</span>
            </div>
            <div className="rounded-xl bg-white/5 border border-white/10 p-4 flex flex-col items-center text-center">
              <Palette className="text-violet-300" />
              <span className="mt-2 text-sm text-white/70">Design</span>
            </div>
            <div className="rounded-xl bg-white/5 border border-white/10 p-4 flex flex-col items-center text-center">
              <Rocket className="text-emerald-300" />
              <span className="mt-2 text-sm text-white/70">Performance</span>
            </div>
          </div>
          <a href="#" className="inline-block mt-6 px-5 py-3 rounded-lg border border-white/20 text-white/90 hover:bg-white/10">Download CV</a>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
          <div className="space-y-4">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between text-sm text-white/70">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="mt-2 h-2 rounded-full bg-white/10 overflow-hidden">
                  <div className="h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-400" style={{ width: `${skill.level}%` }} />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
