export default function HowItWorks() {
  return (
    <section id="process" className="py-16 px-4 bg-[var(--color-background)]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[var(--color-primary)] mb-4">
          How It Works
        </h2>
        <p className="text-xl text-[var(--color-text)] mb-12">
          Our Simple 3-Step Process
        </p>

        <div className="flex flex-col lg:flex-row gap-8 justify-center">
          {/* Step 1 */}
          <div className="flex-1 bg-white p-8 rounded-2xl shadow-lg border-t-4 border-[var(--color-primary)]">
            <div className="w-16 h-16 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 mx-auto">
              1
            </div>
            <h3 className="text-2xl font-bold text-[var(--color-text)] mb-4">
              Contact Us
            </h3>
            <p className="text-[var(--color-text)] mb-4">
              Schedule an appointment to discuss your property.
            </p>
            <div className="bg-[var(--color-accent)]/10 p-4 rounded-lg">
              <p className="text-sm font-semibold text-[var(--color-primary)]">
                Get started in 24 hours
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex-1 bg-white p-8 rounded-2xl shadow-lg border-t-4 border-[var(--color-primary)]">
            <div className="w-16 h-16 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 mx-auto">
              2
            </div>
            <h3 className="text-2xl font-bold text-[var(--color-text)] mb-4">
              Get a Fair Offer
            </h3>
            <p className="text-[var(--color-text)] mb-4">
              Receive an offer based on comprehensive market analysis.
            </p>
            <div className="bg-[var(--color-accent)]/10 p-4 rounded-lg">
              <p className="text-sm font-semibold text-[var(--color-primary)]">
                No obligation required
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex-1 bg-white p-8 rounded-2xl shadow-lg border-t-4 border-[var(--color-primary)]">
            <div className="w-16 h-16 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 mx-auto">
              3
            </div>
            <h3 className="text-2xl font-bold text-[var(--color-text)] mb-4">
              Get Paid Fast
            </h3>
            <p className="text-[var(--color-text)] mb-4">
              Close the deal and get paid within 30 days.
            </p>
            <div className="bg-[var(--color-accent)]/10 p-4 rounded-lg">
              <p className="text-sm font-semibold text-[var(--color-primary)]">
                No hidden fees
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <button className="bg-[var(--color-primary)] hover:bg-[var(--color-accent)] text-white font-bold py-3 px-8 rounded-full transition-all cursor-pointer shadow-lg">
            Start Your Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
