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
      <div className="px-8 md:px-12 lg:px-20 xl:px-28">

        {/* Two-column: heading left, stacked items right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — editorial statement */}
          <div className="lg:pt-2">
            <h2 className="font-serif font-light text-cream text-4xl md:text-5xl lg:text-[56px] leading-[1.05] mb-8">
              Not a gym class.
              <br />
              Not a performance.
            </h2>
            <p className="font-sans text-cream/50 text-base leading-relaxed max-w-sm">
              This is yoga as a soft landing. You do not need to be flexible,
              experienced or perfect. You simply arrive as you are.
            </p>
          </div>

          {/* Right — pillar items, stacked with top borders */}
          <div>
            {pillars.map((p, i) => (
              <div
                key={p.title}
                className={`border-t border-white/15 py-8 ${i === pillars.length - 1 ? 'border-b border-white/15' : ''}`}
              >
                <h3 className="font-serif text-xl text-cream mb-3 leading-snug">
                  {p.title}
                </h3>
                <p className="font-sans text-cream/45 text-sm leading-relaxed">
                  {p.body}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
