import React from "react";

const ContactUs = () => {
  return (
    <section id="contact-us" className="bg-gray-200 py-20 text-gray-800">
      <div className="container mx-auto px-6 md:px-12 max-w-lg">
        <h2 className="text-4xl font-bold text-center mb-10 text-green-600">
          Contact Us
        </h2>
        <form className="bg-white p-8 rounded-lg shadow-lg space-y-4">
          <div>
            <label className="block text-lg font-medium mb-2">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>
          <div>
            <label className="block text-lg font-medium mb-2">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>
          <div>
            <label className="block text-lg font-medium mb-2">Message</label>
            <textarea
              placeholder="Your Message"
              className="w-full p-3 border rounded-md h-32 focus:outline-none focus:ring-2 focus:ring-green-600"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-md font-semibold hover:bg-green-700 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
