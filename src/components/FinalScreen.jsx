import { motion } from 'framer-motion'
import { RotateCcw } from 'lucide-react'
import { StarField, FloatingHearts } from './Ambience'
import birthdayData from '../data/birthdayData'

export default function FinalScreen() {
  const { heading, date, wishLines, closingLine, signOff } = birthdayData.finalMessage

  const replay = () => {
    document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="final"
      className="section-wrap min-h-[100svh] bg-gradient-to-b from-burgundy via-[#22101a] to-midnight relative"
    >
      <StarField count={80} />
      <FloatingHearts count={12} />

      <div className="relative z-10 max-w-xl text-center flex flex-col items-center gap-6 px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1 }}
          className="heading-serif text-cream text-3xl sm:text-5xl text-shadow-soft"
        >
          {heading}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="heading-serif text-gold tracking-[0.3em] uppercase text-sm"
        >
          {date}
        </motion.p>

        <div className="mt-4 space-y-1">
          {wishLines.map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.7, delay: 0.4 + i * 0.12 }}
              className="font-body text-cream/85 text-lg sm:text-xl leading-relaxed"
            >
              {line}
            </motion.p>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="heading-serif text-gold text-xl sm:text-2xl mt-4"
        >
          {closingLine}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="font-body text-cream/70 italic mt-6 whitespace-pre-line leading-relaxed"
        >
          {signOff}
        </motion.p>

        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.8, delay: 2 }}
          onClick={replay}
          className="mt-10 inline-flex items-center gap-2 rounded-full border border-gold/40 px-6 py-3 text-cream heading-serif hover:bg-gold/10 hover:border-gold transition-colors"
        >
          <RotateCcw className="h-4 w-4 text-gold" />
          Replay Our Little Story
        </motion.button>
      </div>
    </section>
  )
}
