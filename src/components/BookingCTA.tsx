export default function BookingCTA() {
  return (
    <section id="booking" className="section-space bg-cream">
      <div className="site-container">
        <div className="grid grid-cols-1 overflow-hidden rounded-[1.5rem] bg-cream-dark shadow-[0_28px_90px_rgba(42,31,26,0.08)] lg:grid-cols-[0.86fr_1.14fr]">
          <div className="relative min-h-[340px] overflow-hidden lg:min-h-[560px]">
            <img
              src="/images/natalia/natalia-ritual.jpg"
              alt="Ritual practice at Yoga By Nats"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-brown/8 via-transparent to-brown/30" />
          </div>
          <div className="flex items-center px-8 py-14 md:px-14 lg:px-20 lg:py-20">
            <div className="mx-auto max-w-[610px] text-center lg:text-left">
              <div className="mx-auto mb-10 h-px w-10 bg-terracotta/50 lg:mx-0" />
              <p className="mb-5 font-sans text-[10px] uppercase tracking-[0.35em] text-terracotta">
                Join a session
              </p>
              <h2 className="mb-7 font-serif text-[clamp(2.6rem,5vw,4.45rem)] leading-[1.04] text-forest">
                Ready to step onto the mat?
              </h2>
              <p className="mx-auto mb-9 max-w-[34rem] font-sans text-base leading-[1.85] text-brown-light lg:mx-0">
                Bookings are handled through my Zenamu schedule. Choose a date,
                reserve your spot and simply arrive as you are.
              </p>
              <a
                href="https://app.zenamu.com/yogabynats"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-forest px-8 py-3.5 font-sans text-sm text-cream transition-colors duration-300 hover:bg-forest-light"
              >
                Open booking page
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <p className="mt-9 font-sans text-xs uppercase tracking-[0.25em] text-forest/40">
                Weekly classes &nbsp;·&nbsp; Workshops &nbsp;·&nbsp; Private sessions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
