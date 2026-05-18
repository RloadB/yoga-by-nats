export default function Hero() {
  return (
    <section className="relative h-[88vh] min-h-[580px]">
      {/* TODO: Replace with Natalia's real photo */}
      <img
        src="/images/natalia/natalia-hero.jpg"
        alt="Yoga By Nats — grounded yoga practice in Antwerp"
        className="absolute inset-0 w-full h-full object-cover object-[center_30%]"
      />

      {/* Overlays — darken edges, protect center */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_50%_50%,transparent_0%,rgba(42,31,26,0.22)_60%,rgba(42,31,26,0.65)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-brown/55 via-transparent to-transparent" />

      {/* Content — truly centered */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
        <p className="font-sans text-cream/50 text-[10px] tracking-[0.38em] uppercase mb-7">
          Yoga By Nats &nbsp;·&nbsp; Antwerp
        </p>
        <h1 className="font-serif font-light text-cream text-[44px] md:text-6xl lg:text-[72px] leading-[1.02] mb-10 max-w-3xl">
          A soft space for
          <br />
          movement, breath
          <br />
          and ritual.
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-5">
          {/* TODO: Replace href="#booking" with https://app.zenamu.com/yogabynats */}
          <a
            href="#booking"
            className="font-sans font-light text-sm text-cream border border-cream/35 px-7 py-3 rounded-full hover:bg-cream/10 transition-all duration-300 tracking-wide"
          >
            Book a class
          </a>
          <a
            href="#classes"
            className="font-sans font-light text-cream/55 text-sm tracking-wide hover:text-cream/85 transition-colors duration-300"
          >
            Explore classes
          </a>
        </div>
      </div>
    </section>
  )
}
