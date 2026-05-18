export default function Location() {
  return (
    <section className="bg-cream-dark py-24 lg:py-32">
      <div className="max-w-5xl mx-auto px-6 md:px-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <p className="font-sans text-terracotta text-[11px] tracking-[0.3em] uppercase mb-5">
              Location
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-forest leading-[1.1] mb-7">
              Based in Antwerp
            </h2>
            <p className="font-sans text-brown-light text-base leading-relaxed mb-5">
              I offer yoga in Antwerp for people looking for something more
              grounded and intimate — not a big studio, not a fitness class. A
              softer, more personal space.
            </p>
            <p className="font-sans text-brown-light text-base leading-relaxed mb-5">
              My weekly Hatha yoga classes in Antwerp are open to all levels,
              taught in English and Dutch. Throughout the year I also run
              spiritual yoga workshops in Antwerp — moon rituals and seasonal
              gatherings rooted in traditional practice.
            </p>
            <p className="font-sans text-brown-light text-base leading-relaxed">
              Whether you are new to yoga in Antwerpen or already have a practice,
              there is always room for you here.
            </p>
          </div>

          <div className="lg:pt-4">
            <div className="border-t border-brown/[8%] pt-8">
              <p className="font-sans text-brown-light/40 text-[11px] tracking-[0.3em] uppercase mb-6">
                Details
              </p>
              <dl className="space-y-5">
                {[
                  { term: 'Location', def: 'Antwerp, Belgium' },
                  { term: 'Languages', def: 'English & Dutch' },
                  { term: 'Weekly classes', def: 'Hatha yoga, all levels' },
                  { term: 'Workshops', def: 'Moon rituals & seasonal gatherings' },
                ].map(({ term, def }) => (
                  <div key={term} className="flex gap-6">
                    <dt className="font-sans text-xs text-brown-light/40 w-32 shrink-0 pt-0.5">
                      {term}
                    </dt>
                    <dd className="font-sans text-sm text-forest leading-snug">
                      {def}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
