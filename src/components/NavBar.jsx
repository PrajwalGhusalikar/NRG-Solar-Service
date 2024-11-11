import React from "react";
import { Link } from "react-scroll";

const NavBar = () => {
  return (
    <nav className="bg-gradient-to-r from-green-600 via-green-500 to-green-400 p-6 fixed top-0 w-full z-10 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-4xl font-bold text-white tracking-wider">
          NRG Solar Service
        </h1>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6 font-medium">
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
              className="text-white hover:text-gray-200 cursor-pointer transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white focus:outline-none">
     
          <span className="text-3xl">☰</span>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
