export default function Footer() {
  return (
    <footer className="bg-brown py-16">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-white/10">

          <div>
            <p className="font-serif text-2xl text-cream mb-3">Yoga By Nats</p>
            <p className="font-sans text-cream/45 text-sm leading-relaxed">
              Yoga, ritual and grounded spiritual practice.
              <br />
              Antwerp, Belgium.
            </p>
          </div>

          <div>
            <p className="font-sans text-cream/25 text-[10px] tracking-[0.3em] uppercase mb-5">
              Connect
            </p>
            <ul className="space-y-3">
              {/* TODO: Replace href="#" with actual Instagram URL */}
              <li>
                <a
                  href="#"
                  className="font-sans text-cream/50 text-sm hover:text-cream transition-colors duration-200"
                >
                  Instagram
                </a>
              </li>
              {/* TODO: Replace href="#" with actual contact email or form link */}
              <li>
                <a
                  href="#"
                  className="font-sans text-cream/50 text-sm hover:text-cream transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-sans text-cream/25 text-[10px] tracking-[0.3em] uppercase mb-5">
              Classes
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href="#classes"
                  className="font-sans text-cream/50 text-sm hover:text-cream transition-colors duration-200"
                >
                  Hatha Yoga
                </a>
              </li>
              <li>
                <a
                  href="#classes"
                  className="font-sans text-cream/50 text-sm hover:text-cream transition-colors duration-200"
                >
                  Workshops
                </a>
              </li>
              {/* TODO: Replace href="#" with Zenamu URL: https://app.zenamu.com/yogabynats */}
              <li>
                <a
                  href="#"
                  className="font-sans text-cream/50 text-sm hover:text-cream transition-colors duration-200"
                >
                  Book a session
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8">
          <p className="font-sans text-cream/20 text-xs text-center tracking-wide">
            © 2026 Yoga By Nats. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
