import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import '/src/css/Sidenav.css'; // Import the CSS for additional styling

const Sidenav = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <AiOutlineMenu
        onClick={handleNav}
        className={`absolute top-6 right-4 z-[99] md:hidden bg-[#E4CB86] p-2 ${nav ? 'hidden' : ''}`}
        style={{ fontSize: '30px', color: 'black' }}
      />

      <AiOutlineClose
        onClick={handleNav}
        className={`absolute top-6 right-4 z-[99] bg-[#E4CB86] p-2 ${!nav ? 'hidden' : ''}`}
        style={{ fontSize: '30px', color: 'black' }}
      />

      {nav && (
        <div className="sidenav-container">
          {/* Content of the expanded menu */}
          <Link to="/" className="menu-link">
            Home
          </Link>
          <Link to="/About" className="menu-link">
            About Me
          </Link>
          <Link to="/Research" className="menu-link">
            Research
          </Link>
          <Link to="/Cv" className="menu-link">
            CV
          </Link>
          <Link to="/Publication" className="menu-link">
            Publication
          </Link>
          <Link to="/Contact" className="menu-link">
            Contact
          </Link>
        </div>
      )}
    </div>
  );
};

export default Sidenav;
