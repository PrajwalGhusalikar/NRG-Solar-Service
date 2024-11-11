import React, { useState } from "react";
import Image1 from "../assets/homeImage.jpg";
import Image2 from "../assets/photovoltaics-solar-power-station-energy-from-natural.jpg";
import Image3 from "../assets/image3.jpg";
const Gallery = () => {
  const images = [ Image2,Image1, Image3, Image2];
  const [lightbox, setLightbox] = useState(null);

  const openLightbox = (image) => setLightbox(image);
  const closeLightbox = () => setLightbox(null);

  return (
    <section id="gallery" className="bg-gray-50 py-24">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-5xl font-bold text-center mb-12 text-green-600">
          Our Gallery
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {images.map((image, index) => (
            <div
              key={index}
              onClick={() => openLightbox(image)}
              className="cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
          ))}
        </div>

        {lightbox && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            onClick={closeLightbox}
          >
            <img
              src={lightbox}
              alt="Enlarged view"
              className="w-3/4 h-auto rounded-lg shadow-2xl"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
