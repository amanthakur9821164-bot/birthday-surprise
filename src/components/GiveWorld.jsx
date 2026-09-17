import { motion } from 'framer-motion'
import { StarField, FloatingHearts } from './Ambience'
import birthdayData from '../data/birthdayData'

export default function GiveWorld() {
  const lines = birthdayData.worldLines

  return (
    <section
      id="world"
      className="section-wrap bg-gradient-to-b from-burgundy via-[#1f0d16] to-midnight py-28 relative"
    >
      <StarField count={50} />
      <FloatingHearts count={6} />

      <div className="relative z-10 max-w-xl text-center space-y-8">
        {lines.map((line, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 18, filter: 'blur(4px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 1, delay: i * 0.1 }}
            className={`heading-serif text-shadow-soft ${
              i === 0 || i === lines.length - 1
                ? 'text-gold text-2xl sm:text-3xl'
                : 'text-cream/90 text-lg sm:text-xl'
            }`}
          >
            {line}
          </motion.p>
        ))}
      </div>
    </section>
  )
}
