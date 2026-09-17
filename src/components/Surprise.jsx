import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { StarField } from './Ambience'
import birthdayData from '../data/birthdayData'

export default function Surprise() {
  const [revealed, setRevealed] = useState(false)
  const [lineIndex, setLineIndex] = useState(0)
  const lines = birthdayData.secretSurprise

  const begin = () => {
    setRevealed(true)
    setLineIndex(0)
    lines.forEach((_, i) => {
      setTimeout(() => setLineIndex(i), i === 0 ? 400 : i * 2200)
    })
  }

  return (
    <section
      id="surprise"
      className="section-wrap bg-midnight py-28 relative overflow-hidden"
    >
      <StarField count={60} />

      <AnimatePresence mode="wait">
        {!revealed ? (
          <motion.button
            key="cta"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={begin}
            className="relative z-10 heading-serif text-cream/90 text-xl sm:text-2xl border-b border-gold/40 pb-2 hover:text-gold transition-colors"
          >
            There's one last thing... 👀
          </motion.button>
        ) : (
          <motion.div
            key="reveal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative z-10 max-w-lg text-center min-h-[8rem] flex items-center justify-center"
          >
            <AnimatePresence mode="wait">
              <motion.p
                key={lineIndex}
                initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -14, filter: 'blur(8px)' }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="heading-serif text-cream text-2xl sm:text-3xl text-shadow-soft"
              >
                {lines[lineIndex]}
              </motion.p>
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {revealed && lineIndex === lines.length - 1 && (
          <HeartBurst />
        )}
      </AnimatePresence>
    </section>
  )
}

function HeartBurst() {
  const hearts = Array.from({ length: 24 }).map((_, i) => {
    const angle = (i / 24) * Math.PI * 2
    return {
      id: i,
      x: Math.cos(angle) * (120 + Math.random() * 60),
      y: Math.sin(angle) * (120 + Math.random() * 60),
      delay: Math.random() * 0.3,
      size: Math.random() * 14 + 14,
    }
  })

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      className="pointer-events-none absolute inset-0 flex items-center justify-center"
    >
      {hearts.map((h) => (
        <motion.span
          key={h.id}
          initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
          animate={{ x: h.x, y: h.y, opacity: [0, 1, 0], scale: 1 }}
          transition={{ duration: 2.4, delay: 1.2 + h.delay, ease: 'easeOut' }}
          style={{ position: 'absolute', fontSize: h.size, color: '#c9a24b' }}
        >
          ❤
        </motion.span>
      ))}
    </motion.div>
  )
}
