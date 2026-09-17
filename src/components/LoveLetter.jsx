import { motion } from 'framer-motion'
import birthdayData from '../data/birthdayData'

export default function LoveLetter() {
  const { salutation, paragraphs, signature } = birthdayData.loveLetter

  return (
    <section
      id="letter"
      className="section-wrap bg-gradient-to-b from-midnight via-[#241019] to-burgundy py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.9 }}
        className="paper-texture w-full max-w-xl rounded-sm shadow-2xl px-6 py-10 sm:px-12 sm:py-14 relative"
      >
        <div className="absolute inset-0 rounded-sm border border-wine/10 pointer-events-none" />

        <p className="heading-serif text-wine text-2xl sm:text-3xl mb-8 italic">{salutation}</p>

        <div className="space-y-5">
          {paragraphs.map((para, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.7, delay: i * 0.05 }}
              className="font-body text-burgundy/90 text-lg sm:text-xl leading-relaxed"
            >
              {para}
            </motion.p>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="heading-serif text-wine text-xl sm:text-2xl italic mt-10 text-right"
        >
          {signature}
        </motion.p>
      </motion.div>
    </section>
  )
}
