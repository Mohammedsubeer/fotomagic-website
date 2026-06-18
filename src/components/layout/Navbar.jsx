import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaWhatsapp } from 'react-icons/fa';
import { generalInquiry } from '../../utils/whatsappHelper';
import logo from '../../assets/images/icons/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

 const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Products', path: '/products' },
  { name: 'Demo', path: '/demo' }, // Add this
  { name: 'Reviews', path: '/reviews' },
  { name: 'Contact', path: '/contact' },
];
  const handleWhatsAppOrder = () => {
    generalInquiry();
  };

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 bg-white ${
        scrolled ? 'shadow-lg py-1' : 'shadow-sm py-1'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo - Full Size */}
            <Link to="/" className="flex items-center">
              <img 
                src={logo}
                alt="Foto Magic Logo" 
                className="h-12 md:h-14 lg:h-16 w-auto object-contain"  // ← Full size
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`transition-colors duration-300 ${
                    location.pathname === link.path
                      ? 'text-primary font-semibold'
                      : 'text-gray-600 hover:text-primary'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <button
                onClick={handleWhatsAppOrder}
                className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-full flex items-center gap-2 transition-all duration-300 transform hover:scale-105"
              >
                <FaWhatsapp size={18} />
                <span>Order Now</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-2xl text-gray-700"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-white transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
        style={{ top: '60px' }}
      >
        <div className="flex flex-col p-6 space-y-4">
          {/* Mobile Logo - Full Size */}
          <div className="flex items-center justify-center pb-4 border-b border-gray-200">
            <img 
              src={logo}
              alt="Foto Magic Logo" 
              className="h-16 w-auto object-contain"  // ← Full size on mobile
            />
          </div>
          
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-lg py-2 border-b border-gray-100 ${
                location.pathname === link.path
                  ? 'text-primary font-semibold'
                  : 'text-gray-600'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <button
            onClick={() => {
              setIsOpen(false);
              handleWhatsAppOrder();
            }}
            className="bg-green-500 text-white py-3 rounded-full flex items-center justify-center gap-2 mt-4"
          >
            <FaWhatsapp size={20} />
            Order on WhatsApp
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;