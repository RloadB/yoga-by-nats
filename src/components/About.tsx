export default function About() {
  return (
    <section id="about" className="section-space bg-cream">
      <div className="site-container">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-24">

          <div className="relative">
            <div className="relative mx-auto aspect-[4/5] max-w-[460px] overflow-hidden rounded-[1.25rem] bg-cream-dark shadow-[0_28px_90px_rgba(42,31,26,0.1)] lg:mx-0">
              <img
                src="/images/natalia/natalia-temple.jpg"
                alt="Natalia sitting in front of a temple stairway"
                onError={(event) => {
                  event.currentTarget.src = '/images/natalia/natalia-about.jpg'
                }}
                className="absolute inset-0 h-full w-full object-cover object-[center_56%] contrast-[0.94] saturate-[0.82]"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-cream/8 via-transparent to-brown/20" />
            </div>
          </div>

          <div className="mx-auto max-w-[600px] lg:mx-0">
            <p className="mb-8 font-sans text-[10px] uppercase tracking-[0.35em] text-terracotta">
              About the space
            </p>
            <h2 className="mb-10 max-w-[620px] font-serif text-[clamp(2.55rem,4.4vw,4.05rem)] leading-[1.08] text-forest">
              I created Yoga By Nats as a quiet return.
            </h2>
            <p className="mb-7 max-w-[31rem] font-sans text-[1.02rem] leading-[1.95] text-brown-light">
              I guide Hatha yoga, breathwork and ritual-inspired practices in
              Antwerp. My approach is warm, intuitive and rooted in presence.
            </p>
            <p className="mb-12 max-w-[31rem] font-sans text-[1.02rem] leading-[1.95] text-brown-light">
              My classes are small and spacious. I want you to feel held, never
              rushed, and free to arrive exactly as you are.
            </p>
            <p className="max-w-[31rem] border-t border-brown/10 pt-9 font-serif text-[clamp(1.75rem,2.6vw,2.25rem)] italic leading-[1.25] text-forest/62">
              "You do not need to perform here.
              <br />
              You simply arrive as you are."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
