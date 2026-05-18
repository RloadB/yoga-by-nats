export default function About() {
  return (
    <section id="about" className="bg-cream-dark py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">

          {/* Image */}
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-md">
            {/* TODO: Replace with Natalia's real portrait photo when available — remove Unsplash temp image */}
            <img
              src="/images/natalia/natalia-about.jpg"
              alt="Natalia — yoga teacher in Antwerp"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>

          {/* Text */}
          <div>
            <p className="font-sans text-terracotta text-[11px] tracking-[0.3em] uppercase mb-5">
              About Natalia
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-forest leading-[1.12] mb-7">
              A calm space to return to yourself
            </h2>
            <p className="font-sans text-brown-light text-base leading-relaxed mb-5">
              Natalia guides Hatha yoga, gentle movement, breathwork and ritual-inspired practices in Antwerp. Her approach is warm, intuitive and rooted in presence, not performance.
            </p>
            <p className="font-sans text-brown-light text-base leading-relaxed mb-10">
              Trained with deep respect for traditional practice and a love of the feminine, Natalia brings genuine care to every session — whether it is a weekly class, a moon ritual workshop or a private session.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Hatha Yoga', 'Ritual Workshops', 'Breathwork', 'Moon Cycles'].map((tag) => (
                <span
                  key={tag}
                  className="font-sans text-xs text-forest border border-forest/20 px-4 py-1.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
