import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Location from './components/Location';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="bg-[#131313] min-h-screen text-white font-body selection:bg-brand-yellow selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Philosophy />
        <Services />
        <Pricing />
        <Location />
        <Testimonials />
      </main>
      <Contact />
    </div>
  );
}
