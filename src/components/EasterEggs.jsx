import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, Sparkles } from 'lucide-react'
import { StarField } from './Ambience'

function SignatureHeart() {
  const [revealed, setRevealed] = useState(false)
  return (
    <div className="flex flex-col items-center gap-3">
      <button
        onClick={() => setRevealed((r) => !r)}
        aria-label="A tiny secret heart"
        className="text-rose/70 hover:text-gold transition-colors text-2xl"
      >
        <span aria-hidden="true">💗</span>
        <span className="sr-only">A</span>
      </button>
      <AnimatePresence>
        {revealed && (
          <motion.p
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="font-body text-cream/80 text-sm text-center max-w-[14rem]"
          >
            Yep... I put myself somewhere here too. 😌❤️
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  )
}

function LoveCalculator() {
  const [stage, setStage] = useState('idle') // idle | calculating | done
  const steps = [0, 25, 50, 75, 99]
  const [stepIndex, setStepIndex] = useState(0)

  const start = () => {
    if (stage === 'calculating') return
    setStage('calculating')
    setStepIndex(0)
    steps.forEach((_, i) => {
      setTimeout(() => {
        setStepIndex(i)
        if (i === steps.length - 1) {
          setTimeout(() => setStage('done'), 700)
        }
      }, i * 500)
    })
  }

  return (
    <div className="glass-card rounded-2xl px-6 py-8 flex flex-col items-center gap-4 text-center max-w-xs">
      <p className="heading-serif text-cream text-lg">How much does Aman love Nitika?</p>
      {stage === 'idle' && (
        <button
          onClick={start}
          className="mt-1 rounded-full border border-gold/40 px-5 py-2 text-cream text-sm heading-serif hover:bg-gold/10 transition-colors"
        >
          Calculate
        </button>
      )}
      {stage === 'calculating' && (
        <div className="w-full">
          <p className="font-body text-gold text-2xl tabular-nums">{steps[stepIndex]}%</p>
          <div className="mt-2 h-1.5 w-full rounded-full bg-cream/10 overflow-hidden">
            <motion.div
              className="h-full bg-gold"
              animate={{ width: `${steps[stepIndex]}%` }}
              transition={{ duration: 0.4 }}
            />
          </div>
          <p className="mt-2 text-xs text-cream/50 font-body">Calculating...</p>
        </div>
      )}
      {stage === 'done' && (
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-body text-rose text-base"
        >
          ERROR: Value too large to calculate. ❤️
        </motion.p>
      )}
    </div>
  )
}

function VirtualHug() {
  const [hugging, setHugging] = useState(false)

  const sendHug = () => {
    setHugging(true)
    setTimeout(() => setHugging(false), 2200)
  }

  return (
    <div className="relative flex flex-col items-center gap-4">
      <button
        onClick={sendHug}
        className="relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-wine to-burgundy border border-gold/40 px-6 py-3 text-cream heading-serif hover:scale-105 active:scale-95 transition-transform"
      >
        <Heart className="h-4 w-4 text-rose" fill="currentColor" />
        Send Me A Hug 🤗
      </button>

      <AnimatePresence>
        {hugging && (
          <motion.div
            initial={{ scale: 0, opacity: 0.8 }}
            animate={{ scale: 8, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.8, ease: 'easeOut' }}
            className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-rose text-6xl"
          >
            ❤
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {hugging && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="font-body text-cream/80 text-sm text-center"
          >
            Sending you the biggest virtual hug... ❤️
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function EasterEggs() {
  return (
    <section
      id="secrets"
      className="section-wrap bg-gradient-to-b from-midnight via-[#22111a] to-burgundy py-24 relative"
    >
      <StarField count={26} />

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.8 }}
        className="heading-serif text-cream text-2xl sm:text-3xl text-center mb-2 flex items-center gap-2"
      >
        <Sparkles className="h-5 w-5 text-gold" />
        A few little secrets
      </motion.h2>
      <p className="font-body text-cream/50 text-sm mb-12 text-center">
        (hidden by a software engineer, of course)
      </p>

      <div className="relative z-10 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-10 sm:gap-14">
        <SignatureHeart />
        <LoveCalculator />
        <VirtualHug />
      </div>
    </section>
  )
}
