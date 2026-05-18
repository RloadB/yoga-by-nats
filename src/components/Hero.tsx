export default function Hero() {
  return (
    <section className="relative h-screen min-h-[580px]">
      {/* TODO: Replace with Natalia's real photo — remove Unsplash temp image */}
      <img
        src="/images/natalia/natalia-hero.jpg"
        alt="Yoga By Nats — grounded yoga practice in Antwerp"
        className="absolute inset-0 w-full h-full object-cover object-[center_30%]"
      />

      {/* Layered gradient overlay — warm, not cold */}
      <div className="absolute inset-0 bg-gradient-to-t from-brown/75 via-brown/35 to-brown/5" />
      <div className="absolute inset-0 bg-gradient-to-r from-brown/25 to-transparent" />

      {/* Content — anchored to bottom left */}
      <div className="relative h-full flex flex-col justify-end px-6 md:px-12 lg:px-20 xl:px-24 pb-16 md:pb-20 lg:pb-24">
        <p className="font-sans text-cream/55 text-[11px] tracking-[0.35em] uppercase mb-6">
          Yoga By Nats &nbsp;·&nbsp; Antwerp
        </p>

        <h1 className="font-serif font-light text-cream text-[42px] md:text-6xl lg:text-7xl xl:text-[80px] leading-[1.02] mb-8 max-w-2xl lg:max-w-3xl">
          A soft space for movement, breath and ritual
        </h1>

        <div className="flex flex-wrap items-center gap-6">
          <div className="w-8 h-px bg-cream/35" />
          {/* TODO: Replace href="#booking" with Zenamu URL: https://app.zenamu.com/yogabynats */}
          <a
            href="#booking"
            className="font-sans font-light text-cream/80 text-sm tracking-wide hover:text-cream transition-colors duration-300"
          >
            Book a class
          </a>
          <span className="text-cream/25 text-xs">|</span>
          <a
            href="#classes"
            className="font-sans font-light text-cream/55 text-sm tracking-wide hover:text-cream/80 transition-colors duration-300"
          >
            Explore classes
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 md:right-12 hidden md:flex items-center gap-3">
        <span className="font-sans text-cream/30 text-[10px] tracking-[0.25em] uppercase">
          scroll
        </span>
        <div className="w-10 h-px bg-cream/20" />
      </div>
    </section>
  )
}
