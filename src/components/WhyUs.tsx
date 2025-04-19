

const reasons = [
  {
    title: "No Hidden Fees",
    desc: "We handle all closing costs—what we offer is what you get.",
  },
  { title: "Quick Closings", desc: "Choose your closing date, even tomorrow." },
  { title: "Sell As-Is", desc: "No repairs or cleaning required." },
];

export default function WhyUs() {
  return (
    <section id="why" className="py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us?</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {reasons.map((item, idx) => (
          <div key={idx} className="text-center">
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
