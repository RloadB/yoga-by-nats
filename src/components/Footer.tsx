import LogoMark from './LogoMark'

export default function Footer() {
  return (
    <footer className="bg-brown">
      <div className="px-8 md:px-12 lg:px-20 xl:px-28 pt-20 lg:pt-28 pb-12 lg:pb-16">

        {/* Centered brand block */}
        <div className="text-center mb-16">
          <LogoMark size={36} className="text-cream/25 mx-auto mb-5" />
          <p className="font-serif text-3xl text-cream mb-4 tracking-wide">Yoga By Nats</p>
          <p className="font-sans text-cream/40 text-sm leading-relaxed max-w-xs mx-auto">
            I created this space as a softer place for movement, ritual and
            presence — for anyone who needs a quiet moment in their week.
          </p>
        </div>

        {/* Thin rule */}
        <div className="border-t border-white/[8%] mb-10" />

        {/* Minimal bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-8">
            {/* TODO: Replace href="#" with actual Instagram URL */}
            <a href="#" className="font-sans text-cream/35 text-sm hover:text-cream/65 transition-colors duration-200">
              Instagram
            </a>
            {/* TODO: Replace href="#" with contact email or form */}
            <a href="#" className="font-sans text-cream/35 text-sm hover:text-cream/65 transition-colors duration-200">
              Contact
            </a>
            {/* TODO: Replace href="#booking" with https://app.zenamu.com/yogabynats */}
            <a href="#booking" className="font-sans text-cream/35 text-sm hover:text-cream/65 transition-colors duration-200">
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
