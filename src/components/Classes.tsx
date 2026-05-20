export default function Classes() {
  return (
    <section id="classes" className="section-space bg-cream-dark">

      <div className="site-container-narrow mb-16 text-center lg:mb-24">
          <p className="mb-5 font-sans text-[10px] uppercase tracking-[0.35em] text-terracotta">
            What to expect
          </p>
          <h2 className="mx-auto mb-8 max-w-[760px] font-serif text-[clamp(2.45rem,4.8vw,4.15rem)] leading-[1.08] text-forest">
            Classes &amp; workshops with room to breathe
          </h2>
          <p className="mx-auto max-w-[35rem] font-sans text-base leading-[1.9] text-brown-light">
            I keep the pace spacious so you can listen inward, move with care and
            leave feeling more present.
          </p>
      </div>

      <div className="site-container space-y-16 lg:space-y-24">
        <div className="relative overflow-hidden rounded-[1.25rem] bg-cream">
          <div className="relative aspect-[4/5] overflow-hidden md:aspect-[16/9] lg:aspect-[16/8]">
            <img
              src="/images/natalia/natalia-hatha.jpg"
              alt="Hatha Yoga at Yoga By Nats in Antwerp"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brown/60 via-brown/12 to-transparent md:bg-gradient-to-r md:from-cream/96 md:via-cream/72 md:to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7 md:inset-y-0 md:left-0 md:right-auto md:flex md:w-[48%] md:items-center md:p-12 lg:p-16">
              <div>
                <p className="mb-5 font-sans text-[10px] uppercase tracking-[0.35em] text-terracotta">
                  Weekly classes
                </p>
                <h3 className="mb-6 font-serif text-[clamp(2.15rem,4vw,3.2rem)] leading-[1.08] text-cream md:text-forest">
                  Hatha Yoga
                </h3>
                <p className="mb-8 max-w-[30rem] font-sans text-sm leading-[1.85] text-cream/78 md:text-brown-light">
                  I guide a steady practice rooted in breath, gentle alignment
                  and the simple pleasure of slowing down.
                </p>
                <p className="font-sans text-[11px] uppercase tracking-[0.26em] text-cream/54 md:text-forest/42">
                  Saturdays &nbsp;·&nbsp; Antwerp
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[1.25rem] bg-cream">
          <div className="relative aspect-[4/5] overflow-hidden md:aspect-[16/9] lg:aspect-[16/8]">
            <img
              src="/images/natalia/natalia-ritual.jpg"
              alt="Moon and ritual workshop at Yoga By Nats"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brown/62 via-brown/12 to-transparent md:bg-gradient-to-l md:from-cream/96 md:via-cream/72 md:to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7 md:inset-y-0 md:left-auto md:right-0 md:flex md:w-[48%] md:items-center md:p-12 lg:p-16">
              <div>
                <p className="mb-5 font-sans text-[10px] uppercase tracking-[0.35em] text-terracotta">
                  Monthly workshops
                </p>
                <h3 className="mb-6 font-serif text-[clamp(2.15rem,4vw,3.2rem)] leading-[1.08] text-cream md:text-forest">
                  Moon &amp; Ritual
                </h3>
                <p className="mb-8 max-w-[30rem] font-sans text-sm leading-[1.85] text-cream/78 md:text-brown-light">
                  I create intimate gatherings for gentle movement, reflection
                  and intention setting.
                </p>
                <p className="font-sans text-[11px] uppercase tracking-[0.26em] text-cream/54 md:text-forest/42">
                  Monthly &nbsp;·&nbsp; Small groups
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[1.25rem] bg-forest">
          <div className="relative aspect-[4/5] overflow-hidden md:aspect-[16/9] lg:aspect-[16/8]">
            <img
              src="/images/natalia/natalia-private.jpg"
              alt="Private yoga session at Yoga By Nats"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/35 to-transparent md:bg-gradient-to-r md:from-forest md:via-forest/72 md:to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7 md:inset-y-0 md:left-0 md:right-auto md:flex md:w-[50%] md:items-center md:p-12 lg:p-16">
              <div>
                <p className="mb-5 font-sans text-[10px] uppercase tracking-[0.35em] text-terracotta">
                  Personal practice
                </p>
                <h3 className="mb-6 font-serif text-[clamp(2.15rem,4vw,3.2rem)] leading-[1.08] text-cream">
                  Private Sessions
                </h3>
                <p className="mb-8 max-w-[30rem] font-sans text-sm leading-[1.85] text-cream/68">
                  For a quieter, tailored space, I work with individuals and
                  small groups at their own rhythm.
                </p>
                <p className="font-sans text-[11px] uppercase tracking-[0.26em] text-cream/38">
                  Flexible &nbsp;·&nbsp; On request
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
