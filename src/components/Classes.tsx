export default function Classes() {
  return (
    <section id="classes" className="bg-cream-dark">

      {/* Section header — contained */}
      <div className="max-w-5xl mx-auto px-6 md:px-10 pt-20 lg:pt-28 pb-16 lg:pb-20">
        <p className="font-sans text-terracotta text-[11px] tracking-[0.3em] uppercase mb-4">
          What to expect
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-forest leading-[1.1]">
          Classes &amp; workshops
        </h2>
      </div>

      {/* Block 1: Hatha — text left, image right — full bleed */}
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:min-h-[540px]">
        <div className="flex flex-col justify-center px-6 md:px-12 lg:px-16 xl:px-20 py-14 lg:py-0">
          <div className="max-w-sm lg:max-w-xs xl:max-w-sm lg:ml-auto">
            <p className="font-sans text-terracotta text-[10px] tracking-[0.3em] uppercase mb-4">
              Weekly classes
            </p>
            <h3 className="font-serif text-3xl md:text-4xl text-forest leading-snug mb-6">
              Hatha Yoga
            </h3>
            <p className="font-sans text-brown-light text-base leading-relaxed mb-6">
              I hold weekly Hatha yoga classes for all levels — grounded in breath,
              gentle alignment and the simple pleasure of slowing down. No experience
              needed. You simply show up, and I'll meet you where you are.
            </p>
            <p className="font-sans text-forest/40 text-xs tracking-[0.2em] uppercase">
              Saturdays &nbsp;·&nbsp; Antwerp
            </p>
          </div>
        </div>
        {/* TODO: Replace with Natalia's real photo */}
        <div className="relative aspect-[3/4] lg:aspect-auto overflow-hidden">
          <img
            src="/images/natalia/natalia-hatha.jpg"
            alt="Hatha Yoga — Yoga By Nats Antwerp"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </div>
      </div>

      {/* Block 2: Moon Workshops — image left, text right — full bleed */}
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:min-h-[540px]">
        {/* TODO: Replace with Natalia's real photo */}
        <div className="relative aspect-[3/4] lg:aspect-auto overflow-hidden order-last lg:order-first">
          <img
            src="/images/natalia/natalia-ritual.jpg"
            alt="Moon &amp; Ritual Workshop — Yoga By Nats"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </div>
        <div className="flex flex-col justify-center px-6 md:px-12 lg:px-16 xl:px-20 py-14 lg:py-0 order-first lg:order-last">
          <div className="max-w-sm lg:max-w-xs xl:max-w-sm">
            <p className="font-sans text-terracotta text-[10px] tracking-[0.3em] uppercase mb-4">
              Monthly workshops
            </p>
            <h3 className="font-serif text-3xl md:text-4xl text-forest leading-snug mb-6">
              Moon &amp; Ritual<br className="hidden lg:block" /> Workshops
            </h3>
            <p className="font-sans text-brown-light text-base leading-relaxed mb-6">
              Each month I create a small, intimate gathering woven around the moon
              cycle — a candlelit space for gentle movement, reflection and intention
              setting. These workshops hold a quieter, more spiritual side of practice
              that I find deeply nourishing.
            </p>
            <p className="font-sans text-forest/40 text-xs tracking-[0.2em] uppercase">
              Monthly &nbsp;·&nbsp; Small groups
            </p>
          </div>
        </div>
      </div>

      {/* Block 3: Private Sessions — centered text only */}
      <div className="border-t border-brown/10">
        <div className="max-w-xl mx-auto px-6 md:px-10 py-20 lg:py-28 text-center">
          <p className="font-sans text-terracotta text-[10px] tracking-[0.3em] uppercase mb-5">
            Personal practice
          </p>
          <h3 className="font-serif text-3xl md:text-4xl text-forest leading-snug mb-6">
            Private Sessions
          </h3>
          <p className="font-sans text-brown-light text-base leading-relaxed mb-8">
            For those who want a quieter, more tailored space — I offer private
            sessions for individuals or small groups. We work at your own rhythm,
            with full attention to what your body and mind actually need.
          </p>
          <p className="font-sans text-forest/40 text-xs tracking-[0.2em] uppercase">
            Flexible &nbsp;·&nbsp; On request
          </p>
        </div>
      </div>

    </section>
  )
}
