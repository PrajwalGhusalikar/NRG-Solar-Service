import React from "react";
import { FaLeaf, FaSolarPanel, FaHandHoldingHeart } from "react-icons/fa"; // Icons for visual interest

const AboutUs = () => {
  return (
    <section
      id="about-us"
      className="bg-gradient-to-r from-green-200 via-teal-100 to-green-200 text-white py-20 md:py-32 flex items-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="container mx-auto px-6 md:px-16 max-w-5xl">
        <div className="text-center md:text-left space-y-8">
          <h2 className="text-5xl font-extrabold mb-4 text-green-800 drop-shadow-lg">
            About NRG Solar Service
          </h2>
          <p className="text-2xl leading-relaxed max-w-4xl mx-auto md:mx-0 text-green-700 font-light">
            At NRG Solar Service, we’re dedicated to bringing clean, affordable,
            and high-quality solar solutions to all. With a focus on sustainable
            energy, we cater to domestic, agricultural, and commercial sectors,
            ensuring that each installation is built to last.
          </p>
          <p className="text-lg text-green-700 max-w-4xl mx-auto md:mx-0">
            Our skilled team delivers expert installations, ongoing maintenance,
            and complete support for every project. We believe in a greener
            tomorrow and are here to help make solar energy accessible and
            reliable for all.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-3 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start text-emerald-700 space-y-4">
              <FaSolarPanel className="text-5xl text-yellow-300 drop-shadow-md" />
              <h3 className="text-2xl font-semibold">
                High-Quality Solar Panels
              </h3>
              <p>
                We use only the best materials for long-lasting, efficient
                energy solutions.
              </p>
            </div>
            <div className="flex flex-col items-center md:items-start text-emerald-700 space-y-4">
              <FaLeaf className="text-5xl text-green-500 drop-shadow-md" />
              <h3 className="text-2xl font-semibold">
                Eco-Friendly & Affordable
              </h3>
              <p>
                We’re committed to sustainable practices with cost-effective
                options.
              </p>
            </div>
            <div className="flex flex-col items-center md:items-start text-emerald-700 space-y-4">
              <FaHandHoldingHeart className="text-5xl text-red-300 drop-shadow-md" />
              <h3 className="text-2xl font-semibold">
                Expert Support & Maintenance
              </h3>
              <p>
                Our team is with you every step of the way, from installation to
                maintenance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
