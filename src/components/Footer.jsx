const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6 md:px-12 grid gap-8 md:grid-cols-3 text-center md:text-left">
        
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-green-500">
            NRG Solar Service
          </h3>
          <p className="text-gray-400">
            Providing reliable, high-quality solar solutions for residential,
            agricultural, and commercial sectors.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-green-500">
            Contact Us
          </h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              Email:{" "}
              <a
                href="mailto:info@nrgsolarservice.com"
                className="text-white hover:underline"
              >
                info@nrgsolarservice.com
              </a>
            </li>
            <li>
              Phone:{" "}
              <a href="tel:+1234567890" className="text-white hover:underline">
                +1 234 567 890
              </a>
            </li>
            <li>Vendor Name: NRG Solar Service Inc.</li>
            <li>Vendor Number: #NRG-2024</li>
          </ul>
        </div>

        {/* Address */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-green-500">Address</h3>
          <p className="text-gray-400">
            123 Solar Avenue, <br />
            Green City, TX 78901 <br />
            United States
          </p>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500">
        <p>&copy; 2024 NRG Solar Service. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
