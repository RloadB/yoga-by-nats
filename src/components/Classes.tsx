const offerings = [
  {
    num: '01',
    label: 'Weekly classes',
    title: 'Hatha Yoga',
    description:
      'Grounded, accessible yoga focused on breath, alignment and presence. No experience needed — simply show up.',
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
    detail: 'Flexible · On request',
    // TODO: Replace with Natalia's real photo — remove Unsplash temp image
    imgSrc: '/images/natalia/natalia-private.jpg',
    imgAlt: 'Private yoga session — Yoga By Nats Antwerp',
  },
]

export default function Classes() {
  return (
    <section id="classes" className="bg-cream-dark py-24 lg:py-36">
      <div className="max-w-6xl mx-auto px-6 md:px-10">

        {/* Section header */}
        <div className="flex items-end justify-between mb-16 lg:mb-20 border-b border-brown/10 pb-8">
          <div>
            <p className="font-sans text-terracotta text-[11px] tracking-[0.3em] uppercase mb-3">
              What to expect
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-forest leading-[1.1]">
              Classes &amp; workshops
            </h2>
          </div>
          <p className="hidden md:block font-sans text-brown-light/50 text-xs tracking-wide text-right max-w-[180px] leading-relaxed">
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
                {/* Number overlay */}
                <span className="absolute top-4 left-4 font-serif text-white/40 text-sm select-none">
                  {o.num}
                </span>
              </div>

              {/* Thin rule */}
              <div className="w-full h-px bg-brown/10 mb-5" />

              {/* Text */}
              <p className="font-sans text-terracotta text-[10px] tracking-[0.3em] uppercase mb-2.5">
                {o.label}
              </p>
              <h3 className="font-serif text-2xl text-forest leading-snug mb-3">
                {o.title}
              </h3>
              <p className="font-sans text-brown-light text-sm leading-relaxed mb-4 flex-1">
                {o.description}
              </p>
              <p className="font-sans text-forest/40 text-xs tracking-wide">
                {o.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
