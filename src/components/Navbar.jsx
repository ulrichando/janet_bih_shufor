import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="header-container shadow-lg relative z-0 bg-black bg-opacity-100">
      <div className="flex justify-between items-center h-20 text-white max-w-[1240px] mx-auto px-6">
        <h1 className="w-50 text-xl font-bold">
          <Link to="/">
            JANET BIH
            <br /> SHUFOR
          </Link>
        </h1>
        <ul className="hidden md:flex space-x-4 cursor-pointer">
          <li className="p-3 text-sm font-bold">
            <Link to="/">HOME</Link>
          </li>
          <li className="p-3 text-sm font-bold">
            <Link to="/about">ABOUT ME</Link>
          </li>
          <li className="p-3 text-sm font-bold">
            <Link to="/research">RESEARCH</Link>
          </li>
          <li className="p-3 text-sm font-bold">
            <Link to="/cv">CV</Link>
          </li>
          <li className="p-3 text-sm font-bold">
            <Link to="/publication">PUBLICATION</Link>
          </li>
          <li className="p-3 text-sm font-bold">
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>

        <div className="items-center space-x-4 md:flex hidden">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="my-icon" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="my-icon" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="my-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
