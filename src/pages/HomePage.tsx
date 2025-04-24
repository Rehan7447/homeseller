import Navbar from "../components/NavBar";
import Hero from "../components/Hero";
import WhoWeAre from "../components/WhoWeAre";
import Process from "../components/Process";
import Footer from "../components/Footer";
import FAQSection from "../components/FAQSection";
import Portfolio from "../components/Portfolio";
import { BottomForm } from "../components/BottomForm";

export default function HomePage() {
  return (
    <div className="font-sans text-gray-800">
      <Navbar />
      <Hero />
      <WhoWeAre />
      <Process />
      {/* <WhyUs />
      <Testimonials />
      <Portfolio />
      <ContactForm /> */}
      <FAQSection />
      <Portfolio />
      <BottomForm />
      <Footer />
    </div>
  );
}
