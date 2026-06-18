import React from 'react';
import { FaWhatsapp, FaGift, FaRocket } from 'react-icons/fa';
import { generalInquiry } from '../../utils/whatsappHelper';

const FinalCTA = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-90"></div>
      
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white rounded-full opacity-10 animate-pulse"></div>
      </div>

      <div className="relative container mx-auto px-4 text-center text-white">
        <div className="inline-flex items-center gap-2 bg-white bg-opacity-20 rounded-full px-4 py-2 mb-6">
          <FaGift />
          <span className="text-sm font-semibold">Limited Time Offer</span>
        </div>

        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Ready to Create Your Magic?
        </h2>
        
        <p className="text-xl md:text-2xl mb-6 max-w-2xl mx-auto">
          Make your moments unforgettable with personalized gifts from Foto Magic
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <button
            onClick={generalInquiry}
            className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
          >
            <FaWhatsapp size={20} />
            Order via WhatsApp
          </button>
        </div>

        <div className="flex justify-center gap-8 text-sm">
          <div className="flex items-center gap-2">
            <FaRocket />
            <span>Free Shipping*</span>
          </div>
          <div className="flex items-center gap-2">
            <FaGift />
            <span>Gift Packaging</span>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <FaWhatsapp />
            <span>24/7 Support</span>
          </div>
        </div>

        <p className="text-xs mt-6 text-white text-opacity-80">
          *Free shipping on orders above ₹999
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;