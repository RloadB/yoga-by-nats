export default function Hero() {
  return (
    <section className="relative min-h-[700px] h-[100svh] overflow-hidden">
      <img
        src="/images/natalia/natalia-hero.jpg"
        alt="Yoga By Nats, grounded yoga practice in Antwerp"
        className="absolute inset-0 h-full w-full scale-105 object-cover object-[center_34%]"
      />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_82%_72%_at_50%_48%,rgba(42,31,26,0.04)_0%,rgba(42,31,26,0.2)_55%,rgba(42,31,26,0.72)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-brown/34 via-brown/6 to-brown/78" />
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-cream to-transparent" />

      <div className="relative site-container flex h-full flex-col items-center justify-center pt-24 text-center">
        <p className="mb-7 font-sans text-[10px] uppercase tracking-[0.42em] text-cream/70">
          Yoga By Nats · Antwerp
        </p>
        <h1 className="mb-8 max-w-[980px] font-serif text-[clamp(3.1rem,8vw,6.7rem)] font-light leading-[1.02] text-cream">
          A soft space for movement, breath and ritual.
        </h1>
        <p className="mb-10 max-w-[31rem] font-sans text-base leading-[1.85] text-cream/72">
          Yoga classes and intimate workshops in Antwerp, created for slower
          breath, grounded movement and quiet presence.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://app.zenamu.com/yogabynats"
            className="rounded-full bg-cream px-8 py-3.5 font-sans text-sm font-light tracking-wide text-brown transition-all duration-300 hover:bg-cream-dark"
          >
            Book a class
          </a>
          <a
            href="#classes"
            className="border-b border-cream/28 pb-1 font-sans text-sm font-light tracking-wide text-cream/70 transition-colors duration-300 hover:border-cream/65 hover:text-cream"
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
