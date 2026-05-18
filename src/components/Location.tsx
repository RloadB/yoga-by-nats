export default function Location() {
  return (
    <section className="bg-cream py-24 lg:py-32">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-16 items-start">

          {/* Text */}
          <div>
            <p className="font-sans text-terracotta text-[11px] tracking-[0.3em] uppercase mb-4">
              Where to find us
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-forest leading-[1.12] mb-7">
              Based in Antwerp
            </h2>
            <p className="font-sans text-brown-light text-base md:text-lg leading-relaxed mb-5">
              Classes and workshops are created for people in Antwerp and nearby who are looking
              for a more grounded, intimate and meaningful yoga experience.
            </p>
            <p className="font-sans text-brown-light text-base leading-relaxed">
              Whether you are new to <strong className="text-forest font-medium">yoga in Antwerp</strong> or
              already have an established practice, there is space here for you.
              Natalia teaches <strong className="text-forest font-medium">Hatha yoga in Antwerp</strong> weekly,
              with special <strong className="text-forest font-medium">spiritual yoga Antwerp</strong> workshops
              throughout the year. Classes are available in English and Dutch —&nbsp;
              <em className="text-forest/70">yoga Antwerpen</em>.
            </p>
          </div>

          {/* Tag pills */}
          <div className="flex flex-wrap lg:flex-col gap-2 lg:gap-2.5">
            {[
              'Yoga Antwerp',
              'Yoga Antwerpen',
              'Hatha Yoga Antwerp',
              'Spiritual Yoga Antwerp',
              'Moon Workshops Antwerp',
            ].map((tag) => (
              <span
                key={tag}
                className="font-sans text-xs text-forest border border-forest/15 rounded-full px-4 py-2 text-center whitespace-nowrap"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
