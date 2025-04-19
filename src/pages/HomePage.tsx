import Navbar from "../components/NavBar";
import Hero from "../components/Hero";
import WhoWeAre from "../components/WhoWeAre";
import Process from "../components/Process";
import WhyUs from "../components/WhyUs";
import Testimonials from "../components/Testimonials";
import Portfolio from "../components/Portfolio";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import TopHeadLine from "../components/TopHeadLine";

export default function HomePage() {
  return (
    <div className="font-sans text-gray-800">
      <TopHeadLine />
      <Navbar />
      <Hero />
      <WhoWeAre />
      <Process />
      <WhyUs />
      <Testimonials />
      <Portfolio />
      <ContactForm />
      <Footer />
    </div>
  );
}
