import { useCallback, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { ImageWithFallback } from './Ambience'
import birthdayData from '../data/birthdayData'

export default function Memories() {
  const [activeIndex, setActiveIndex] = useState(null)
  const photos = birthdayData.photos
  const isOpen = activeIndex !== null

  const close = useCallback(() => setActiveIndex(null), [])
  const next = useCallback(() => setActiveIndex((i) => (i + 1) % photos.length), [photos.length])
  const prev = useCallback(
    () => setActiveIndex((i) => (i - 1 + photos.length) % photos.length),
    [photos.length]
  )

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen, close, next, prev])

  return (
    <section
      id="memories"
      className="section-wrap bg-gradient-to-b from-midnight via-[#211018] to-burgundy py-24"
    >
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.8 }}
        className="heading-serif text-cream text-3xl sm:text-4xl text-center text-shadow-soft"
      >
        Some moments I never want to forget. ❤️
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="font-body text-rose/90 text-center mt-4 mb-14 max-w-md text-lg leading-relaxed"
      >
        Every picture has a memory. And somehow, every memory has you.
      </motion.p>

      <div className="w-full max-w-5xl columns-2 sm:columns-3 gap-4 sm:gap-6 [column-fill:_balance]">
        {photos.map((photo, i) => (
          <motion.button
            key={photo.src}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: (i % 6) * 0.08 }}
            onClick={() => setActiveIndex(i)}
            className="group mb-4 sm:mb-6 block w-full break-inside-avoid rounded-sm bg-cream p-2 pb-5 shadow-xl border border-gold/10 transition-transform hover:-translate-y-1 hover:rotate-0 focus-visible:-translate-y-1"
            style={{ transform: `rotate(${i % 2 === 0 ? -2 : 2}deg)` }}
          >
            <ImageWithFallback
              src={photo.src}
              alt={photo.caption}
              className="aspect-[4/5] w-full rounded-[2px]"
            />
            <p className="mt-3 text-center text-[11px] sm:text-xs text-midnight/70 font-body px-1 line-clamp-2">
              {photo.caption}
            </p>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-midnight/95 backdrop-blur-md px-4"
            onClick={close}
          >
            <button
              onClick={close}
              aria-label="Close"
              className="absolute top-5 right-5 sm:top-8 sm:right-8 text-cream/80 hover:text-gold transition-colors"
            >
              <X className="h-7 w-7" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation()
                prev()
              }}
              aria-label="Previous photo"
              className="absolute left-2 sm:left-8 text-cream/70 hover:text-gold transition-colors p-2"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>

            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.35 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-sm sm:max-w-md w-full"
            >
              <div className="bg-cream p-3 pb-6 shadow-2xl rounded-sm">
                <ImageWithFallback
                  src={photos[activeIndex].src}
                  alt={photos[activeIndex].caption}
                  className="aspect-[4/5] w-full rounded-[2px]"
                />
                <p className="mt-4 text-center text-midnight/80 font-body text-lg">
                  {photos[activeIndex].caption}
                </p>
              </div>
            </motion.div>

            <button
              onClick={(e) => {
                e.stopPropagation()
                next()
              }}
              aria-label="Next photo"
              className="absolute right-2 sm:right-8 text-cream/70 hover:text-gold transition-colors p-2"
            >
              <ChevronRight className="h-8 w-8" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
