import React, { useState } from "react";
import { Link } from "react-scroll";
import logo from "../assets/NRG-LOGO.png";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-green-700 via-teal-600 to-green-500 p-5 fixed top-0 w-full z-10 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">

        <div className="flex items-center space-x-4">
          <img
            src={logo}
            className="h-16 w-16 rounded-full shadow-md"
            alt="NRG Logo"
          />
          <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-wider">
            NRG Solar Service
          </h1>
        </div>

        <div className="hidden md:flex space-x-8 text-lg font-medium">
          {[
            { to: "home", label: "Home" },
            { to: "about-us", label: "About Us" },
            { to: "service", label: "Service" },
            { to: "gallery", label: "Gallery" },
            { to: "contact-us", label: "Contact Us" },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-white cursor-pointer hover:text-gray-300 transition-colors duration-200"
            >
              {item.label}
            </Link>
          ))}
        </div>

        
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-3xl focus:outline-none"
        >
          ☰
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-gradient-to-r from-green-800 via-teal-700 to-green-600 mt-2 rounded-lg shadow-lg py-4">
          <div className="flex flex-col items-center space-y-4">
            {[
              { to: "home", label: "Home" },
              { to: "about-us", label: "About Us" },
              { to: "service", label: "Service" },
              { to: "gallery", label: "Gallery" },
              { to: "contact-us", label: "Contact Us" },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => setMenuOpen(false)}
                className="text-white hover:text-gray-300 text-lg font-medium transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
