export default function BookingCTA() {
  return (
    <section id="booking" className="bg-cream py-24 lg:py-36">
      <div className="px-8 md:px-12 lg:px-20 xl:px-28">
        <div className="max-w-xl mx-auto text-center">

          <div className="w-8 h-px bg-terracotta/50 mx-auto mb-12" />

          <p className="font-sans text-terracotta text-[10px] tracking-[0.35em] uppercase mb-5">
            Join a session
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-forest leading-[1.1] mb-7">
            Ready to step onto the mat?
          </h2>
          <p className="font-sans text-brown-light text-base leading-relaxed mb-10">
            Bookings are handled through my Zenamu schedule. Find available dates
            and reserve your spot directly — no account needed.
          </p>
          {/* TODO: Replace href="#" with https://app.zenamu.com/yogabynats */}
          <a
            href="#"
            className="inline-flex items-center gap-3 font-sans text-sm text-forest border-b border-forest/30 pb-0.5 hover:border-forest transition-colors duration-300"
          >
            Open booking page
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

        </div>
      </div>
    </section>
  )
}
