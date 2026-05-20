import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Classes from './components/Classes'
import PracticeStatement from './components/PracticeStatement'
import Philosophy from './components/Philosophy'
import BookingCTA from './components/BookingCTA'
import Location from './components/Location'
import ContactBooking from './components/ContactBooking'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Classes />
        <PracticeStatement />
        <Philosophy />
        <BookingCTA />
        <Location />
        <ContactBooking />
      </main>
      <Footer />
    </>
  )
}
