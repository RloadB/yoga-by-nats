export default function Classes() {
  return (
    <section id="classes" className="bg-cream-dark py-20 lg:py-32">

      {/* Section header */}
      <div className="site-container mb-14 lg:mb-20">
        <div className="max-w-2xl">
          <p className="font-sans text-terracotta text-[10px] tracking-[0.35em] uppercase mb-4">
            What to expect
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-[58px] text-forest leading-[1.06] mb-6">
            Classes &amp; workshops with room to breathe
          </h2>
          <p className="font-sans text-brown-light text-base leading-relaxed max-w-lg">
            My classes are soft, steady and personal. I keep the pace spacious so
            you can listen inward, move with care and leave feeling more present.
          </p>
        </div>
      </div>

      <div className="site-container space-y-16 lg:space-y-24">
        {/* Block 1: Hatha */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.86fr_1.14fr] gap-8 lg:gap-14 items-center">
          <div className="bg-cream px-8 py-10 md:px-12 md:py-14 lg:translate-x-8 z-10">
            <p className="font-sans text-terracotta text-[10px] tracking-[0.35em] uppercase mb-4">
              Weekly classes
            </p>
            <h3 className="font-serif text-3xl md:text-4xl text-forest leading-snug mb-6">
              Hatha Yoga
            </h3>
            <p className="font-sans text-brown-light text-base leading-relaxed mb-7">
              I hold weekly Hatha yoga classes for all levels: grounded in breath,
              gentle alignment and the simple pleasure of slowing down. No experience
              needed. You simply show up, and I'll meet you where you are.
            </p>
            <p className="font-sans text-forest/40 text-xs tracking-[0.25em] uppercase">
              Saturdays &nbsp;·&nbsp; Antwerp
            </p>
          </div>
          {/* TODO: Replace with Natalia's real photo */}
          <div className="relative aspect-[4/5] lg:aspect-[16/11] overflow-hidden">
            <img
              src="/images/natalia/natalia-hatha.jpg"
              alt="Hatha Yoga at Yoga By Nats in Antwerp"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>
        </div>

        {/* Block 2: Moon Workshops */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.08fr_0.92fr] gap-8 lg:gap-14 items-center">
          {/* TODO: Replace with Natalia's real photo */}
          <div className="relative aspect-[4/5] lg:aspect-[16/12] overflow-hidden order-last lg:order-first">
            <img
              src="/images/natalia/natalia-ritual.jpg"
              alt="Moon and ritual workshop at Yoga By Nats"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>
          <div className="bg-cream px-8 py-10 md:px-12 md:py-14 lg:-translate-x-8 z-10 order-first lg:order-last">
            <p className="font-sans text-terracotta text-[10px] tracking-[0.35em] uppercase mb-4">
              Monthly workshops
            </p>
            <h3 className="font-serif text-3xl md:text-4xl text-forest leading-snug mb-6">
              Moon &amp; Ritual Workshops
            </h3>
            <p className="font-sans text-brown-light text-base leading-relaxed mb-7">
              Each month I create a small, intimate gathering woven around the moon
              cycle: a candlelit space for gentle movement, reflection and intention
              setting. A quieter, more spiritual side of practice that I find
              deeply nourishing.
            </p>
            <p className="font-sans text-forest/40 text-xs tracking-[0.25em] uppercase">
              Monthly &nbsp;·&nbsp; Small groups
            </p>
          </div>
        </div>

        {/* Block 3: Private Sessions */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-8 lg:gap-14 items-center">
          <div className="bg-forest text-cream px-8 py-10 md:px-12 md:py-14 lg:translate-x-8 z-10">
            <p className="font-sans text-terracotta text-[10px] tracking-[0.35em] uppercase mb-5">
              Personal practice
            </p>
            <h3 className="font-serif text-3xl md:text-4xl text-cream leading-snug mb-6">
              Private Sessions
            </h3>
            <p className="font-sans text-cream/65 text-base leading-relaxed mb-7">
              For those who want a quieter, more tailored space, I offer private
              sessions for individuals or small groups. We work at your own rhythm,
              with full attention to what your body and mind actually need.
            </p>
            <p className="font-sans text-cream/35 text-xs tracking-[0.25em] uppercase">
              Flexible &nbsp;·&nbsp; On request
            </p>
          </div>
          {/* TODO: Replace with Natalia's real photo */}
          <div className="relative aspect-[4/5] lg:aspect-[16/11] overflow-hidden">
            <img
              src="/images/natalia/natalia-private.jpg"
              alt="Private yoga session at Yoga By Nats"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>

    </section>
  )
}
