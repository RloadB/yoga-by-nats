export default function Footer() {
  return (
    <footer className="bg-brown">
      <div className="site-container pt-20 lg:pt-28 pb-10 lg:pb-14">

        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_0.8fr_0.8fr] gap-12 lg:gap-20 mb-16 lg:mb-20">
          <div>
            <img
              src="/logo/logo.png"
              alt="Yoga By Nats"
              style={{
                height: '82px',
                width: 'auto',
                filter: 'brightness(0) invert(1)',
                opacity: 0.72,
              }}
              className="mb-6"
            />
            <p className="font-serif text-3xl md:text-4xl text-cream leading-tight max-w-md mb-6">
              A softer rhythm for movement, ritual and presence in Antwerp.
            </p>
            <p className="font-sans text-cream/42 text-sm leading-relaxed max-w-sm">
              I created this space for slower practice, quiet breath and a more
              grounded way to return to yourself.
            </p>
          </div>

          <div>
            <p className="font-sans text-terracotta text-[10px] tracking-[0.35em] uppercase mb-6">
              Explore
            </p>
            <div className="grid gap-4">
              <a href="#classes" className="font-sans text-cream/45 text-sm hover:text-cream/75 transition-colors duration-200">Classes</a>
              <a href="#classes" className="font-sans text-cream/45 text-sm hover:text-cream/75 transition-colors duration-200">Workshops</a>
              <a href="#booking" className="font-sans text-cream/45 text-sm hover:text-cream/75 transition-colors duration-200">Booking</a>
            </div>
          </div>

          <div>
            <p className="font-sans text-terracotta text-[10px] tracking-[0.35em] uppercase mb-6">
              Connect
            </p>
            <div className="grid gap-4">
              {/* TODO: Replace href="#" with actual Instagram URL */}
              <a href="#" className="font-sans text-cream/45 text-sm hover:text-cream/75 transition-colors duration-200">Instagram</a>
              {/* TODO: Replace href="#" with contact email or form */}
              <a href="#" className="font-sans text-cream/45 text-sm hover:text-cream/75 transition-colors duration-200">Contact</a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/[8%] mb-10" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="font-sans text-cream/20 text-xs tracking-wide">
            © 2026 Yoga By Nats. All rights reserved.
          </p>
          <p className="font-sans text-cream/20 text-xs tracking-wide">
            Antwerp, Belgium
          </p>
        </div>

      </div>
    </footer>
  )
}
