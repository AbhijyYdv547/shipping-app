import logo from "../assets/logo.jpg"

const CheckoutHeader = () => {
  return (
    <header className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-300">
      {/* Logo */}
      <div className="flex items-center">
        <img
                  src={logo} 
                  alt="Eclipse Logo"
                  className="w-8 h-8 object-cover rounded-full"
                />

      </div>

      {/* Navigation Links */}
      <nav className="flex space-x-6 text-gray-600 text-sm sm:text-base">
        <a href="#" className="hover:text-black transition-colors duration-200">About Us</a>
        <a href="#" className="hover:text-black transition-colors duration-200">Waitlist</a>
        <a href="#" className="hover:text-black transition-colors duration-200">Cart</a>
      </nav>
    </header>
  );
};

export default CheckoutHeader;