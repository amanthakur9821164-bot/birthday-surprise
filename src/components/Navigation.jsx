import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#cake', label: 'Cake' },
  { href: '#memories', label: 'Memories' },
  { href: '#story', label: 'Story' },
  { href: '#reasons', label: 'Reasons' },
  { href: '#letter', label: 'Letter' },
  { href: '#surprise', label: 'Surprise' },
]

export default function Navigation() {
  const [open, setOpen] = useState(false)

  const go = (href) => {
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* Desktop nav */}
      <nav className="hidden md:flex fixed top-5 left-1/2 -translate-x-1/2 z-40 items-center gap-1 rounded-full glass-card px-2 py-2">
        {LINKS.map((link) => (
          <button
            key={link.href}
            onClick={() => go(link.href)}
            className="px-3 py-1.5 text-sm text-cream/75 hover:text-gold font-body tracking-wide rounded-full transition-colors hover:bg-cream/5"
          >
            {link.label}
          </button>
        ))}
      </nav>

      {/* Mobile nav trigger */}
      <div className="md:hidden fixed top-4 left-4 z-40">
        <button
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="glass-card rounded-full p-3 text-cream"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden fixed top-20 left-4 z-40 glass-card rounded-2xl p-2 flex flex-col min-w-[10rem]"
          >
            {LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => go(link.href)}
                className="text-left px-4 py-2.5 text-cream/80 hover:text-gold font-body rounded-xl transition-colors"
              >
                {link.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
