const pillars = [
  {
    title: 'Slow and intentional',
    body: 'No rushing, no pressure. Each session moves at a pace that lets you actually feel what you are doing.',
  },
  {
    title: 'Spiritually grounded',
    body: 'Rooted in traditional practice but welcoming and approachable. Spirit is present without being overwhelming.',
  },
  {
    title: 'Beginner-friendly',
    body: 'You do not need experience or flexibility. Your curiosity and willingness to show up is enough.',
  },
]

export default function Philosophy() {
  return (
    <section className="bg-forest py-28 lg:py-40">
      <div className="max-w-5xl mx-auto px-6 md:px-10">

        {/* Central statement — left aligned, editorial */}
        <div className="mb-20 lg:mb-28 max-w-3xl">
          <h2 className="font-serif font-light text-cream text-5xl md:text-6xl lg:text-[68px] leading-[1.02] mb-8">
            Not a gym class.
            <br />
            Not a performance.
          </h2>
          <p className="font-sans text-cream/55 text-lg leading-relaxed max-w-xl">
            This is yoga as a soft landing. You do not need to be flexible,
            experienced or perfect. You simply arrive as you are.
          </p>
        </div>

        {/* Numbered editorial list */}
        <div className="divide-y divide-white/10">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className="py-8 md:py-10 flex items-start gap-8 md:gap-16"
            >
              {/* Number */}
              <span className="font-serif text-white/20 text-sm shrink-0 mt-1 w-6">
                0{i + 1}
              </span>

              {/* Content — two-column on md+ */}
              <div className="flex-1 md:flex md:items-start md:gap-12">
                <h3 className="font-serif text-xl md:text-2xl text-cream mb-3 md:mb-0 md:w-56 shrink-0 leading-snug">
                  {p.title}
                </h3>
                <p className="font-sans text-cream/50 text-sm leading-relaxed">
                  {p.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
