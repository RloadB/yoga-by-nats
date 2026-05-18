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
              Classes and workshops are created for people in Antwerp and nearby
              who are looking for something more grounded and intimate.
            </p>
            <p className="font-sans text-brown-light text-base leading-relaxed">
              Whether you are new to{' '}
              <strong className="text-forest font-medium">yoga in Antwerp</strong> or
              already have a practice,
              there is space here for you. Natalia teaches{' '}
              <strong className="text-forest font-medium">Hatha yoga in Antwerp</strong>{' '}
              weekly, with{' '}
              <strong className="text-forest font-medium">spiritual yoga Antwerp</strong>{' '}
              workshops throughout the year. Classes in English and Dutch —{' '}
              <em className="text-forest/60">yoga Antwerpen</em>.
            </p>
          </div>

          {/* Minimal keyword list */}
          <div className="flex flex-col gap-4 lg:pt-4">
            {[
              { label: 'Yoga Antwerp', sub: 'Weekly Hatha classes' },
              { label: 'Yoga Antwerpen', sub: 'Available in Dutch' },
              { label: 'Hatha Yoga Antwerp', sub: 'Traditional practice, all levels' },
              { label: 'Spiritual Yoga Antwerp', sub: 'Ritual, breathwork & presence' },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-4 py-3 border-b border-brown/[8%]"
              >
                <div className="w-1 h-1 rounded-full bg-terracotta/50 shrink-0" />
                <div>
                  <p className="font-sans text-forest text-sm font-medium leading-tight">
                    {item.label}
                  </p>
                  <p className="font-sans text-brown-light/60 text-xs mt-0.5">
                    {item.sub}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
