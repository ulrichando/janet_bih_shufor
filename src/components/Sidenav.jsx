import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';

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
        <div className="fixed w-full flex flex-col justify-center z-20 text-white items-center mt-15">
          {/* Content of the expanded menu */}
          <Link to="/" className="w-[100%] flex justify-top items-left shadow-lg bg-black p-2 cursor-pointer">
            <span className="pl-4">Home</span>
          </Link>
          <Link to="/About" className="w-[100%] flex justify-top items-left shadow-lg bg-black p-2 cursor-pointer">
            <span className="pl-4">About Me</span>
          </Link>
          <Link to="/Research" className="w-[100%] flex justify-top items-left shadow-lg bg-black p-2 cursor-pointer">
            <span className="pl-4">Research</span>
          </Link>
          <Link to="/Cv" className="w-[100%] flex justify-top items-left shadow-lg bg-black p-2 cursor-pointer">
            <span className="pl-4">CV
            </span>
          </Link>
          <Link to="/Publication" className="w-[100%] flex justify-top items-left shadow-lg bg-black p-2 cursor-pointer">
            <span className="pl-4">Publication</span>
          </Link>
          <Link to="/Contact" className="w-[100%] flex justify-top items-left shadow-lg bg-black p-2 cursor-pointer">
            <span className="pl-4">Contact</span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Sidenav;
