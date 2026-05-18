import { useState, useEffect } from 'react'

const links = [
  { label: 'Classes', href: '#classes' },
  { label: 'About', href: '#about' },
  { label: 'Workshops', href: '#workshops' },
]

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cream/95 backdrop-blur-md border-b border-cream-dark shadow-sm'
          : 'bg-cream/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <a href="#" className="font-serif text-xl text-forest tracking-wide">
          Yoga By Nats
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="font-sans text-sm text-brown-light hover:text-forest transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
          {/* TODO: Replace href="#booking" with Zenamu URL: https://app.zenamu.com/yogabynats */}
          <a
            href="#booking"
            className="font-sans text-sm bg-forest text-cream px-5 py-2 rounded-full hover:bg-forest-light transition-colors duration-200"
          >
            Book a class
          </a>
        </nav>

        <button
          className="md:hidden p-1"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle navigation menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            {menuOpen ? (
              <>
                <line x1="5" y1="5" x2="19" y2="19" stroke="#2D4A3E" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="19" y1="5" x2="5" y2="19" stroke="#2D4A3E" strokeWidth="1.5" strokeLinecap="round" />
              </>
            ) : (
              <>
                <line x1="4" y1="7" x2="20" y2="7" stroke="#2D4A3E" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="4" y1="13" x2="20" y2="13" stroke="#2D4A3E" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="4" y1="19" x2="20" y2="19" stroke="#2D4A3E" strokeWidth="1.5" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-cream border-t border-cream-dark px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="font-sans text-sm text-brown-light hover:text-forest transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#booking"
            onClick={() => setMenuOpen(false)}
            className="font-sans text-sm bg-forest text-cream px-5 py-3 rounded-full text-center hover:bg-forest-light transition-colors"
          >
            Book a class
          </a>
        </div>
      )}
    </header>
  )
}
