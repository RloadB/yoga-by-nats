export default function BookingCTA() {
  return (
    <section id="booking" className="bg-cream-dark py-24 lg:py-32">
      <div className="max-w-xl mx-auto px-6 text-center">
        <p className="font-sans text-terracotta text-[11px] tracking-[0.3em] uppercase mb-4">
          Join a session
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-forest leading-[1.12] mb-6">
          Ready to join a class?
        </h2>
        <p className="font-sans text-brown-light text-base md:text-lg leading-relaxed mb-10">
          Bookings are handled through Natalia's Zenamu schedule. Find available dates
          and reserve your spot directly.
        </p>
        {/* TODO: Replace href="#" with Zenamu URL: https://app.zenamu.com/yogabynats */}
        <a
          href="#"
          className="inline-flex items-center justify-center bg-forest text-cream font-sans font-medium text-sm tracking-wide px-10 py-4 rounded-full hover:bg-forest-light transition-colors duration-300"
        >
          Open booking page
        </a>
      </div>
    </section>
  )
}
