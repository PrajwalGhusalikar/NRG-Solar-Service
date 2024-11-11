import React from "react";

const Service = () => {
  const services = [
    {
      title: "Rooftop Solar Installation",
      description: "Efficient solar panels tailored for your rooftop.",
    },
    {
      title: "Affordable Solar Solutions",
      description: "Cost-effective options without compromising on quality.",
    },
    {
      title: "Expert Installation & Maintenance",
      description:
        "Highly skilled technicians ensure top-notch installation and maintenance.",
    },
    {
      title: "Domestic, Agricultural, Commercial",
      description: "Versatile solutions for all sectors and energy needs.",
    },
  ];

  return (
    <section id="service" className="bg-white py-20 text-gray-700">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-bold text-center mb-10 text-green-600">
          Our Services
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
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
