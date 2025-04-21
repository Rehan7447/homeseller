export default function WhoWeAre() {
  return (
    <section id="who" className="py-16 px-4 bg-[var(--color-background-light)]">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
        {/* Text Content */}
        <div className="lg:w-1/2 space-y-6 text-[var(--color-text)] order-2 lg:order-1">
          <h2 className="text-4xl font-bold text-[var(--color-primary)]">
            Your Trusted Partner in
            <br />
            <span className="text-[var(--color-accent)]">Buying Your Home</span>
          </h2>

          <p className="text-lg">
            We simplify the process with fast, hassle-free solutions. No repairs
            needed, no hidden fees.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-[var(--color-primary)] rounded-full"></div>
              <p>Decades of combined industry experience</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-[var(--color-primary)] rounded-full"></div>
              <p>Fair market value offers</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-[var(--color-primary)] rounded-full"></div>
              <p>No commissions or closing costs</p>
            </div>
          </div>

          {/* <div className="p-6 bg-white rounded-lg shadow-md border-l-4 border-[var(--color-primary)]">
            <p className="text-2xl font-bold text-[var(--color-primary)]">
              500+ Homes Bought & Counting
            </p>
          </div> */}

          <button className="bg-[var(--color-primary)] hover:bg-[var(--color-accent)] text-white font-bold py-3 px-8 rounded-full transition-all cursor-pointer">
            Contact Us Today
          </button>
        </div>

        {/* Portrait Image Container - Strict 1:2 Aspect Ratio */}
        <div className="lg:w-1/2 order-1 lg:order-2">
          <div className="aspect-[1.5/2] w-full max-w-[450px] mx-auto overflow-hidden rounded-2xl shadow-xl border-4 border-[var(--color-accent)]">
            <img
              src="https://st.depositphotos.com/1054749/1585/i/450/depositphotos_15856801-stock-photo-young-african-american-businessman-holding.jpg"
              alt="Our Team"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
