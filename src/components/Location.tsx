export default function Location() {
  return (
    <section className="bg-cream-dark py-20 lg:py-32">
      <div className="site-container">

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16 items-stretch">
          <div className="bg-cream px-8 py-12 md:px-12 lg:px-14 lg:py-16">
            <p className="font-sans text-terracotta text-[10px] tracking-[0.35em] uppercase mb-6">
              Location
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-[62px] text-forest leading-[1.03] mb-8">
              Based in Antwerp
            </h2>
            <p className="font-sans text-brown-light text-base leading-relaxed mb-5">
              I offer yoga in Antwerp for people looking for a softer, more
              grounded practice. My weekly Hatha yoga classes are open to all
              levels, and my ritual workshops create space for reflection, breath
              and presence.
            </p>
            <p className="font-sans text-brown-light text-base leading-relaxed">
              I created this space for anyone who wants movement to feel intimate,
              steady and human. Come exactly as you are.
            </p>
          </div>

          <div className="grid bg-forest px-8 py-12 text-cream md:px-12 lg:px-14 lg:py-16">
            <div className="self-start">
              <p className="font-sans text-terracotta text-[10px] tracking-[0.35em] uppercase mb-8">
                Details
              </p>
              <dl className="grid gap-7">
                <div className="border-b border-cream/10 pb-6">
                  <dt className="font-serif text-3xl text-cream leading-tight">Antwerp, Belgium</dt>
                  <dd className="font-sans text-cream/52 text-sm mt-2">Local weekly practice</dd>
                </div>
                <div className="border-b border-cream/10 pb-6">
                  <dt className="font-serif text-3xl text-cream leading-tight">Classes in English</dt>
                  <dd className="font-sans text-cream/52 text-sm mt-2">Welcoming for international students</dd>
                </div>
                <div className="border-b border-cream/10 pb-6">
                  <dt className="font-serif text-3xl text-cream leading-tight">Workshops on request</dt>
                  <dd className="font-sans text-cream/52 text-sm mt-2">Moon rituals and seasonal gatherings</dd>
                </div>
                <div>
                  <dt className="font-serif text-3xl text-cream leading-tight">Private sessions available</dt>
                  <dd className="font-sans text-cream/52 text-sm mt-2">For individuals and small groups</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
