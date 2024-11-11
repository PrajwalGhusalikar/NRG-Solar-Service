import React from "react";
import {
  FaSolarPanel,
  FaMoneyBillWave,
  FaToolbox,
  FaIndustry,
} from "react-icons/fa";

const Service = () => {
  const services = [
    {
      title: "Rooftop Solar Installation",
      description: "Efficient solar panels tailored for your rooftop.",
      icon: <FaSolarPanel />,
    },
    {
      title: "Affordable Solar Solutions",
      description: "Cost-effective options without compromising on quality.",
      icon: <FaMoneyBillWave />,
    },
    {
      title: "Expert Installation & Maintenance",
      description:
        "Highly skilled technicians ensure top-notch installation and maintenance.",
      icon: <FaToolbox />,
    },
    {
      title: "Domestic, Agricultural, Commercial",
      description: "Versatile solutions for all sectors and energy needs.",
      icon: <FaIndustry />,
    },
  ];

  return (
    <section id="service" className="bg-white py-24 text-gray-700">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-5xl font-bold mb-16 text-green-600">
          Our Services
        </h2>
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-teal-50 to-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
            >
              <div className="flex items-center justify-center text-green-500 text-5xl mb-5">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
