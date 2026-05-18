const offerings = [
  {
    num: '01',
    label: 'Weekly classes',
    title: 'Hatha Yoga',
    description:
      'Grounded, accessible yoga focused on breath, alignment and presence. No experience needed — simply show up.',
    bestFor:
      'Beginners, returning students and anyone who wants a calm, regular practice.',
    details: ['Breath-led movement', 'Gentle alignment', 'Grounded pace'],
    detail: 'Saturdays · Antwerp',
    // TODO: Replace with Natalia's real photo — remove Unsplash temp image
    imgSrc: '/images/natalia/natalia-hatha.jpg',
    imgAlt: 'Hatha Yoga class — Yoga By Nats Antwerp',
  },
  {
    num: '02',
    label: 'Monthly workshops',
    title: 'Moon & Ritual Workshops',
    description:
      'Intimate sessions woven around moon cycles, reflection, intention setting and gentle movement.',
    bestFor:
      'People looking for reflection, intention setting and a softer spiritual practice.',
    details: ['Moon cycles', 'Journaling', 'Candlelit atmosphere'],
    detail: 'Monthly · Small groups',
    // TODO: Replace with Natalia's real photo — remove Unsplash temp image
    imgSrc: '/images/natalia/natalia-ritual.jpg',
    imgAlt: 'Moon & Ritual Workshop — Yoga By Nats',
  },
  {
    num: '03',
    label: 'Personal practice',
    title: 'Private Sessions',
    description:
      'Personal guidance for individuals or small groups looking for a quieter, more deeply tailored practice.',
    bestFor:
      'Anyone seeking personal guidance, small group work or a quieter space to develop their practice.',
    details: ['Personal rhythm', 'Small groups', 'Gentle guidance'],
    detail: 'Flexible · On request',
    // TODO: Replace with Natalia's real photo — remove Unsplash temp image
    imgSrc: '/images/natalia/natalia-private.jpg',
    imgAlt: 'Private yoga session — Yoga By Nats Antwerp',
  },
]

export default function Classes() {
  return (
    <section id="classes" className="bg-cream-dark py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-10">

        {/* Section header */}
        <div className="flex items-end justify-between mb-14 lg:mb-16 pb-8 border-b border-brown/10">
          <div>
            <p className="font-sans text-terracotta text-[11px] tracking-[0.3em] uppercase mb-3">
              What to expect
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-forest leading-[1.1]">
              Classes &amp; workshops
            </h2>
          </div>
          <p className="hidden md:block font-sans text-brown-light/40 text-xs tracking-wide text-right leading-relaxed">
            Antwerp &amp; surroundings
          </p>
        </div>

        {/* Editorial portrait grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
          {offerings.map((o) => (
            <div key={o.title} className="group flex flex-col">

              {/* Number + image */}
              <div className="relative aspect-[3/4] overflow-hidden mb-6">
                <img
                  src={o.imgSrc}
                  alt={o.imgAlt}
                  className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-[1.04] transition-transform duration-700"
                />
                <span className="absolute top-4 left-4 font-serif text-white/40 text-sm select-none">
                  {o.num}
                </span>
              </div>

              {/* Top rule */}
              <div className="w-full h-px bg-brown/10 mb-5" />

              {/* Label + title + description */}
              <p className="font-sans text-terracotta text-[10px] tracking-[0.3em] uppercase mb-2.5">
                {o.label}
              </p>
              <h3 className="font-serif text-2xl text-forest leading-snug mb-3">
                {o.title}
              </h3>
              <p className="font-sans text-brown-light text-sm leading-relaxed mb-6">
                {o.description}
              </p>

              {/* Best for + details */}
              <div className="border-t border-brown/[10%] pt-4 mb-6">
                <p className="font-sans text-[10px] tracking-[0.25em] text-brown-light/50 uppercase mb-1.5">
                  Best for
                </p>
                <p className="font-sans text-brown-light text-xs leading-relaxed mb-3">
                  {o.bestFor}
                </p>
                <p className="font-sans text-brown-light/40 text-[11px] tracking-wide">
                  {o.details.join(' · ')}
                </p>
              </div>

              {/* Footer detail — pinned to bottom */}
              <div className="mt-auto border-t border-brown/[8%] pt-3">
                <p className="font-sans text-forest/40 text-xs tracking-wide">
                  {o.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
