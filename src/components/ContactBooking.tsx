const faqs = [
  'I am new to yoga. Can I join?',
  'What should I bring?',
  'How do private sessions work?',
  'Can I join a moon ritual workshop?',
]

export default function ContactBooking() {
  return (
    <section id="contact" className="bg-brown text-cream">
      <div className="site-container py-20 text-center lg:py-28">
        <p className="mb-5 font-sans text-[10px] uppercase tracking-[0.35em] text-terracotta">
          Let us begin softly
        </p>
        <h2 className="mx-auto mb-6 max-w-3xl font-serif text-[clamp(2.8rem,6vw,5.25rem)] leading-[1.02]">
          Contact
        </h2>
        <p className="mx-auto mb-9 max-w-xl font-sans text-sm leading-[1.9] text-cream/55">
          Have a question, want to book a private session, or need help finding
          the right class? Send me a note and I will reply personally.
        </p>
        <a
          href="https://app.zenamu.com/yogabynats"
          className="inline-flex items-center justify-center rounded-full bg-cream px-8 py-3 font-sans text-sm text-brown transition-colors duration-300 hover:bg-cream-dark"
        >
          Book now
        </a>
      </div>

      <div className="grid grid-cols-1 bg-cream-dark text-brown lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative min-h-[420px] overflow-hidden lg:min-h-[640px]">
          <img
            src="/images/natalia/natalia-private.jpg"
            alt="Yoga By Nats private practice"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-brown/12" />
        </div>

        <div className="flex items-center px-8 py-14 md:px-14 lg:px-20 lg:py-20">
          <div className="w-full max-w-2xl">
            <h3 className="mb-10 font-serif text-[clamp(2.15rem,4vw,3.6rem)] leading-[1.08] text-forest">
              Schedule a consultation
            </h3>
            <form className="grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2 font-sans text-[10px] uppercase tracking-[0.2em] text-brown-light">
                  First name
                  <input className="h-11 rounded-none border border-brown/10 bg-cream px-3 font-sans text-sm normal-case tracking-normal text-brown outline-none focus:border-forest" />
                </label>
                <label className="grid gap-2 font-sans text-[10px] uppercase tracking-[0.2em] text-brown-light">
                  Last name
                  <input className="h-11 rounded-none border border-brown/10 bg-cream px-3 font-sans text-sm normal-case tracking-normal text-brown outline-none focus:border-forest" />
                </label>
              </div>
              <label className="grid gap-2 font-sans text-[10px] uppercase tracking-[0.2em] text-brown-light">
                Email
                <input className="h-11 rounded-none border border-brown/10 bg-cream px-3 font-sans text-sm normal-case tracking-normal text-brown outline-none focus:border-forest" />
              </label>
              <label className="grid gap-2 font-sans text-[10px] uppercase tracking-[0.2em] text-brown-light">
                Message
                <textarea rows={5} className="resize-none rounded-none border border-brown/10 bg-cream px-3 py-3 font-sans text-sm normal-case tracking-normal text-brown outline-none focus:border-forest" />
              </label>
              <button
                type="button"
                className="mt-2 w-fit bg-brown px-7 py-3 font-sans text-[11px] uppercase tracking-[0.2em] text-cream transition-colors duration-300 hover:bg-forest"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="overflow-hidden bg-cream-dark py-5 text-forest">
        <p className="whitespace-nowrap font-serif text-[clamp(1.9rem,5vw,4.8rem)] leading-none opacity-70">
          Book now&nbsp;&nbsp;Book now&nbsp;&nbsp;Book now&nbsp;&nbsp;Book now
        </p>
      </div>

      <div className="grid grid-cols-1 bg-cream px-8 py-16 text-brown md:px-14 lg:grid-cols-2 lg:px-20 lg:py-20">
        <div className="mx-auto w-full max-w-md">
          <p className="mb-5 font-sans text-[10px] uppercase tracking-[0.35em] text-terracotta">
            Get in touch
          </p>
          <h3 className="mb-6 font-serif text-[clamp(2rem,4vw,3.2rem)] leading-[1.08] text-forest">
            Contact info
          </h3>
          <div className="space-y-3 font-sans text-sm leading-relaxed text-brown-light">
            <p>hello@yogabynats.com</p>
            <p>+32 000 00 00 00</p>
            <p>Antwerp, Belgium</p>
          </div>
        </div>

        <div className="mt-12 min-h-[260px] bg-cream-dark lg:mt-0">
          <div className="flex h-full min-h-[260px] items-center justify-center border border-brown/10">
            <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-brown-light/45">
              Map placeholder
            </p>
          </div>
        </div>
      </div>

      <div className="bg-brown px-8 py-18 md:px-14 lg:px-20 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <h3 className="mb-12 text-center font-serif text-[clamp(2.2rem,4.5vw,4rem)] leading-[1.08] text-cream">
            Frequently asked questions
          </h3>
          <div className="grid gap-x-14 gap-y-4 md:grid-cols-2">
            {faqs.concat(faqs).map((question, index) => (
              <button
                key={`${question}-${index}`}
                type="button"
                className="flex items-center justify-between border-b border-cream/15 py-4 text-left font-sans text-sm text-cream/62"
              >
                <span>{question}</span>
                <span className="text-terracotta">+</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 bg-cream-dark text-brown lg:grid-cols-[1fr_0.8fr]">
        <div className="flex items-center px-8 py-16 md:px-14 lg:px-20">
          <div className="max-w-xl">
            <p className="mb-5 font-sans text-[10px] uppercase tracking-[0.35em] text-terracotta">
              Free mini practice
            </p>
            <h3 className="mb-6 font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1.08] text-forest">
              Download a gentle 5-minute grounding ritual
            </h3>
            <div className="mt-9 flex max-w-lg flex-col gap-3 sm:flex-row">
              <input
                placeholder="Email address"
                className="h-12 flex-1 border border-brown/10 bg-cream px-4 font-sans text-sm outline-none focus:border-forest"
              />
              <button className="bg-brown px-7 py-3 font-sans text-[11px] uppercase tracking-[0.2em] text-cream transition-colors duration-300 hover:bg-forest">
                Sign up
              </button>
            </div>
          </div>
        </div>
        <div className="relative min-h-[360px] overflow-hidden">
          <img
            src="/images/natalia/natalia-ritual.jpg"
            alt="Yoga By Nats grounding ritual"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  )
}
