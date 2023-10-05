import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '/src/css/Footer.css';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-40 p-10 flex flex-col h-screen-80 border-t border-[#E4CB86]">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between">
        <div className="text-white text-center md:text-left">
          <span className="font-bold text-5xl">
            JANET BIH <br />SHUFOR
          </span>
        </div>
        <nav className="my-4 md:my-0">
          {/* Navigation links go here */}
          <ul className="flex flex-col md:flex-row items-center">
            <li className="md:mr-8 mb-2 md:mb-0">
              <Link to="/privacy-policy" className="text-white">
                Privacy Policy
              </Link>
            </li>
            <li className="md:mr-8 mb-2 md:mb-0">
              <Link to="/terms-of-use" className="text-white">
                Terms of Use
              </Link>
            </li>
             <li className="md:mr-8 mb-2 md:mb-0">
              <Link to="/terms-of-use" className="text-white">
                Sitemap
              </Link>
            </li>
            {/* Add more links with appropriate paths */}
          </ul>
        </nav>
        <div className="flex">
          {/* Social icons go here */}
          <div className="mr-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-white text-lg" />
            </a>
          </div>
          <div className="mr-4">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-white text-lg" />
            </a>
          </div>
          <div>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-white text-lg" />
            </a>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="text-center mt-auto">
        <p className="text-sm md:text-base mt-10">&copy; 2023 Janet Bih Shufor. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
