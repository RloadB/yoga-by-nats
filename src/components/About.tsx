export default function About() {
  return (
    <section id="about" className="bg-cream py-20 lg:py-32">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-16 items-center">

          <div className="relative">
            <div className="relative aspect-[4/5] lg:aspect-[5/6] overflow-hidden">
              {/* TODO: Replace with Natalia's real portrait photo */}
              <img
                src="/images/natalia/natalia-about.jpg"
                alt="Natalia, yoga teacher in Antwerp"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            </div>
            <div className="absolute -bottom-8 right-0 hidden w-[46%] bg-forest px-8 py-9 text-cream lg:block">
              <p className="font-sans text-terracotta text-[10px] tracking-[0.35em] uppercase mb-4">
                My intention
              </p>
              <p className="font-serif text-2xl leading-tight">
                I hold space for slower breath, softer strength and quiet return.
              </p>
            </div>
          </div>

          <div className="lg:pl-6">
            <p className="font-sans text-terracotta text-[10px] tracking-[0.35em] uppercase mb-6">
              About the space
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-[64px] text-forest leading-[1.02] mb-8 max-w-xl">
              I created Yoga By Nats as a quiet return to the body.
            </h2>
            <p className="font-sans text-brown-light text-base leading-relaxed mb-6 max-w-md">
              I guide Hatha yoga, gentle movement, breathwork and ritual-inspired
              practices here in Antwerp. My approach is warm, intuitive and rooted
              in presence, not performance.
            </p>
            <p className="font-sans text-brown-light text-base leading-relaxed mb-8 max-w-md">
              My classes are intentionally small and spacious. I want you to feel
              held, never rushed, and free to meet yourself exactly where you are.
            </p>
            <p className="font-serif italic text-3xl text-forest/65 leading-[1.18] mb-9 max-w-lg">
              "You do not need to perform here.
              <br />
              You simply arrive as you are."
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 border-t border-brown/10 pt-7">
              <div>
                <p className="font-serif text-2xl text-forest">Hatha</p>
                <p className="font-sans text-brown-light/60 text-sm mt-1">steady practice</p>
              </div>
              <div>
                <p className="font-serif text-2xl text-forest">Ritual</p>
                <p className="font-sans text-brown-light/60 text-sm mt-1">moon workshops</p>
              </div>
              <div>
                <p className="font-serif text-2xl text-forest">Breath</p>
                <p className="font-sans text-brown-light/60 text-sm mt-1">soft presence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
