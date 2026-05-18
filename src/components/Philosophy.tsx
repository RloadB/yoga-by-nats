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
    <section className="bg-forest py-24 lg:py-36">
      <div className="max-w-5xl mx-auto px-6 md:px-10">

        {/* Central statement */}
        <div className="mb-20 lg:mb-28 max-w-2xl">
          <h2 className="font-serif font-light text-cream text-4xl md:text-5xl lg:text-[58px] leading-[1.05] mb-7">
            Not a gym class.
            <br />
            Not a performance.
          </h2>
          <p className="font-sans text-cream/50 text-base leading-relaxed">
            This is yoga as a soft landing. You do not need to be flexible,
            experienced or perfect. You simply arrive as you are.
          </p>
        </div>

        {/* Three editorial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
          {pillars.map((p) => (
            <div key={p.title} className="border-t border-white/15 pt-8">
              <h3 className="font-serif text-xl text-cream mb-4 leading-snug">
                {p.title}
              </h3>
              <p className="font-sans text-cream/45 text-sm leading-relaxed">
                {p.body}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
