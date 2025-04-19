

const steps = [
  {
    title: "Contact Us",
    desc: "Schedule an appointment to discuss your property.",
  },
  {
    title: "Get a Fair Offer",
    desc: "Receive an offer based on market analysis.",
  },
  {
    title: "Get Paid Fast",
    desc: "Close the deal and get paid within 30 days.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-16 px-4 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">
        Our Simple 3‑Step Process
      </h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, idx) => (
          <div key={idx} className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">
              STEP {idx + 1}: {step.title}
            </h3>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
