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
        {/*
          TODO: When Natalia's photo is ready, replace this placeholder with:
          <img
            src="/images/natalia/natalia-hero.jpg"
            alt="Natalia Bautista — Yoga By Nats"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(160deg, #EDE0CC 0%, #D9C0A0 30%, #C4A07A 60%, #A07850 100%)',
          }}
        >
          {/* Subtle texture layer */}
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E\")",
              backgroundSize: '300px 300px',
            }}
          />

          {/* Decorative border frame */}
          <div className="absolute inset-8 border border-white/15 pointer-events-none" />

          {/* Large watermark initial */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
            <span className="font-serif italic text-[240px] text-white/[0.07] leading-none">
              N
            </span>
          </div>

          {/* Bottom name tag */}
          <div className="absolute bottom-10 left-0 right-0 flex flex-col items-center gap-3">
            <div className="w-6 h-px bg-white/30" />
            <p className="font-serif italic text-white/40 text-sm tracking-widest">
              Natalia Bautista
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
