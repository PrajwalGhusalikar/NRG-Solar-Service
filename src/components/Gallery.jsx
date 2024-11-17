import React, { useState } from "react";
import Image1 from "../assets/homeImage.jpg";
import Image2 from "../assets/photovoltaics-solar-power-station-energy-from-natural.jpg";
import Image3 from "../assets/image3.jpg";

const Gallery = () => {
  const projects = [
    {
      image: Image1,
      title: "Solar Project 1",
      description: "5 KW system located at City Center, NY. Owner: John Doe",
    },
    {
      image: Image2,
      title: "Solar Project 2",
      description: "10 KW system located in Brooklyn, NY. Owner: Jane Smith",
    },
    {
      image: Image3,
      title: "Solar Project 3",
      description: "15 KW system located in Queens, NY. Owner: Mike Johnson",
    },
    {
      image: Image2,
      title: "Solar Project 4",
      description: "12 KW system located at Long Island, NY. Owner: Sarah Lee",
    },
    {
      image: Image3,
      title: "Solar Project 5",
      description:
        "20 KW system located in Staten Island, NY. Owner: Jack Daniels",
    },
  ];

  const [showAllProjects, setShowAllProjects] = useState(false);

  const toggleViewAllProjects = () => setShowAllProjects(!showAllProjects);

  return (
    <section
      id="gallery"
      className="bg-gradient-to-r from-green-700 via-green-800 to-green-700 py-24"
    >
      <div className="mx-auto px-6 md:px-12 max-w-screen-xl">
        <h2 className="text-4xl font-bold text-center mb-8 text-white tracking-wide">
          Our Solar Projects Gallery
        </h2>

        <div className="text-center mt-6">
          <button
            onClick={toggleViewAllProjects}
            className="px-8 py-3 bg-white text-green-600 text-lg font-semibold rounded-lg shadow-lg hover:bg-green-100 transition-all duration-300 transform hover:scale-105"
          >
            {showAllProjects ? "Hide All Projects" : "View All Projects"}
          </button>
        </div>

        <div className="grid gap-8 mt-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {(showAllProjects ? projects : projects.slice(0, 3)).map(
            (project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-all duration-500 ease-in-out hover:opacity-75"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800 hover:text-green-500 transition duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600">{project.description}</p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
