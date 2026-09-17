import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import birthdayData from '../data/birthdayData'

export default function ThingsILove() {
  return (
    <section
      id="love"
      className="section-wrap bg-gradient-to-b from-midnight via-[#25101a] to-burgundy py-24"
    >
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.8 }}
        className="heading-serif text-cream text-3xl sm:text-4xl text-center mb-14"
      >
        Things I Love About You ❤️
      </motion.h2>

      <div className="grid w-full max-w-4xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {birthdayData.loveThings.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: (i % 3) * 0.1 }}
            className="glass-card rounded-2xl p-6 flex flex-col gap-3"
          >
            <Heart className="h-5 w-5 text-gold" fill="currentColor" />
            <h3 className="heading-serif text-cream text-xl">{item.title}</h3>
            <p className="font-body text-cream/75 leading-relaxed whitespace-pre-line">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
