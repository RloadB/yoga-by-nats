export default function Classes() {
  return (
    <section id="classes" className="section-space bg-cream-dark">

      <div className="site-container mb-16 lg:mb-24">
        <div className="grid grid-cols-1 items-end gap-9 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
          <p className="mb-5 font-sans text-[10px] uppercase tracking-[0.35em] text-terracotta">
            WHAT TO EXPECT
          </p>
          <h2 className="max-w-[680px] font-serif text-[clamp(2.55rem,4.8vw,4.3rem)] leading-[1.06] text-forest">
            Classes and workshops with room to breathe
          </h2>
          </div>
          <p className="max-w-[34rem] font-sans text-base leading-[1.85] text-brown-light lg:justify-self-end">
            My classes are soft, steady and personal. I keep the pace spacious so
            you can listen inward, move with care and leave feeling more present.
          </p>
        </div>
      </div>

      <div className="site-container space-y-20 lg:space-y-28">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-0">
          <div className="z-10 bg-cream px-8 py-10 shadow-[0_24px_80px_rgba(42,31,26,0.08)] md:px-12 md:py-14 lg:translate-x-10">
            <p className="mb-5 font-sans text-[10px] uppercase tracking-[0.35em] text-terracotta">
              WEEKLY CLASSES
            </p>
            <h3 className="mb-6 font-serif text-[clamp(2rem,3vw,2.8rem)] leading-[1.12] text-forest">
              Hatha Yoga
            </h3>
            <p className="mb-8 font-sans text-base leading-[1.85] text-brown-light">
              A steady weekly practice focused on breath, gentle alignment and
              slowing down. Open to all levels.
            </p>
            <p className="font-sans text-xs uppercase tracking-[0.25em] text-forest/40">
              Saturdays &nbsp;·&nbsp; Antwerp
            </p>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden lg:aspect-[16/10]">
            {/* Temporary image until final Yoga By Nats class photography is available. */}
            <img
              src="/images/natalia/natalia-hatha.jpg"
              alt="Hatha Yoga at Yoga By Nats in Antwerp"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-0">
          <div className="relative order-last aspect-[4/5] overflow-hidden lg:order-first lg:aspect-[16/10]">
            {/* Temporary image until final Yoga By Nats workshop photography is available. */}
            <img
              src="/images/natalia/natalia-ritual.jpg"
              alt="Moon and ritual workshop at Yoga By Nats"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
          </div>
          <div className="order-first z-10 bg-cream px-8 py-10 shadow-[0_24px_80px_rgba(42,31,26,0.08)] md:px-12 md:py-14 lg:order-last lg:-translate-x-10">
            <p className="mb-5 font-sans text-[10px] uppercase tracking-[0.35em] text-terracotta">
              MONTHLY WORKSHOPS
            </p>
            <h3 className="mb-6 font-serif text-[clamp(2rem,3vw,2.8rem)] leading-[1.12] text-forest">
              Moon &amp; Ritual Workshops
            </h3>
            <p className="mb-8 font-sans text-base leading-[1.85] text-brown-light">
              Small gatherings for reflection, intention setting, soft movement
              and ritual.
            </p>
            <p className="font-sans text-xs uppercase tracking-[0.25em] text-forest/40">
              Monthly &nbsp;·&nbsp; Small groups
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:gap-0">
          <div className="z-10 bg-forest px-8 py-10 text-cream shadow-[0_24px_80px_rgba(42,31,26,0.12)] md:px-12 md:py-14 lg:translate-x-10">
            <p className="mb-5 font-sans text-[10px] uppercase tracking-[0.35em] text-terracotta">
              PERSONAL PRACTICE
            </p>
            <h3 className="mb-6 font-serif text-[clamp(2rem,3vw,2.8rem)] leading-[1.12] text-cream">
              Private Sessions
            </h3>
            <p className="mb-8 font-sans text-base leading-[1.85] text-cream/65">
              A quieter space for personal guidance, private sessions or small
              groups.
            </p>
            <p className="font-sans text-xs uppercase tracking-[0.25em] text-cream/35">
              Flexible &nbsp;·&nbsp; On request
            </p>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden lg:aspect-[16/10]">
            {/* Temporary image until final Yoga By Nats private session photography is available. */}
            <img
              src="/images/natalia/hatha_yoga_highres.png"
              alt="Private yoga session at Yoga By Nats"
              className="absolute inset-0 h-full w-full object-cover object-[center_58%]"
            />
          </div>
        </div>
      </div>

    </section>
  )
}
