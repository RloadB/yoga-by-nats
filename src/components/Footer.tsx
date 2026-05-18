import LogoMark from './LogoMark'

export default function Footer() {
  return (
    <footer className="bg-brown py-16 lg:py-20">
      <div className="max-w-5xl mx-auto px-6 md:px-10">

        {/* Brand block */}
        <div className="flex items-start gap-4 mb-8">
          <LogoMark size={28} className="text-cream/40 shrink-0 mt-1" />
          <div>
            <p className="font-serif text-xl text-cream mb-2">Yoga By Nats</p>
            <p className="font-sans text-cream/40 text-sm leading-relaxed max-w-xs">
              I created this space as a softer place for movement, ritual and
              presence — for anyone who needs a quiet moment in their week.
            </p>
          </div>
        </div>

        {/* Thin rule */}
        <div className="border-t border-white/[8%] my-8" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            <a href="#classes" className="font-sans text-cream/40 text-sm hover:text-cream/70 transition-colors duration-200">
              Classes
            </a>
            <a href="#about" className="font-sans text-cream/40 text-sm hover:text-cream/70 transition-colors duration-200">
              About
            </a>
            {/* TODO: Replace href="#" with actual Instagram URL */}
            <a href="#" className="font-sans text-cream/40 text-sm hover:text-cream/70 transition-colors duration-200">
              Instagram
            </a>
            {/* TODO: Replace href="#" with actual contact link */}
            <a href="#" className="font-sans text-cream/40 text-sm hover:text-cream/70 transition-colors duration-200">
              Contact
            </a>
            {/* TODO: Replace href="#" with Zenamu URL: https://app.zenamu.com/yogabynats */}
            <a href="#booking" className="font-sans text-cream/40 text-sm hover:text-cream/70 transition-colors duration-200">
              Book a session
            </a>
          </div>
          <p className="font-sans text-cream/20 text-xs tracking-wide">
            © 2026 Yoga By Nats
          </p>
        </div>

      </div>
    </footer>
  )
}
