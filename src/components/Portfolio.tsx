

const homes = [
  { img: "/images/home1.jpg", location: "Austin, TX" },
  { img: "/images/home2.jpg", location: "Orlando, FL" },
  { img: "/images/home3.jpg", location: "Portland, OR" },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">
        Recently Purchased Homes
      </h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {homes.map((home, idx) => (
          <div key={idx} className="overflow-hidden rounded-lg shadow">
            <img
              src={home.img}
              alt={home.location}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <p className="font-semibold">{home.location}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
