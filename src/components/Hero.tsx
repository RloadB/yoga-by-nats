export default function Hero() {
  return (
    <section className="relative h-[88vh] min-h-[580px]">
      {/* TODO: Replace with Natalia's real photo */}
      <img
        src="/images/natalia/natalia-hero.jpg"
        alt="Yoga By Nats — grounded yoga practice in Antwerp"
        className="absolute inset-0 w-full h-full object-cover object-[center_30%]"
      />

      {/* Radial center clearance + edge darkening */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_70%_at_30%_55%,transparent_0%,rgba(42,31,26,0.28)_60%,rgba(42,31,26,0.65)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-r from-brown/30 via-transparent to-brown/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-brown/60 via-transparent to-transparent" />

      {/* Content — centered container, vertically centered */}
      <div className="relative h-full flex flex-col justify-center">
        <div className="max-w-5xl mx-auto w-full px-6 md:px-10">
          <div className="max-w-xl lg:max-w-2xl">
            <p className="font-sans text-cream/55 text-[11px] tracking-[0.35em] uppercase mb-7">
              Yoga By Nats &nbsp;·&nbsp; Antwerp
            </p>

            <h1 className="font-serif font-light text-cream text-[42px] md:text-6xl lg:text-[72px] leading-[1.02] mb-10">
              A soft space for
              <br />
              movement, breath
              <br />
              and ritual.
            </h1>

            <div className="flex flex-wrap items-center gap-5">
              {/* TODO: Replace href="#booking" with Zenamu URL: https://app.zenamu.com/yogabynats */}
              <a
                href="#booking"
                className="font-sans font-light text-sm text-cream border border-cream/35 px-7 py-3 rounded-full hover:bg-cream/10 transition-all duration-300 tracking-wide"
              >
                Book a class
              </a>
              <a
                href="#classes"
                className="font-sans font-light text-cream/60 text-sm tracking-wide hover:text-cream/90 transition-colors duration-300"
              >
                Explore classes
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
