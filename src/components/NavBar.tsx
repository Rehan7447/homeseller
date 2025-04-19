import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white text-charcoal shadow px-4 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="text-2xl font-bold text-slate-blue">LocalHomeBuyers</div>

      {/* Hamburger Icon (Mobile View) */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-slate-blue text-2xl">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Navigation Links */}
      <ul
        className={`absolute md:static top-20 left-0 w-full md:w-auto bg-white md:bg-transparent md:flex md:space-x-6 md:items-center md:opacity-100 transition-all duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <li className="py-2 px-4 hover:text-coral cursor-pointer md:py-0 md:px-0">
          <a href="#who" className="text-charcoal hover:text-coral">
            Who We Are
          </a>
        </li>
        <li className="py-2 px-4 hover:text-coral cursor-pointer md:py-0 md:px-0">
          <a href="#process" className="text-charcoal hover:text-coral">
            Process
          </a>
        </li>
        <li className="py-2 px-4 hover:text-coral cursor-pointer md:py-0 md:px-0">
          <a href="#why" className="text-charcoal hover:text-coral">
            Why Us
          </a>
        </li>
        <li className="py-2 px-4 hover:text-coral cursor-pointer md:py-0 md:px-0">
          <a href="#testimonials" className="text-charcoal hover:text-coral">
            Testimonials
          </a>
        </li>
        <li className="py-2 px-4 hover:text-coral cursor-pointer md:py-0 md:px-0">
          <a href="#portfolio" className="text-charcoal hover:text-coral">
            Portfolio
          </a>
        </li>
        <li className="py-2 px-4 hover:text-coral cursor-pointer md:py-0 md:px-0">
          <a href="#contact" className="text-charcoal hover:text-coral">
            Contact
          </a>
        </li>
      </ul>

      {/* Call-to-Action Button */}
      <button className="hidden md:block bg-coral text-white px-4 py-2 rounded-md hover:bg-opacity-90 cursor-pointer">
        Get Offer
      </button>
    </nav>
  );
}
