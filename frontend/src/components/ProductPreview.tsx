import { useNavigate } from 'react-router-dom';


const ProductPreview = () => {
  const navigate = useNavigate();
  // Dummy product data for demonstration
  const product = {
    description: "A tailored composition in motion. Cut from structured wool with a sculpted shoulder and softened hem, this piece captures presence without force. Worn here in the stillness of a city in motion.",
    price: "7,999",
    mrpText: "MRP incl. of all taxes",
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      "../assets/Jacket-pocket.jpg",
      "../assets/Jacket-pocket.jpg",
      "../assets/Jacket-pocket.jpg"
    ]
  };

  return (
    <div className="min-h-screen bg-white p-4 sm:p-8 lg:p-12 border border-gray-300">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start">
        {/* Left Section: Large empty space / Main Product Image Area */}
        <div className="lg:w-1/2 w-full h-[400px] lg:h-[600px] bg-gray-100 border border-gray-200 rounded-lg mb-8 lg:mb-0 lg:mr-8 flex items-center justify-center text-gray-400 text-xl">
          {/* This area is empty in the image, so we'll keep it as a placeholder div */}
          Main Product View
        </div>

        {/* Right Section: Product Details */}
        <div className="lg:w-1/2 w-full p-4">
          {/* Product Description */}
          <p className="text-gray-800 text-sm sm:text-base leading-relaxed mb-8">
            {product.description}
          </p>

          {/* Product Image Gallery */}
          <div className="flex space-x-4 mb-8 justify-center lg:justify-start">
            {product.images.map((imgSrc, index) => (
              <img
                key={index}
                src={imgSrc}
                alt={`Product view ${index + 1}`}
                className="w-24 h-32 sm:w-32 sm:h-40 object-cover border border-gray-200 rounded-md"
              />
            ))}
          </div>

          {/* Price Section */}
          <div className="flex items-baseline mb-8">
            <span className="text-2xl sm:text-3xl font-semibold text-gray-900 mr-2">₹{product.price}</span>
            <span className="text-gray-500 text-sm">{product.mrpText}</span>
          </div>

          {/* Size Selection */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <p className="text-gray-800 text-base font-normal">Please select a size</p>
              <a href="#" className="text-blue-600 text-sm hover:underline">Size chart</a>
            </div>
            <div className="flex flex-wrap gap-3">
              {product.sizes.map((size, index) => (
                <button
                  key={size}
                  // No onClick handler here, as per request
                  // The image doesn't show any size selected, so none will be styled as active
                  className={`
                    px-5 py-3 border rounded-md text-sm font-medium
                    bg-white text-gray-700 border-gray-300 hover:border-gray-500 hover:text-gray-900
                    transition-colors duration-200
                  `}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              // No onClick handler here, as per request
              className="flex-1 px-6 py-3 border border-black text-black rounded-md
                         hover:bg-gray-100 transition-colors duration-200 text-lg font-medium"
            >
              Add to Cart
            </button>
            <button
              onClick={() => navigate('/checkout')}
              className="flex-1 px-6 py-3 bg-black text-white rounded-md
                         hover:bg-gray-800 transition-colors duration-200 text-lg font-medium"
            >
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPreview;