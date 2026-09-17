import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { RefreshCw } from 'lucide-react'
import { StarField } from './Ambience'
import birthdayData from '../data/birthdayData'

export default function Reasons() {
  const reasons = birthdayData.randomReasons
  const [index, setIndex] = useState(0)

  const nextReason = () => {
    setIndex((prev) => {
      if (reasons.length <= 1) return prev
      let next = Math.floor(Math.random() * reasons.length)
      while (next === prev) next = Math.floor(Math.random() * reasons.length)
      return next
    })
  }

  return (
    <section
      id="reasons"
      className="section-wrap bg-gradient-to-b from-burgundy via-[#2c0f1c] to-midnight relative"
    >
      <StarField count={24} />
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.8 }}
        className="heading-serif text-cream text-3xl sm:text-4xl text-center mb-12"
      >
        Need another reason? ❤️
      </motion.h2>

      <div className="relative z-10 w-full max-w-md">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.96 }}
            transition={{ duration: 0.5 }}
            className="glass-card rounded-2xl px-8 py-12 text-center min-h-[10rem] flex items-center justify-center"
          >
            <p className="heading-serif text-cream text-xl sm:text-2xl leading-relaxed">
              {reasons[index]}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      <button
        onClick={nextReason}
        className="relative z-10 mt-8 inline-flex items-center gap-2 rounded-full border border-gold/40 px-6 py-3 text-cream heading-serif hover:bg-gold/10 hover:border-gold transition-colors"
      >
        <RefreshCw className="h-4 w-4 text-gold" />
        Give me another reason
      </button>
    </section>
  )
}
