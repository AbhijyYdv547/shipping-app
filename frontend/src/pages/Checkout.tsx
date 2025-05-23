import React from 'react';
import CheckoutHeader from '../components/CheckoutHeader';
import ShippingAddressForm from '../components/ShippingAddressForm';
import OrderSummary from '../components/OrderSummary';

const CheckoutPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <CheckoutHeader />

      <main className="container mx-auto p-4 sm:p-6 lg:p-8 flex flex-col lg:flex-row lg:space-x-8 mt-4">
        {/* Left Section: Shipping Address Form */}
        <div className="lg:w-3/5 mb-8 lg:mb-0">
          <ShippingAddressForm />
        </div>

        {/* Right Section: Order Summary */}
        <div className="lg:w-2/5">
          <OrderSummary />
        </div>
      </main>
    </div>
  );
};

export default CheckoutPage;