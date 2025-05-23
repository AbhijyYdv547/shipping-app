import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8 px-4 sm:px-8 lg:px-16 relative">
      {/* Top thin line border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gray-800"></div>

      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-end">
        {/* Eclypse Logo / Brand Name */}
        <div className="mb-8 md:mb-0 md:w-1/4">
          <div className="flex items-center text-3xl font-light mb-4">
            <span>Eclypse</span>
            {/* Small upward arrow icon next to Eclypse */}
            <svg className="w-4 h-4 ml-2 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-2 gap-x-12 gap-y-2 mb-8 md:mb-0 md:w-1/4">
          <div>
            <a href="#" className="block text-gray-400 hover:text-white transition-colors duration-200 py-1 font-light">Home</a>
            <a href="#" className="block text-gray-400 hover:text-white transition-colors duration-200 py-1 font-light">Our Customers</a>
          </div>
          <div>
            <a href="#" className="block text-gray-400 hover:text-white transition-colors duration-200 py-1 font-light">About</a>
            <a href="#" className="block text-gray-400 hover:text-white transition-colors duration-200 py-1 font-light">Contacts</a>
          </div>
          {/* Add 'Buy' separately as it looks distinct in the image */}
          <div>
             <a href="#" className="block text-gray-400 hover:text-white transition-colors duration-200 py-1 font-light">Buy</a>
          </div>
        </div>


        {/* Contact Information */}
        <div className="mb-8 md:mb-0 md:w-1/4">
          <p className="text-gray-500 text-sm tracking-widest uppercase mb-2">Contact</p>
          <p className="text-white text-lg font-light">+91.123-456-7890</p>
        </div>

        {/* Email Information */}
        <div className="md:w-1/4">
          <p className="text-gray-500 text-sm tracking-widest uppercase mb-2">Email</p>
          <p className="text-white text-lg font-light">eclypse@gmail.com</p>
        </div>
      </div>

      {/* Scroll to Top Button and Copyright */}
      <div className="flex flex-col sm:flex-row justify-between items-end mt-12 pt-8 border-t border-gray-800">
        <p className="text-gray-500 text-sm order-2 sm:order-1 mt-4 sm:mt-0">© Eclypse 2025</p>
      </div>
    </footer>
  );
};

export default Footer;