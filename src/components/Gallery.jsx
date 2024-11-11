import React from "react";
import Image1 from "../assets/homeImage.jpg";
import Image2 from "../assets/homeImage.jpg";

const Gallery = () => {
  const images = [Image1, Image2]; 
  return (
    <section id="gallery" className="bg-gray-100 py-20">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-bold text-center mb-10 text-green-600">
          Our Gallery
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Gallery ${index + 1}`}
              className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
