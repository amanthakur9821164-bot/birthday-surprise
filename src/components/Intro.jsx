import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { StarField, FloatingHearts } from './Ambience'
import birthdayData from '../data/birthdayData'

export default function Intro({ onStart }) {
  const [lineIndex, setLineIndex] = useState(0)
  const lines = birthdayData.introLines
  const isLastLine = lineIndex >= lines.length - 1

  useEffect(() => {
    if (isLastLine) return
    const timer = setTimeout(() => setLineIndex((i) => i + 1), 2200)
    return () => clearTimeout(timer)
  }, [lineIndex, isLastLine])

  return (
    <section
      id="home"
      className="section-wrap min-h-[100svh] bg-gradient-to-b from-midnight via-[#22121a] to-burgundy"
    >
      <StarField count={70} />
      <FloatingHearts count={8} />

      <div className="relative z-10 max-w-2xl text-center px-4">
        <AnimatePresence mode="wait">
          <motion.p
            key={lineIndex}
            initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -16, filter: 'blur(6px)' }}
            transition={{ duration: 1.1, ease: 'easeOut' }}
            className="heading-serif text-shadow-soft text-cream text-[7vw] sm:text-4xl md:text-5xl leading-snug"
          >
            {lines[lineIndex]}
          </motion.p>
        </AnimatePresence>

        <AnimatePresence>
          {isLastLine && (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.9 }}
              onClick={onStart}
              className="group mt-12 inline-flex items-center gap-3 rounded-full border border-gold/50 bg-cream/5 px-8 py-3 text-cream heading-serif text-lg tracking-wide backdrop-blur-sm transition-colors hover:bg-gold/10 hover:border-gold"
            >
              Start Your Surprise
              <ArrowRight className="h-5 w-5 text-gold transition-transform group-hover:translate-x-1" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      <motion.div
        animate={{ opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold/60 text-xs tracking-[0.3em] uppercase font-body"
      >
        {isLastLine ? '' : ''}
      </motion.div>
    </section>
  )
}
