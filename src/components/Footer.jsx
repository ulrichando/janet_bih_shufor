import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import "/src/css/Footer.css";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 md:py-20 flex flex-col border-t border-[#E4CB86]">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between">
        <div className="text-white text-center md:text-left mb-4 md:mb-0">
          <span className="font-bold text-2xl md:text-4xl">
            JANET BIH <br />
            SHUFOR
          </span>
        </div>
        <nav className="my-4 md:my-0 flex flex-col items-center md:flex-row">
          <Link to="/PrivacyPolicy" className="text-white md:mr-8 mb-2 md:mb-0">
            Privacy Policy
          </Link>
          <Link to="/TermsOfUse" className="text-white md:mr-8 mb-2 md:mb-0">
            Terms of Use
          </Link>
          <Link to="/Sitemap" className="text-white">
            Sitemap
          </Link>
        </nav>
        <div className="flex">
          <div className="mr-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-white text-xl" />
            </a>
          </div>
          <div className="mr-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-white text-xl" />
            </a>
          </div>
          <div>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-white text-xl" />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-4">
        <p className="text-xs md:text-sm">
          &copy; 2023 Janet Bih Shufor. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
