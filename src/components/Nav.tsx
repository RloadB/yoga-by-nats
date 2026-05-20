import { useState, useEffect } from 'react'

const links = [
  { label: 'Classes', href: '#classes' },
  { label: 'About', href: '#about' },
  { label: 'Workshops', href: '#classes' },
]

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const onHero = !scrolled

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        onHero ? 'bg-transparent' : 'bg-cream/95 backdrop-blur-md border-b border-cream-dark'
      }`}
    >
      <div className="site-container flex h-20 items-center justify-between md:h-24">

        <a href="#" aria-label="Yoga By Nats home">
          <img
            src="/logo/logo.png"
            alt="Yoga By Nats"
            style={{
              height: '68px',
              width: 'auto',
              filter: onHero ? 'brightness(0) invert(1)' : 'brightness(0)',
              transition: 'filter 0.5s',
            }}
          />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className={`font-sans font-light text-sm tracking-wide transition-colors duration-500 ${
                onHero ? 'text-cream/70 hover:text-cream' : 'text-brown-light hover:text-forest'
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://app.zenamu.com/yogabynats"
            className={`font-sans font-light text-sm tracking-wide px-5 py-2 rounded-full transition-all duration-500 ${
              onHero
                ? 'border border-cream/30 text-cream hover:bg-cream/10'
                : 'bg-forest text-cream hover:bg-forest-light'
            }`}
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
                <line x1="5" y1="5" x2="19" y2="19" stroke={onHero ? '#FBF7F0' : '#2D4A3E'} strokeWidth="1.5" strokeLinecap="round" />
                <line x1="19" y1="5" x2="5" y2="19" stroke={onHero ? '#FBF7F0' : '#2D4A3E'} strokeWidth="1.5" strokeLinecap="round" />
              </>
            ) : (
              <>
                <line x1="4" y1="7"  x2="20" y2="7"  stroke={onHero ? '#FBF7F0' : '#2D4A3E'} strokeWidth="1.5" strokeLinecap="round" />
                <line x1="4" y1="13" x2="20" y2="13" stroke={onHero ? '#FBF7F0' : '#2D4A3E'} strokeWidth="1.5" strokeLinecap="round" />
                <line x1="4" y1="19" x2="20" y2="19" stroke={onHero ? '#FBF7F0' : '#2D4A3E'} strokeWidth="1.5" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-cream border-t border-cream-dark px-8 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="font-sans font-light text-sm text-brown-light hover:text-forest transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://app.zenamu.com/yogabynats"
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
