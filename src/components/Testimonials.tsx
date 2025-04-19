

const testimonials = [
  {
    quote: "They closed on my timeline and handled everything.",
    name: "Sarah J.",
  },
  {
    quote: "Best experience selling my house—so fast and easy!",
    name: "Mark T.",
  },
  { quote: "Honest, transparent, and a great offer.", name: "Lisa K." },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 px-4 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">
        What Our Clients Say
      </h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, idx) => (
          <div key={idx} className="bg-white p-6 rounded-lg shadow text-center">
            <p className="italic mb-4">“{t.quote}”</p>
            <p className="font-semibold">— {t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
