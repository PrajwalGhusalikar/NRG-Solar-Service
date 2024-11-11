import React from "react";
import SolarIllustration from "../assets/homeImage.jpg";

const Home = () => {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center h-screen bg-cover bg-center bg-fixed text-white"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('../assets/homeImage.jpg')",
      }}
    >
      <div className="text-center px-6 md:px-12 max-w-2xl">
        <h2 className="text-6xl font-bold mb-6 leading-tight">
          Solar Energy for a Brighter Future
        </h2>
        <p className="text-2xl mb-8">
          NRG Solar Service - Reliable, High-Quality Solar Solutions
        </p>
        <img
          src={SolarIllustration}
          alt="Solar Installation"
          className="w-2/3 md:w-1/2 mt-10 rounded-lg shadow-2xl"
        />
      </div>
    </section>
  );
};

export default Home;
