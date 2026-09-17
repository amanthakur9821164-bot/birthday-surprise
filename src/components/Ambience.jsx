import { useMemo } from 'react'
import { motion } from 'framer-motion'

// A soft field of twinkling stars used as a background layer.
// count is intentionally modest to stay smooth on mobile.
export function StarField({ count = 40, className = '' }) {
  const stars = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 2 + 1,
        delay: Math.random() * 4,
        duration: Math.random() * 3 + 2,
      })),
    [count]
  )

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      {stars.map((s) => (
        <span
          key={s.id}
          className="star animate-twinkle"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: s.size,
            height: s.size,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
          }}
        />
      ))}
    </div>
  )
}

// Slow, drifting hearts rising through a section.
export function FloatingHearts({ count = 10, className = '' }) {
  const hearts = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 5,
        duration: Math.random() * 4 + 6,
        size: Math.random() * 10 + 10,
        opacity: Math.random() * 0.35 + 0.15,
      })),
    [count]
  )

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      {hearts.map((h) => (
        <motion.span
          key={h.id}
          initial={{ y: '110%', opacity: 0 }}
          animate={{ y: '-20%', opacity: [0, h.opacity, 0] }}
          transition={{
            duration: h.duration,
            delay: h.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            position: 'absolute',
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

// A graceful fallback for a photo that hasn't been added yet.
export function ImageWithFallback({ src, alt, className = '', imgClassName = '' }) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={`w-full h-full object-cover ${imgClassName}`}
        onError={(e) => {
          e.currentTarget.style.display = 'none'
          e.currentTarget.nextSibling.style.display = 'flex'
        }}
      />
      <div
        className="absolute inset-0 hidden items-center justify-center flex-col gap-2 bg-gradient-to-br from-wine via-burgundy to-midnight text-blush"
        style={{ display: 'none' }}
      >
        <span className="text-3xl">❤</span>
        <span className="text-xs tracking-wide font-body opacity-70 px-4 text-center">
          A memory waiting to be added
        </span>
      </div>
    </div>
  )
}
