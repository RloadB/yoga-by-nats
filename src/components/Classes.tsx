const offerings = [
  {
    label: 'Weekly classes',
    title: 'Hatha Yoga',
    description:
      'Grounded, accessible yoga focused on breath, alignment and presence. Suitable for all levels — no experience needed.',
    detail: 'Saturdays · Antwerp',
    gradient: 'linear-gradient(135deg, #D4A882 0%, #A07850 100%)',
    imgPath: '/images/natalia/natalia-practice-1.jpg',
  },
  {
    label: 'Monthly workshops',
    title: 'Moon & Ritual Workshops',
    description:
      'Intimate sessions inspired by moon cycles, reflection, intention setting and gentle movement. For those who want more than just a workout.',
    detail: 'Monthly · Small groups',
    gradient: 'linear-gradient(135deg, #B89880 0%, #7A5840 100%)',
    imgPath: '/images/natalia/natalia-practice-2.jpg',
  },
  {
    label: 'Personal practice',
    title: 'Private Sessions',
    description:
      'Personal guidance for individuals or small groups looking for a quieter, more personal and deeply tailored practice.',
    detail: 'Flexible · On request',
    gradient: 'linear-gradient(135deg, #9E8878 0%, #624E44 100%)',
    imgPath: null,
  },
]

export default function Classes() {
  return (
    <section id="classes" className="bg-cream py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="mb-16 lg:mb-20">
          <p className="font-sans text-terracotta text-[11px] tracking-[0.3em] uppercase mb-4">
            What to expect
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-forest leading-[1.12]">
            Classes &amp; workshops
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {offerings.map((o) => (
            <div key={o.title} className="group flex flex-col">
              {/* Image / placeholder */}
              <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                {/*
                  TODO: Replace gradient div with:
                  <img
                    src={o.imgPath}
                    alt={o.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                */}
                <div
                  className="w-full h-full group-hover:scale-105 transition-transform duration-500 rounded-2xl"
                  style={{ background: o.gradient }}
                />
              </div>

              <p className="font-sans text-terracotta text-[10px] tracking-[0.3em] uppercase mb-2.5">
                {o.label}
              </p>
              <h3 className="font-serif text-2xl md:text-3xl text-forest leading-snug mb-3">
                {o.title}
              </h3>
              <p className="font-sans text-brown-light text-sm leading-relaxed mb-5 flex-1">
                {o.description}
              </p>
              <p className="font-sans text-forest/50 text-xs tracking-wide">{o.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
