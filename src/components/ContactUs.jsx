import React from "react";

const ContactUs = () => {
  return (
    <section id="contact-us" className="bg-gray-50 py-24 text-gray-800">
      <div className="container mx-auto px-6 md:px-12 max-w-2xl">
        <h2 className="text-5xl font-bold text-center mb-12 text-green-600">
          Get in Touch
        </h2>
        <p className="text-lg text-center text-gray-600 mb-10">
          Have questions? Reach out to us using the form below, and we'll get
          back to you shortly.
        </p>
        <form className="bg-white p-10 rounded-lg shadow-2xl space-y-6 transition duration-300 ease-in-out hover:shadow-md">
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Your Message
            </label>
            <textarea
              placeholder="Write your message here..."
              className="w-full p-4 border border-gray-300 rounded-md h-40 focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-md font-semibold text-lg hover:bg-green-700 transition-colors duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
