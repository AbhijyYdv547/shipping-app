
import logo from "../assets/logo.jpg"
import { useNavigate } from 'react-router-dom';

const Header = () => (
  const navigate = useNavigate();
  <header className="w-full fixed top-0 z-50 bg-black/30 backdrop-blur-md border-b border-white/10">
    <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img
          src={logo} 
          alt="Eclipse Logo"
          className="w-8 h-8 object-cover rounded-full"
        />
      </div>

      {/* Nav Items */}
      <nav className="flex items-center space-x-6 text-white text-sm font-medium">
        <a href="#" className="hover:text-gray-300 transition">About Us</a>
        <a href="#" className="hover:text-gray-300 transition">Waitlist</a>
        <a href="#" className="hover:text-gray-300 transition">Cart</a>
        <button
      className="bg-white text-black px-4 py-1.5 rounded-full font-semibold hover:opacity-90 transition"
      onClick={() => navigate('/checkout')}
      >
      Buy
    </button>
      </nav>
    </div>
  </header>
);

export default Header;
