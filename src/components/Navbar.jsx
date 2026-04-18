import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'Catálogo', href: '#catalogo' },
  { label: 'Tecnología DTF', href: '#dtf' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <span className="text-2xl md:text-3xl font-heading font-extrabold tracking-tight text-dark">
              Stickers<span className="text-yellow-brand">Fans</span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-dark transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/5492974000000"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary bg-yellow-brand text-dark font-semibold px-6 py-2.5 rounded-full text-sm"
            >
              Pedí el tuyo
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-dark"
            onClick={() => setOpen(!open)}
            aria-label="Menú"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-base font-medium text-gray-700 hover:text-dark"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://wa.me/5492974000000"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary bg-yellow-brand text-dark font-semibold px-6 py-3 rounded-full text-center text-sm"
              >
                Pedí el tuyo
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
