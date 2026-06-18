// src/components/home/Hero.jsx - Updated
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaWhatsapp, FaMagic, FaGift } from 'react-icons/fa';
import { generalInquiry } from '../../utils/whatsappHelper';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <img 
src="/images/hero-bg.jpg"          alt="Magic gifts background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 via-purple-800/80 to-pink-900/90"></div>
        
        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-20 z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-6 border border-white/20">
            <FaMagic className="animate-pulse" />
            <span className="text-sm font-semibold">✨ Personalized Gifts</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
            Turn Your Memories Into{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Magic ✨
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
            Personalized gifts that preserve your special moments forever. 
            Create unforgettable surprises with our unique products.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => navigate('/products')}
              className="bg-white text-purple-700 px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 justify-center shadow-lg"
            >
              <FaGift />
              Explore Products
            </button>
            <button
              onClick={generalInquiry}
              className="bg-green-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-600 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 justify-center shadow-lg"
            >
              <FaWhatsapp />
              Order on WhatsApp
            </button>
          </div>

          {/* Stats */}
          <div className="flex gap-8 mt-12">
            <div>
              <div className="text-2xl font-bold text-white">450+</div>
              <div className="text-white/70 text-sm">Happy Customers</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">25+</div>
              <div className="text-white/70 text-sm">Cities Served</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">4.4</div>
              <div className="text-white/70 text-sm">Rating ⭐</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;