export default function About() {
  return (
    <section id="about" className="bg-cream">
      <div className="grid grid-cols-1 lg:grid-cols-2">

        {/* Image — full-bleed left, no container constraints */}
        <div className="relative aspect-[4/5] lg:aspect-auto lg:min-h-[700px] overflow-hidden">
          {/* TODO: Replace with Natalia's real portrait photo */}
          <img
            src="/images/natalia/natalia-about.jpg"
            alt="Natalia — yoga teacher in Antwerp"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </div>

        {/* Text — right column, generous padding, max-width on text only */}
        <div className="flex flex-col justify-center px-10 md:px-16 lg:px-20 xl:px-24 py-16 lg:py-24">
          <div className="max-w-md mx-auto">
            <p className="font-sans text-terracotta text-[10px] tracking-[0.35em] uppercase mb-6">
              About
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-[52px] text-forest leading-[1.08] mb-8">
              A calm space to return to yourself
            </h2>
            <p className="font-sans text-brown-light text-base leading-relaxed mb-8">
              I guide Hatha yoga, gentle movement, breathwork and ritual-inspired
              practices here in Antwerp. My approach is warm, intuitive and rooted
              in presence — not performance.
            </p>

            <p className="font-serif italic text-2xl text-forest/60 leading-[1.25] mb-8">
              "You do not need to perform here.
              <br />
              You simply arrive as you are."
            </p>

            <p className="font-sans text-brown-light text-base leading-relaxed mb-5">
              I trained with deep respect for traditional practice and a genuine
              love of the feminine — the cyclical, the embodied, the still. Every
              session is created to feel personal, grounded and welcoming.
            </p>
            <p className="font-sans text-brown-light text-base leading-relaxed mb-10">
              I believe the mat is a soft landing — a place to breathe, to slow
              down and to come home to yourself, exactly as you are.
            </p>

            <p className="font-sans text-brown-light/40 text-[10px] tracking-[0.35em] uppercase">
              Hatha Yoga &nbsp;·&nbsp; Ritual Workshops &nbsp;·&nbsp; Breathwork &nbsp;·&nbsp; Moon Cycles
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
