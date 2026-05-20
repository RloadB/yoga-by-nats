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

        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-24">

          <div className="lg:sticky lg:top-32">
            <p className="mb-8 font-sans text-[10px] uppercase tracking-[0.35em] text-terracotta">
              Philosophy
            </p>
            <h2 className="mb-10 max-w-[600px] font-serif text-[clamp(2.75rem,5.4vw,4.75rem)] font-light leading-[1.06] text-cream">
              Not a gym class.
              <br />
              Not a performance.
            </h2>
            <p className="max-w-[30rem] font-sans text-base leading-[1.9] text-cream/58">
              I teach yoga as a soft landing. You do not need to be flexible,
              experienced or perfect. You only need enough space to arrive.
            </p>
          </div>

          <div className="grid gap-10 lg:pt-6">
            {pillars.map((p, i) => (
              <div
                key={p.title}
                className={`border-l border-terracotta/35 pl-7 md:pl-9 ${i === 1 ? 'lg:ml-8' : ''} ${i === 2 ? 'lg:ml-16' : ''}`}
              >
                <p className="mb-5 font-sans text-[10px] uppercase tracking-[0.3em] text-cream/24">
                  0{i + 1}
                </p>
                <h3 className="mb-4 font-serif text-[clamp(1.8rem,2.8vw,2.4rem)] leading-[1.14] text-cream">
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
