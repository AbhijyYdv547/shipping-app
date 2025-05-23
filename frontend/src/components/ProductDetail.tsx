import React from 'react';

const ProductDetail = () => {
  return (
    <div className="bg-black min-h-screen text-white p-4 sm:p-6 md:p-8">
      {/* Product Information Sections */}
      <div className="mb-8 border-b border-gray-800 pb-4">
        <div className="flex justify-between items-center py-3 cursor-pointer">
          <p className="text-lg sm:text-xl font-light">Size & Fit</p>
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </div>
      </div>

      <div className="mb-8 border-b border-gray-800 pb-4">
        <div className="flex justify-between items-center py-3 cursor-pointer">
          <p className="text-lg sm:text-xl font-light">Delivery & Returns</p>
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </div>
      </div>

      <div className="mb-12 border-b border-gray-800 pb-4">
        <div className="flex justify-between items-center py-3 cursor-pointer">
          <p className="text-lg sm:text-xl font-light">How This Was Made</p>
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </div>
      </div>

      {/* Customer Review Section */}
      <div className="pt-8">
        <h2 className="text-gray-400 text-sm tracking-widest uppercase mb-6">Our Customers</h2>
        <div className="flex items-center justify-between">
          {/* Left Arrow for Reviews */}
          <button className="text-gray-600 hover:text-white transition-colors duration-200 focus:outline-none hidden sm:block">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </button>

          {/* Main Review Quote */}
          <div className="flex-grow max-w-xl mx-auto sm:mx-0">
            <blockquote className="text-2xl sm:text-3xl italic font-serif leading-relaxed mb-4">
              <span className="text-gray-600 text-4xl mr-2">“</span>Understated, but unforgettable. It feels like it was made for me
            </blockquote>
            <p className="text-base text-gray-300 font-light">Random Woman</p>
            <p className="text-sm text-gray-500">NY, USA</p>
          </div>

          {/* Right Arrow and Customer Avatars */}
          <div className="flex flex-col items-center ml-4">
            <button className="text-gray-600 hover:text-white transition-colors duration-200 focus:outline-none">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
            <div className="mt-4 space-y-3">
              <img src="https://via.placeholder.com/40/FF5733/FFFFFF?text=A" alt="Customer A" className="w-10 h-10 rounded-full border-2 border-gray-700 object-cover" />
              <img src="https://via.placeholder.com/40/33C1FF/FFFFFF?text=B" alt="Customer B" className="w-10 h-10 rounded-full border-2 border-gray-700 object-cover" />
              <img src="https://via.placeholder.com/40/33FF57/FFFFFF?text=C" alt="Customer C" className="w-10 h-10 rounded-full border-2 border-gray-700 object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;