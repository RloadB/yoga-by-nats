export default function BookingCTA() {
  return (
    <section id="booking" className="bg-cream py-20 lg:py-32">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] bg-cream-dark">
          {/* TODO: Replace with Natalia's real photo */}
          <div className="relative min-h-[360px] overflow-hidden lg:min-h-[560px]">
            <img
              src="/images/natalia/natalia-ritual.jpg"
              alt="Ritual practice at Yoga By Nats"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-brown/18" />
          </div>
          <div className="flex items-center px-8 py-14 md:px-14 lg:px-20 lg:py-20">
            <div className="max-w-xl">
              <div className="w-8 h-px bg-terracotta/50 mb-10" />
              <p className="font-sans text-terracotta text-[10px] tracking-[0.35em] uppercase mb-5">
                Join a session
              </p>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-[64px] text-forest leading-[1.02] mb-7">
                Ready to step onto the mat?
              </h2>
              <p className="font-sans text-brown-light text-base leading-relaxed mb-9">
                Bookings are handled through my Zenamu schedule. Choose a date,
                reserve your spot and simply arrive as you are.
              </p>
              {/* TODO: Replace href="#" with https://app.zenamu.com/yogabynats */}
              <a
                href="#"
                className="inline-flex items-center justify-center gap-3 font-sans text-sm text-cream bg-forest px-7 py-3 rounded-full hover:bg-forest-light transition-colors duration-300"
              >
                Open booking page
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <p className="font-sans text-forest/40 text-xs tracking-[0.25em] uppercase mt-9">
                Weekly classes &nbsp;·&nbsp; Workshops &nbsp;·&nbsp; Private sessions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
