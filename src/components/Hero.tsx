export default function Hero() {
  return (
    <section className="relative h-screen min-h-[720px] overflow-hidden">
      {/* TODO: Replace with Natalia's real photo */}
      <img
        src="/images/natalia/natalia-hero.jpg"
        alt="Yoga By Nats, grounded yoga practice in Antwerp"
        className="absolute inset-0 w-full h-full scale-105 object-cover object-[center_32%]"
      />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_70%_at_50%_52%,rgba(42,31,26,0.08)_0%,rgba(42,31,26,0.28)_56%,rgba(42,31,26,0.74)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-brown/28 via-transparent to-brown/72" />
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-cream to-transparent" />

      <div className="relative site-container h-full flex flex-col items-center justify-center text-center pt-24">
        <p className="font-sans text-cream/68 text-[10px] tracking-[0.42em] uppercase mb-7">
          Yoga · Ritual · Presence
        </p>
        <h1 className="font-serif font-light text-cream text-[50px] md:text-7xl lg:text-[94px] xl:text-[108px] leading-[0.98] mb-8 max-w-5xl">
          A soft space for movement,
          <br />
          breath and ritual.
        </h1>
        <p className="font-sans text-cream/70 text-base leading-relaxed max-w-md mb-10">
          I guide grounding yoga and intimate rituals in Antwerp for people who
          want to move with more softness and presence.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {/* TODO: Replace href="#booking" with https://app.zenamu.com/yogabynats */}
          <a
            href="#booking"
            className="font-sans font-light text-sm text-brown bg-cream px-7 py-3 rounded-full hover:bg-cream-dark transition-all duration-300 tracking-wide"
          >
            Book a class
          </a>
          <a
            href="#classes"
            className="font-sans font-light text-cream/66 text-sm tracking-wide border-b border-cream/25 pb-1 hover:text-cream hover:border-cream/65 transition-colors duration-300"
          >
            Explore classes
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block">
        <p className="font-sans text-cream/36 text-[10px] tracking-[0.35em] uppercase">
          Antwerp · Hatha · Workshops
        </p>
      </div>
    </section>
  )
}
