import React, { useState, useEffect } from "react";
import Image1 from "../assets/homeImage.jpg";
import Image2 from "../assets/photovoltaics-solar-power-station-energy-from-natural.jpg";
import Image3 from "../assets/image3.jpg";

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const interval = 3000;

  const projects = [
    {
      image: Image1,
      title: "5 KW Domestic",
      description:
        "5 KW system located at City Center, Pune, Maharashtra. Owner: John Doe",
      solarPanelType: "Monocrystalline",
      location: "Pune, Maharashtra",
      energySavings: 35,
    },
    {
      image: Image2,
      title: "15 KW Agriculture",
      description:
        "10 KW system located in Nashik, Maharashtra. Owner: Jane Smith",
      solarPanelType: "Polycrystalline",
      location: "Nashik, Maharashtra",
      energySavings: 40,
    },
    {
      image: Image3,
      title: "5 KW Domestic",
      description:
        "15 KW system located in Aurangabad, Maharashtra. Owner: Mike Johnson",
      solarPanelType: "Thin-film",
      location: "Aurangabad, Maharashtra",
      energySavings: 45,
    },
    {
      image: Image2,
      title: "19 KW Commercial",
      description:
        "8 KW system located in Nagpur, Maharashtra. Owner: Sita Rani",
      solarPanelType: "Monocrystalline",
      location: "Nagpur, Maharashtra",
      energySavings: 38,
    },
    {
      image: Image3,
      title: "3 KW Domestic",
      description:
        "12 KW system located in Kolhapur, Maharashtra. Owner: Rajesh Kumar",
      solarPanelType: "Polycrystalline",
      location: "Kolhapur, Maharashtra",
      energySavings: 42,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, interval);
    return () => clearInterval(timer);
    // eslint-disable-next-line
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="flex items-center justify-center p-3 bg-gradient-to-r from-green-400 via-green-600 to-green-800">
      <div className="relative flex flex-col items-center w-full max-w-4xl overflow-hidden">
        <div className="relative flex w-full h-96">
          <div className="w-full h-full overflow-hidden relative">
            <img
              src={projects[currentIndex].image}
              alt={projects[currentIndex].title}
              className="object-cover w-full h-full transition-transform duration-700 transform scale-105 hover:scale-110"
            />
          </div>

          <div
            style={{
              clipPath: "ellipse(100% 100% at 100% 50%)",
            }}
            className="absolute top-0 right-0 w-1/2 h-full flex flex-col justify-center p-6 bg-gradient-to-t from-green-200 to-green-100"
          >
            <h2 className="text-3xl font-extrabold text-green-800 mb-4 animate-fadeIn">
              {projects[currentIndex].title}
            </h2>
            <p className="text-lg text-gray-700 animate-fadeIn delay-200 mb-4">
              {projects[currentIndex].description}
            </p>
            <p className="text-sm text-green-700 font-semibold">
              Solar Panel Type: {projects[currentIndex].solarPanelType}
            </p>
            <p className="text-sm text-green-700 font-semibold">
              Location: {projects[currentIndex].location}
            </p>
            <p className="text-sm text-green-700 font-semibold">
              Energy Savings: {projects[currentIndex].energySavings}%
            </p>
          </div>
        </div>

        <div className="flex justify-center space-x-2 mt-4">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-4 h-4 rounded-full border-2 ${
                index === currentIndex
                  ? "bg-green-800 border-green-200"
                  : "bg-white border-gray-300"
              } transition-all duration-300`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
