export default function PracticeStatement() {
  return (
    <section className="bg-cream py-20 lg:py-24">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <div className="border-t border-brown/10 pt-16 lg:pt-20 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-start">
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl md:text-4xl text-forest leading-[1.15] mb-5">
              A practice that meets you where you are
            </h2>
            <p className="font-sans text-brown-light text-base leading-relaxed">
              Whether you come for movement, rest, ritual or simply a quiet moment
              in your week, each session is created to feel welcoming, grounded
              and personal.
            </p>
          </div>
          {/* Decorative vertical rule — desktop only */}
          <div className="hidden lg:block w-px h-24 bg-terracotta/20 mt-1" />
        </div>
      </div>
    </section>
  )
}
