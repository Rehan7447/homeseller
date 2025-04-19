import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const TopHeadLine: React.FC = () => {
  return (
    <div className="bg-[var(--color-primary)] text-white text-sm py-2 px-4 flex justify-between items-center">
      {/* Left Section */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-1">
          <FaPhoneAlt />
          <span>+1 (123) 456-7890</span>
        </div>
        <div className="flex items-center space-x-1">
          <FaEnvelope />
          <span>info@example.com</span>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[var(--color-accent)]"
        >
          <FaInstagram />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[var(--color-accent)]"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[var(--color-accent)]"
        >
          <FaTwitter />
        </a>
      </div>
    </div>
  );
};

export default TopHeadLine;
