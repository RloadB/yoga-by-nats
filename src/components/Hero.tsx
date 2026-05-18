export default function Hero() {
  return (
    <section className="min-h-screen grid grid-cols-1 lg:grid-cols-[44%_1fr] bg-cream">
      {/* Left — Text */}
      <div className="flex flex-col justify-center px-6 md:px-10 lg:pl-16 xl:pl-24 pt-28 lg:pt-24 pb-12 lg:pb-24">
        <p className="font-sans text-terracotta text-[11px] tracking-[0.3em] uppercase mb-8">
          Yoga &amp; Ritual · Antwerp
        </p>
        <h1 className="font-serif text-5xl md:text-6xl xl:text-[68px] text-forest leading-[1.05] mb-8 max-w-lg">
          Yoga, ritual and grounded spiritual practice
        </h1>
        <p className="font-sans text-brown-light text-base md:text-lg leading-relaxed mb-10 max-w-[400px]">
          Gentle classes and intimate workshops for people who want to reconnect with their body, breath and inner rhythm.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          {/* TODO: Replace href="#booking" with Zenamu URL: https://app.zenamu.com/yogabynats */}
          <a
            href="#booking"
            className="inline-flex items-center justify-center bg-forest text-cream font-sans font-medium text-sm tracking-wide px-8 py-3.5 rounded-full hover:bg-forest-light transition-colors duration-300"
          >
            Book a class
          </a>
          <a
            href="#classes"
            className="inline-flex items-center justify-center border border-forest/25 text-forest font-sans text-sm tracking-wide px-8 py-3.5 rounded-full hover:border-forest/60 hover:bg-forest/5 transition-all duration-300"
          >
            Explore classes
          </a>
        </div>
      </div>

      {/* Right — Image */}
      <div className="relative h-[72vw] sm:h-[60vw] lg:h-auto overflow-hidden">
        {/* TODO: Replace with Natalia's real photo when available — remove Unsplash temp image */}
        <img
          src="/images/natalia/natalia-hero.jpg"
          alt="Natalia Bautista — Yoga By Nats, yoga teacher in Antwerp"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        {/* Subtle warm overlay to blend with site palette */}
        <div className="absolute inset-0 bg-brown/10 mix-blend-multiply pointer-events-none" />
      </div>
    </section>
  )
}
