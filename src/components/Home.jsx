import React from "react";
import SolarIllustration from "../assets/homeImage.jpg";
import { FaSun } from "react-icons/fa"; 

const Home = () => {
  return (
    <section
      id="home"
      className="flex items-center justify-center h-screen bg-green-300 bg-cover bg-center bg-fixed text-white px-4 md:px-12"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../assets/homeImage.jpg')",
      }}
    >
      <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto">
        
        <div className="text-center md:text-left md:mr-8 flex-1 space-y-6">
          <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-4 flex items-center gap-2">
            Solar Energy for a Brighter Future
          </h2>
          <p className="text-xl md:text-2xl font-light text-gray-200">
            NRG Solar Service - Reliable, High-Quality Solar Solutions
          </p>
          <a
            href="#about-us"
            className="inline-block mt-6 px-8 py-3 bg-yellow-500 text-lg font-semibold text-gray-900 rounded-lg shadow-lg hover:bg-yellow-400 transition duration-300"
          >
            Learn More
          </a>
        </div>

        <div className="flex-1 mt-8 md:mt-0">
          <img
            src={SolarIllustration}
            alt="Solar Installation"
            className="w-full md:w-5/6 rounded-lg shadow-2xl border-4 border-yellow-500 transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
