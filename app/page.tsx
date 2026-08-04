import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import WhyChoose from "../components/WhyChoose";
import Doctors from "../components/Doctors";
import Testimonials from "../components/Testimonials";
import Appointment from "../components/Appointment";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import TrustStrip from "../components/TrustStrip";

export default function Home() {
  return (
    <>
      <Navbar />
<Hero />
<TrustStrip />
<Services />
<WhyChoose />
<Doctors />
<Testimonials />
<Appointment />
<Contact />
<Footer />
    </>
  );
}