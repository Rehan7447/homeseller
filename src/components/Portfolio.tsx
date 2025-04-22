import { useState } from "react";
import land1 from "../assets/land1.jpeg";
import land2 from "../assets/land2.png";
import land3 from "../assets/land3.jpeg";
import land4 from "../assets/land4.png";
import ImageModal from "./ImageModal";

const homes = [
  { img: land1, location: "" },
  { img: land2, location: "" },
  { img: land3, location: "" },
  { img: land4, location: "" },
];

export default function Portfolio() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const openModal = (img: string) => {
    setSelectedImage(img);
    setModalOpen(true);
  };

  return (
    <section id="portfolio" className="py-16 px-4">
      <div className="text-center mb-8">
        <p className="text-lg text-[var(--color-accent)] mb-2">Explore</p>
        <h2 className="text-4xl font-extrabold text-[var(--color-primary)]">
          Our <span className="text-[var(--color-secondary)]">Portfolio</span>
        </h2>
        <div className="mx-auto w-16 h-1 bg-[var(--color-accent)] mt-2 rounded"></div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {homes.map((home, idx) => (
          <div
            key={idx}
            className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer"
            onClick={() => openModal(home.img)}
          >
            <img
              src={home.img}
              alt={home.location}
              className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-lg font-semibold text-white">
                {home.location}
              </p>
            </div>
          </div>
        ))}
      </div>

      <ImageModal
        isOpen={modalOpen}
        imgSrc={selectedImage}
        onClose={() => setModalOpen(false)}
        onNext={() => {
          const currentIndex = homes.findIndex(
            (home) => home.img === selectedImage
          );
          const nextIndex = (currentIndex + 1) % homes.length;
          setSelectedImage(homes[nextIndex].img);
        }}
        onPrev={() => {
          const currentIndex = homes.findIndex(
            (home) => home.img === selectedImage
          );
          const prevIndex = (currentIndex - 1 + homes.length) % homes.length;
          setSelectedImage(homes[prevIndex].img);
        }}
      />
    </section>
  );
}
