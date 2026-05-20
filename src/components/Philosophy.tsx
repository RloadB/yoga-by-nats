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
    <section className="relative overflow-hidden bg-forest section-space">
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-cream to-transparent opacity-[0.08]" />
      <div className="site-container">

        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-24">

          <div className="lg:sticky lg:top-32">
            <p className="mb-8 font-sans text-[10px] uppercase tracking-[0.35em] text-terracotta">
              Philosophy
            </p>
            <h2 className="mb-9 max-w-[680px] font-serif text-[clamp(3rem,6.8vw,5.5rem)] font-light leading-[1.02] text-cream">
              Not a gym class.
              <br />
              Not a performance.
            </h2>
            <p className="max-w-[31rem] font-sans text-base leading-[1.85] text-cream/58">
              I teach yoga as a soft landing. You do not need to be flexible,
              experienced or perfect. You only need enough space to arrive.
            </p>
          </div>

          <div className="grid gap-8 lg:pt-8">
            {pillars.map((p, i) => (
              <div
                key={p.title}
                className={`border-l border-terracotta/35 pl-7 md:pl-9 ${i === 1 ? 'lg:ml-10' : ''} ${i === 2 ? 'lg:ml-20' : ''}`}
              >
                <p className="mb-5 font-sans text-[10px] uppercase tracking-[0.3em] text-cream/24">
                  0{i + 1}
                </p>
                <h3 className="mb-4 font-serif text-[clamp(1.9rem,3vw,2.55rem)] leading-[1.12] text-cream">
                  {p.title}
                </h3>
                <p className="max-w-[28rem] font-sans text-sm leading-[1.8] text-cream/52">
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
