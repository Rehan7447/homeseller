import React from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const TopHeadLine: React.FC = () => {
  return (
    <div className="bg-[var(--color-primary)] text-white text-sm py-2 px-4 flex justify-between items-center">
      {/* Left Section */}
      <div className="flex items-center space-x-10">
        <div className="flex items-center space-x-1">
          <a
            href="tel:9107200173"
            className="flex items-center space-x-1 hover:text-[var(--color-accent)]"
          >
            <FaPhoneAlt />
            <span>(910) 7200173</span>
            {/* <span className="hidden sm:inline">(910) 7200173</span> */}
          </a>
        </div>
        <div className="flex items-center space-x-1">
          <a
            href="mailto:jordan@bluebrowninvestments.com"
            className="flex items-center space-x-1 hover:text-[var(--color-accent)]"
          >
            <FaEnvelope />
            <span>jordan@bluebrowninvestments.com</span>
            {/* <span className="hidden sm:inline">jordan@bluebrowninvestments.com</span> */}
          </a>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        {/* <a
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
        </a> */}
      </div>
    </div>
  );
};

export default TopHeadLine;
