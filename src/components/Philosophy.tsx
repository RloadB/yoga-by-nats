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
    <section className="relative overflow-hidden bg-forest py-24 lg:py-40">
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-cream to-transparent opacity-10" />
      <div className="site-container">

        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-16 lg:gap-24 items-start">

          {/* Left: editorial statement */}
          <div className="lg:sticky lg:top-32">
            <p className="font-sans text-terracotta text-[10px] tracking-[0.35em] uppercase mb-7">
              Philosophy
            </p>
            <h2 className="font-serif font-light text-cream text-5xl md:text-6xl lg:text-[82px] leading-[0.98] mb-9">
              Not a gym class.
              <br />
              Not a performance.
            </h2>
            <p className="font-sans text-cream/58 text-base leading-relaxed max-w-md">
              I teach yoga as a soft landing. You do not need to be flexible,
              experienced or perfect. You only need enough space to arrive.
            </p>
          </div>

          {/* Right: soft editorial notes */}
          <div className="grid gap-6 lg:pt-10">
            {pillars.map((p, i) => (
              <div
                key={p.title}
                className={`bg-cream/[0.07] px-8 py-9 md:px-10 md:py-11 backdrop-blur-sm ${i === 1 ? 'lg:-translate-x-8' : ''} ${i === 2 ? 'lg:translate-x-8' : ''}`}
              >
                <p className="font-sans text-cream/24 text-[10px] tracking-[0.3em] uppercase mb-5">
                  0{i + 1}
                </p>
                <h3 className="font-serif text-3xl text-cream mb-4 leading-snug">
                  {p.title}
                </h3>
                <p className="font-sans text-cream/52 text-sm leading-relaxed">
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
