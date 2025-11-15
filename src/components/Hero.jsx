import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-[#0B0D14] text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-[#0B0D14] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-36 pb-20 grid md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-white/80 text-xs mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Available for freelance work
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.05]">
            I'm Your Name
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-xl">
            I craft modern, high-performance websites and digital products with a focus on delightful user experiences.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="px-5 py-3 rounded-lg bg-white text-black font-medium shadow-lg shadow-white/10 hover:-translate-y-0.5 transition">Contact Me</a>
            <a href="#work" className="px-5 py-3 rounded-lg border border-white/20 text-white/90 hover:bg-white/10 transition">View My Work</a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} className="flex justify-center md:justify-end">
          <div className="relative w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-violet-500/40 to-cyan-400/40 blur-lg" />
            <div className="relative w-full h-full rounded-2xl bg-white/10 border border-white/10 backdrop-blur-md flex items-center justify-center overflow-hidden shadow-2xl">
              <div className="w-full h-full bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center text-white/60">
                {/* Profile image placeholder */}
                <span className="text-sm">Your Photo</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
