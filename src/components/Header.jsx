import React, { useState } from "react";
import logo1 from '../images/logo.png'

const Header = () => {
    // toggle menu
    //  const [isOpen,SetIsOpen]=useState(false);

    //  const handleToggle = () => {
    //   SetIsOpen(!isOpen);
    //   };

  





  return (
    <div id="header">


        {/* toggle button do */}
           {/* Toggle Button (Visible Below 786px) */}
      <button
        className="block md:hidden p-2 rounded-md bg-gray-200 hover:bg-gray-300 focus:outline-none"
        // onClick={handleToggle}
        aria-label="Toggle Menu"
      >
        {/* Toggle Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-800"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            // d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>





        {/* {isOpen&&( */}
        <header className=" fixed top-0 font-bold  w-full z-50 flex  justify-evenly items-center px-8 py-4  bg-[#FFFFFF] shadow-md">
        {/* Logo */}
        {/* add logo here */}
          {/* Logo */}
          <div className="header-logo">
          <img src={logo1} alt="Logo" className="h-16 w-auto" /> {/* Logo image */}
        </div>
        {/* Navigation Links */}
        <nav className="header-links flex space-x-8">
          <a
            href="#process"
            className="relative hover:after:w-full after:w-0 after:h-[2px] after:bg-[#5a39fe] after:block after:transition-all after:duration-300 after:origin-left"
          >
            PROCESS
          </a>
          <a
            href="#projects"
            className="relative  hover:after:w-full after:w-0 after:h-[2px] after:bg-[#5a39fe] after:block after:transition-all after:duration-300 after:origin-left"
          >
            PROJECTS
          </a>
          <a
            href="#team"
            className="relative  hover:after:w-full after:w-0 after:h-[2px] after:bg-[#5a39fe] after:block after:transition-all after:duration-300 after:origin-left"
          >
            TEAM
          </a>
          <a
            href="#contact"
            className="relative  hover:after:w-full after:w-0 after:h-[2px] after:bg-[#5a39fe] after:block after:transition-all after:duration-300 after:origin-left"
          >
            CONTACT
          </a>
        </nav>
      </header> 
      {/* )} */}
    </div>
  );
};

export default Header;
