import ContactForm from "./ContactForm";
import land1 from "../assets/land1.jpeg";

export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-center text-white py-24 px-4 flex items-center justify-center"
      style={{ minHeight: "80vh", backgroundImage: `url(${land1})` }}
    >
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative z-5 container mx-auto flex flex-col custom1050:flex-row items-center justify-between px-4 custom1050:px-8">
        {/* Text Content */}
        <div className="text-center custom1050:text-left custom1050:w-1/2 mb-8 custom1050:mb-0">
          <h1 className="text-4xl custom1050:text-5xl font-bold mb-4">
            Sell Your Home Fast, Easy, and Hassle‑Free!
          </h1>
          <p className="text-lg custom1050:text-xl mb-8">
            We buy homes as‑is: No Fees · No Commissions · No Stress.
          </p>

          {/* Mobile CTA */}
          <div className="custom1050:hidden">
            <a
              href="#contact"
              className="inline-block bg-[var(--color-primary)] text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90"
            >
              Get Your Offer
            </a>
          </div>
        </div>

        {/* Contact Form for Desktop */}
        <div className="hidden custom1050:block custom1050:w-1/2">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
