import { motion } from 'framer-motion'
import birthdayData from '../data/birthdayData'

export default function Story() {
  return (
    <section id="story" className="section-wrap bg-gradient-to-b from-burgundy via-[#2a0f1a] to-midnight py-24">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.8 }}
        className="heading-serif text-cream text-3xl sm:text-4xl text-center mb-20"
      >
        Our Little Story ❤️
      </motion.h2>

      <div className="relative w-full max-w-xl">
        <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent sm:-translate-x-1/2" />

        <ol className="space-y-16">
          {birthdayData.story.map((chapter, i) => (
            <motion.li
              key={chapter.chapter}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
              className={`relative pl-12 sm:pl-0 sm:w-1/2 ${
                i % 2 === 0 ? 'sm:pr-10 sm:mr-auto' : 'sm:pl-10 sm:ml-auto'
              }`}
            >
              <span className="absolute left-2.5 top-1 h-2.5 w-2.5 rounded-full bg-gold shadow-[0_0_10px_2px_rgba(201,162,75,0.6)] sm:hidden" />
              <span
                className={`hidden sm:block absolute top-1 h-2.5 w-2.5 rounded-full bg-gold shadow-[0_0_10px_2px_rgba(201,162,75,0.6)] ${
                  i % 2 === 0 ? '-right-[5px]' : '-left-[5px]'
                }`}
              />
              <p className="heading-serif text-gold/80 text-xs tracking-[0.25em] uppercase mb-2">
                {chapter.chapter}
              </p>
              <h3 className="heading-serif text-cream text-xl sm:text-2xl mb-2">{chapter.title}</h3>
              <p className="font-body text-cream/75 text-base sm:text-lg leading-relaxed whitespace-pre-line">
                {chapter.text}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
