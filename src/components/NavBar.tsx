import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white text-[var(--color-text)] shadow px-4 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="text-2xl font-bold text-[var(--color-primary)] cursor-pointer">
        <a href="#home" className="flex items-center ml-0 custom1050:ml-6">
          <img src={logo} alt="Logo" className="h-15" />
        </a>
      </div>

      {/* Hamburger Icon (Mobile View) */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-[var(--color-primary)] text-2xl cursor-pointer"
          aria-label="Toggle navigation"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Navigation Links */}
      <ul
        className={`absolute md:static top-20 left-0 w-full md:w-auto bg-white md:bg-transparent md:flex md:space-x-6 md:items-center md:opacity-100 transition-all duration-300 ${
          isOpen
            ? "display-block z-10 pt-5 mt-7 md:mt-0 custom1050:mt-0"
            : "hidden"
        } `}
      >
        {[
          { name: "Who We Are", href: "#who" },
          { name: "Process", href: "#process" },
          // { name: "Why Us", href: "#why" },
          // { name: "Testimonials", href: "#testimonials" },
          { name: "Portfolio", href: "#portfolio" },
          { name: "Contact", href: "#contactBottom" },
        ].map((item) => (
          <li
            key={item.href}
            className="py-2 px-4 cursor-pointer md:py-0 md:px-0"
          >
            <a
              href={item.href}
              className="text-[var(--color-text)] hover:text-[var(--color-accent)]"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>

      {/* Call-to-Action Button */}
      <button
        className="hidden md:block bg-[var(--color-primary)] text-white px-4 py-2 rounded-md hover:bg-opacity-90 cursor-pointer hover:bg-[var(--color-accent)] transition duration-300"
        onClick={() => (window.location.href = "#contactBottom")}
      >
        Get Offer
      </button>
    </nav>
  );
}
