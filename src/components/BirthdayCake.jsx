import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { StarField } from './Ambience'

const CANDLE_COUNT = 5

function Confetti({ active }) {
  const pieces = useMemo(
    () =>
      Array.from({ length: 42 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 0.5,
        duration: Math.random() * 1.2 + 1.6,
        rotate: Math.random() * 360,
        color: ['#c9a24b', '#c98ba0', '#e8c9ce', '#f6ecdf', '#5c1a30'][i % 5],
        size: Math.random() * 6 + 4,
      })),
    []
  )

  if (!active) return null

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {pieces.map((p) => (
        <motion.span
          key={p.id}
          initial={{ y: -20, x: 0, opacity: 1, rotate: 0 }}
          animate={{ y: '100vh', x: (Math.random() - 0.5) * 120, opacity: 0, rotate: p.rotate }}
          transition={{ duration: p.duration, delay: p.delay, ease: 'easeIn' }}
          style={{
            position: 'absolute',
            top: 0,
            left: `${p.left}%`,
            width: p.size,
            height: p.size * 0.4,
            background: p.color,
            borderRadius: 2,
          }}
        />
      ))}
    </div>
  )
}

function RisingHearts({ active }) {
  const hearts = useMemo(
    () =>
      Array.from({ length: 14 }).map((_, i) => ({
        id: i,
        left: 30 + Math.random() * 40,
        delay: Math.random() * 0.8,
        duration: Math.random() * 1.5 + 2.5,
        size: Math.random() * 14 + 12,
      })),
    []
  )

  if (!active) return null

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {hearts.map((h) => (
        <motion.span
          key={h.id}
          initial={{ y: 0, opacity: 0, scale: 0.6 }}
          animate={{ y: -260, opacity: [0, 1, 0], scale: 1 }}
          transition={{ duration: h.duration, delay: h.delay, ease: 'easeOut' }}
          style={{
            position: 'absolute',
            bottom: '40%',
            left: `${h.left}%`,
            fontSize: h.size,
            color: '#c98ba0',
          }}
        >
          ❤
        </motion.span>
      ))}
    </div>
  )
}

function Cake({ blown }) {
  return (
    <div className="relative flex flex-col items-center">
      {/* Candles */}
      <div className="flex gap-4 mb-1">
        {Array.from({ length: CANDLE_COUNT }).map((_, i) => (
          <div key={i} className="flex flex-col items-center">
            <AnimatePresence>
              {!blown && (
                <motion.div
                  initial={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0, y: -6 }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="w-2 h-3 rounded-full mb-0.5 origin-bottom animate-flicker"
                  style={{
                    background: 'radial-gradient(circle, #ffe9b3 0%, #f0a94e 60%, #c9662c 100%)',
                    boxShadow: '0 0 10px 3px rgba(243,169,74,0.6)',
                  }}
                />
              )}
            </AnimatePresence>
            <div className="w-1.5 h-7 sm:h-9 rounded-sm bg-gradient-to-b from-blush to-rose" />
          </div>
        ))}
      </div>

      {/* Cake tiers */}
      <div className="w-56 sm:w-64 h-10 rounded-t-2xl bg-gradient-to-b from-cream to-blush shadow-inner" />
      <div className="w-64 sm:w-72 h-12 bg-gradient-to-b from-rose to-wine" />
      <div className="w-72 sm:w-80 h-14 rounded-b-lg bg-gradient-to-b from-wine to-burgundy shadow-xl" />

      <motion.div
        animate={
          blown
            ? { boxShadow: '0 0 90px 20px rgba(201,162,75,0.35)' }
            : { boxShadow: '0 0 0px 0px rgba(201,162,75,0)' }
        }
        transition={{ duration: 1.2 }}
        className="absolute -inset-6 rounded-full -z-10"
      />
    </div>
  )
}

export default function BirthdayCake() {
  const [blown, setBlown] = useState(false)

  return (
    <section
      id="cake"
      className="section-wrap bg-gradient-to-b from-burgundy via-[#2c0f1c] to-midnight relative"
    >
      <StarField count={30} />
      <Confetti active={blown} />
      <RisingHearts active={blown} />

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.8 }}
        className="heading-serif text-gold/90 text-sm sm:text-base tracking-[0.25em] uppercase mb-2"
      >
        Before we continue...
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="heading-serif text-cream text-3xl sm:text-4xl mb-12 text-center"
      >
        Make a wish. ✨
      </motion.h2>

      <div className="relative z-10 my-6">
        <Cake blown={blown} />
      </div>

      <div className="relative z-10 mt-10 min-h-[6rem] flex flex-col items-center text-center max-w-md px-4">
        <AnimatePresence mode="wait">
          {!blown ? (
            <motion.button
              key="btn"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={() => setBlown(true)}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-wine to-burgundy border border-gold/40 px-7 py-3 text-cream heading-serif text-base sm:text-lg shadow-lg transition-transform hover:scale-105 active:scale-95"
            >
              <Sparkles className="h-4 w-4 text-gold" />
              Make a Wish &amp; Blow the Candles 🕯️
            </motion.button>
          ) : (
            <motion.div
              key="text"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.9 }}
              className="flex flex-col items-center gap-4"
            >
              <p className="heading-serif text-gold text-xl sm:text-2xl">Wish made? ❤️</p>
              <p className="font-body text-cream/85 text-lg leading-relaxed">
                I hope it comes true... because you deserve every beautiful thing in this world.
              </p>
              <a
                href="#memories"
                className="mt-4 text-cream/90 border-b border-gold/50 pb-1 heading-serif tracking-wide hover:text-gold transition-colors"
              >
                There's more... →
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
