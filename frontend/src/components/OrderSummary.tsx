
const OrderSummary = () => {
  return (
    <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm w-full max-w-sm mx-auto">
      {/* Disclaimer */}
      <p className="text-gray-600 text-xs sm:text-sm mb-6 leading-relaxed">
        By placing your order, you agree to our company <a href="#" className="underline hover:text-black">Privacy policy</a> and <a href="#" className="underline hover:text-black">Conditions of use</a>.
      </p>

      <h3 className="text-xl font-normal text-gray-800 mb-6">Order Summary</h3>

      {/* Itemized List */}
      <div className="text-gray-700 text-sm mb-6 space-y-2">
        <div className="flex justify-between">
          <span>Items - Silhouette No. 1 - Vermilion</span>
          <span className="font-medium">7,999</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping and handling:</span>
          <span className="font-medium">200</span>
        </div>
        <div className="flex justify-between">
          <span>Before tax:</span>
          <span className="font-medium">6,599</span>
        </div>
        <div className="flex justify-between">
          <span>Tax Collected:</span>
          <span className="font-medium">1,400</span>
        </div>
      </div>

      {/* Order Total */}
      <div className="flex justify-between items-center text-lg sm:text-xl font-normal text-gray-900 mt-8 pt-4 border-t border-gray-200">
        <span>Order Total:</span>
        <span className="font-semibold">8,199</span>
      </div>

      {/* Place Order Button */}
      <button className="w-full bg-black text-white py-3 mt-8 rounded-md hover:bg-gray-800 transition-colors duration-200 text-lg">
        Place Order
      </button>
    </div>
  );
};

export default OrderSummary;