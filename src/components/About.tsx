export default function About() {
  return (
    <section id="about" className="bg-cream py-24 lg:py-36">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[42%_1fr] gap-12 xl:gap-20 items-start">

          {/* Image — narrower column, less dominant */}
          <div className="relative aspect-[4/5] overflow-hidden">
            {/* TODO: Replace with Natalia's real portrait photo */}
            <img
              src="/images/natalia/natalia-about.jpg"
              alt="Natalia — yoga teacher in Antwerp"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>

          {/* Text */}
          <div className="lg:pt-8">
            <p className="font-sans text-terracotta text-[11px] tracking-[0.3em] uppercase mb-5">
              About
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-forest leading-[1.1] mb-7">
              A calm space to return
              <br className="hidden md:block" />
              to yourself
            </h2>
            <p className="font-sans text-brown-light text-base leading-relaxed mb-8">
              I guide Hatha yoga, gentle movement, breathwork and ritual-inspired
              practices here in Antwerp. My approach is warm, intuitive and rooted
              in presence — not performance.
            </p>

            {/* Quote — spacious, editorial */}
            <div className="my-10 lg:my-12 pl-0">
              <p className="font-serif italic text-2xl md:text-3xl text-forest/65 leading-[1.2]">
                "You do not need to perform here.
                <br />
                You simply arrive as you are."
              </p>
            </div>

            <p className="font-sans text-brown-light text-base leading-relaxed mb-5">
              I trained with deep respect for traditional practice and a genuine
              love of the feminine — the cyclical, the embodied, the still. Every
              session, whether it is a weekly class, a moon ritual workshop or a
              private session, is created to feel personal and grounded.
            </p>
            <p className="font-sans text-brown-light text-base leading-relaxed mb-10">
              I believe the mat is a soft landing — a place to breathe, to slow
              down and to come home to yourself, exactly as you are.
            </p>

            {/* Editorial text tags — no pills */}
            <p className="font-sans text-brown-light/45 text-[11px] tracking-[0.3em] uppercase">
              Hatha Yoga &nbsp;·&nbsp; Ritual Workshops &nbsp;·&nbsp; Breathwork &nbsp;·&nbsp; Moon Cycles
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
