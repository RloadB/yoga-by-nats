export default function Location() {
  return (
    <section className="section-space bg-cream-dark">
      <div className="site-container">

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div className="max-w-[650px]">
            <p className="mb-6 font-sans text-[10px] uppercase tracking-[0.35em] text-terracotta">
              Location
            </p>
            <h2 className="mb-8 font-serif text-[clamp(2.55rem,5vw,4.25rem)] leading-[1.05] text-forest">
              Based in Antwerp
            </h2>
            <p className="mb-6 font-sans text-base leading-[1.85] text-brown-light">
              I offer weekly practice in Antwerp for people who want a softer,
              more grounded way to move.
            </p>
            <p className="mb-6 font-sans text-base leading-[1.85] text-brown-light">
              My Hatha classes are open to all levels, and my ritual workshops
              create space for reflection, breath and presence.
            </p>
            <p className="font-sans text-base leading-[1.85] text-brown-light">
              Come exactly as you are.
            </p>
          </div>

          <div className="grid rounded-[1.25rem] bg-forest px-8 py-12 text-cream md:px-12 lg:px-14 lg:py-16 overflow-hidden">
            <div className="self-start">
              <p className="mb-8 font-sans text-[10px] uppercase tracking-[0.35em] text-terracotta">
                Details
              </p>
              <dl className="grid gap-7">
                <div className="border-b border-cream/10 pb-6">
                  <dt className="font-serif text-[clamp(1.65rem,3vw,2rem)] leading-tight text-cream">Antwerp, Belgium</dt>
                  <dd className="mt-2 font-sans text-sm text-cream/52">Local weekly practice</dd>
                </div>
                <div className="border-b border-cream/10 pb-6">
                  <dt className="font-serif text-[clamp(1.65rem,3vw,2rem)] leading-tight text-cream">Classes in English</dt>
                  <dd className="mt-2 font-sans text-sm text-cream/52">Welcoming for international students</dd>
                </div>
                <div className="border-b border-cream/10 pb-6">
                  <dt className="font-serif text-[clamp(1.65rem,3vw,2rem)] leading-tight text-cream">Workshops on request</dt>
                  <dd className="mt-2 font-sans text-sm text-cream/52">Moon rituals and seasonal gatherings</dd>
                </div>
                <div>
                  <dt className="font-serif text-[clamp(1.65rem,3vw,2rem)] leading-tight text-cream">Private sessions available</dt>
                  <dd className="mt-2 font-sans text-sm text-cream/52">For individuals and small groups</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
