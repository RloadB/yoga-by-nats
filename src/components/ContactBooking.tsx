const faqs = [
  {
    question: 'I am new to yoga. Can I join?',
    answer: 'Yes. My classes are open to beginners and returning students.',
  },
  {
    question: 'What should I bring?',
    answer: 'Comfortable clothes, water and anything that helps you feel at ease.',
  },
  {
    question: 'How do private sessions work?',
    answer: 'We choose a rhythm together and create a quieter practice around what you need.',
  },
  {
    question: 'Can I join a moon ritual workshop?',
    answer: 'Yes. Workshops are small and announced in advance through Instagram and booking updates.',
  },
]

export default function ContactBooking() {
  return (
    <>
      <section id="contact" className="section-space bg-cream">
        <div className="site-container-narrow text-center">
          <p className="mb-6 font-sans text-[10px] uppercase tracking-[0.35em] text-terracotta">
            GET IN TOUCH
          </p>
          <h2 className="mx-auto mb-8 max-w-none font-serif text-[clamp(1.6rem,3vw,2.15rem)] leading-[1.12] text-forest lg:whitespace-nowrap">
            Have a question or want to join a class?
          </h2>
          <p className="mx-auto mb-10 max-w-none font-sans text-sm leading-[1.85] text-brown-light lg:whitespace-nowrap">
            Send me a message if you want to book a private session, ask about workshops or find the right class for you.
          </p>

          <div className="mx-auto mb-10 grid max-w-xl gap-3 font-sans text-sm leading-relaxed text-brown-light">
            <p>Instagram: @yoga_by_nats</p>
            <p>Email: hello@yogabynats.com</p>
            <p>Location: Antwerp, Belgium</p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-5">
            <a
              href="https://app.zenamu.com/yogabynats"
              className="inline-flex items-center justify-center rounded-full bg-forest px-8 py-3.5 font-sans text-sm text-cream transition-colors duration-300 hover:bg-forest-light"
            >
              Book now
            </a>
            <a
              href="mailto:hello@yogabynats.com"
              className="border-b border-forest/25 pb-1 font-sans text-sm text-forest transition-colors duration-300 hover:border-forest hover:text-forest-light"
            >
              Contact me
            </a>
          </div>
        </div>
      </section>

      <section className="section-space bg-brown text-cream">
        <div className="site-container-narrow">
          <h2 className="mb-12 text-center font-serif text-[clamp(2.4rem,5vw,4.2rem)] leading-[1.08]">
            Frequently asked questions
          </h2>
          <div className="grid gap-6 text-center md:grid-cols-2">
            {faqs.map((item) => (
              <div key={item.question} className="min-h-[190px] rounded-[0.75rem] border border-cream/12 bg-cream/[0.04] px-7 py-8">
                <h3 className="mb-3 font-serif text-[clamp(1.45rem,3vw,2rem)] leading-tight text-cream">
                  {item.question}
                </h3>
                <p className="mx-auto max-w-2xl font-sans text-sm leading-[1.8] text-cream/55">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
