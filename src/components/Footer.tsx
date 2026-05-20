export default function Footer() {
  return (
    <footer className="bg-brown">
      <div className="site-container pt-24 pb-10 lg:pt-32 lg:pb-14">

        <div className="mx-auto mb-18 max-w-[980px] border-b border-white/[8%] pb-16 text-center lg:mb-20 lg:pb-20">
          <p className="mb-7 font-sans text-[10px] uppercase tracking-[0.35em] text-terracotta">
            Yoga By Nats
          </p>
          <p className="mx-auto max-w-[880px] font-serif text-[clamp(2.6rem,5.2vw,4.65rem)] leading-[1.08] text-cream">
            A softer rhythm for movement, ritual and presence in Antwerp.
          </p>
        </div>

        <div className="mb-16 grid grid-cols-1 gap-14 border-b border-white/[6%] pb-14 lg:mb-14 lg:grid-cols-[1fr_0.9fr_0.9fr] lg:gap-16">
          <div className="max-w-sm">
            <img
              src="/logo/logo.png"
              alt="Yoga By Nats"
              style={{
                height: '82px',
                width: 'auto',
                filter: 'brightness(0) invert(1)',
                opacity: 0.72,
              }}
              className="mb-7"
            />
            <p className="font-sans text-sm leading-[1.9] text-cream/42">
              I created this space for slower practice, quiet breath and a more
              grounded way to return to yourself.
            </p>
          </div>

          <div>
            <p className="mb-6 font-sans text-[10px] uppercase tracking-[0.35em] text-terracotta">
              Explore
            </p>
            <div className="grid gap-4">
              <a href="#classes" className="font-sans text-sm text-cream/45 transition-colors duration-200 hover:text-cream/75">Classes</a>
              <a href="#classes" className="font-sans text-sm text-cream/45 transition-colors duration-200 hover:text-cream/75">Workshops</a>
              <a href="https://app.zenamu.com/yogabynats" className="font-sans text-sm text-cream/45 transition-colors duration-200 hover:text-cream/75">Booking</a>
            </div>
          </div>

          <div>
            <p className="mb-6 font-sans text-[10px] uppercase tracking-[0.35em] text-terracotta">
              Connect
            </p>
            <div className="grid gap-4">
              <a href="#" className="font-sans text-sm text-cream/45 transition-colors duration-200 hover:text-cream/75">Instagram</a>
              <a href="#" className="font-sans text-sm text-cream/45 transition-colors duration-200 hover:text-cream/75">Contact</a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="font-sans text-xs tracking-wide text-cream/20">
            © 2026 Yoga By Nats. All rights reserved.
          </p>
          <p className="font-sans text-xs tracking-wide text-cream/20">
            Antwerp, Belgium
          </p>
        </div>

      </div>
    </footer>
  )
}
