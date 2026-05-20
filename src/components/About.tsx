export default function About() {
  return (
    <section id="about" className="section-space bg-cream">
      <div className="site-container">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">

          <div className="relative">
            <div className="relative mx-auto aspect-[4/5] max-w-[430px] overflow-hidden rounded-[1.25rem] bg-cream-dark shadow-[0_28px_90px_rgba(42,31,26,0.11)] lg:mx-0">
              <img
                src="/images/natalia/hatha_yoga_highres.png"
                alt="Natalia sitting on temple stairs"
                className="absolute inset-0 h-full w-full object-cover object-[center_58%] contrast-[0.96] saturate-[0.9]"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-cream/8 via-transparent to-brown/18" />
            </div>
          </div>

          <div className="mx-auto max-w-[620px] lg:mx-0 lg:pl-4">
            <p className="mb-6 font-sans text-[10px] uppercase tracking-[0.35em] text-terracotta">
              About the space
            </p>
            <h2 className="mb-8 max-w-[650px] font-serif text-[clamp(2.65rem,5vw,4.6rem)] leading-[1.04] text-forest">
              I created Yoga By Nats as a quiet return to the body.
            </h2>
            <p className="mb-6 max-w-[34rem] font-sans text-base leading-[1.85] text-brown-light">
              I guide Hatha yoga, gentle movement and ritual-inspired practices
              in Antwerp.
            </p>
            <p className="mb-9 max-w-[34rem] font-sans text-base leading-[1.85] text-brown-light">
              My classes are small, calm and personal. You do not need to perform
              here. You only need space to arrive.
            </p>
            <p className="mb-10 max-w-[35rem] font-serif text-[clamp(1.8rem,3vw,2.35rem)] italic leading-[1.2] text-forest/65">
              “You do not need to perform here. You simply arrive as you are.”
            </p>

            <div className="grid grid-cols-1 gap-5 border-t border-brown/10 pt-7 sm:grid-cols-3">
              <div>
                <p className="font-serif text-2xl text-forest">Hatha</p>
                <p className="mt-1 font-sans text-sm text-brown-light/60">steady practice</p>
              </div>
              <div>
                <p className="font-serif text-2xl text-forest">Ritual</p>
                <p className="mt-1 font-sans text-sm text-brown-light/60">moon workshops</p>
              </div>
              <div>
                <p className="font-serif text-2xl text-forest">Breath</p>
                <p className="mt-1 font-sans text-sm text-brown-light/60">soft presence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
