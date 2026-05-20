export default function BookingCTA() {
  return (
    <section id="booking" className="section-space bg-cream">
      <div className="site-container">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="relative min-h-[420px] overflow-hidden rounded-[1.25rem] lg:min-h-[620px]">
            <img
              src="/images/natalia/natalia-ritual.jpg"
              alt="Ritual practice at Yoga By Nats"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-brown/8 via-transparent to-brown/30" />
          </div>
          <div className="flex items-center rounded-[1.25rem] bg-cream-dark px-8 py-14 md:px-14 lg:px-16">
            <div className="mx-auto max-w-[560px] text-center lg:text-left">
              <div className="mx-auto mb-10 h-px w-10 bg-terracotta/50 lg:mx-0" />
              <p className="mb-5 font-sans text-[10px] uppercase tracking-[0.35em] text-terracotta">
                Join a session
              </p>
              <h2 className="mb-8 font-serif text-[clamp(2.55rem,4.6vw,4rem)] leading-[1.08] text-forest">
                Ready to step onto the mat?
              </h2>
              <p className="mx-auto mb-10 max-w-[32rem] font-sans text-base leading-[1.95] text-brown-light lg:mx-0">
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
              <p className="mt-10 font-sans text-[11px] uppercase tracking-[0.24em] text-forest/40">
                Weekly classes &nbsp;·&nbsp; Workshops &nbsp;·&nbsp; Private sessions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
