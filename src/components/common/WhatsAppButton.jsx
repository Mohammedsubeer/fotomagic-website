import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { openWhatsApp } from '../../utils/whatsappHelper';

const WhatsAppButton = ({ message, productName, price, className = '', position = 'fixed' }) => {
  const handleClick = () => {
    if (productName && price) {
      openWhatsApp(`Hi! I want to order ${productName} (${price}). Please share details.`);
    } else if (message) {
      openWhatsApp(message);
    } else {
      openWhatsApp('Hi! I want to know more about your products.');
    }
  };

  if (position === 'fixed') {
    return (
      <button
        onClick={handleClick}
        className={`fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-110 z-50 group ${className}`}
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={28} />
        <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Order on WhatsApp
        </span>
      </button>
    );
  }

  return (
    <button
      onClick={handleClick}
      className={`bg-green-500 text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-green-600 transition-all duration-300 transform hover:scale-105 ${className}`}
    >
      <FaWhatsapp size={20} />
      Order on WhatsApp
    </button>
  );
};

export default WhatsAppButton;