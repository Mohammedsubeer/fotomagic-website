// src/pages/Demo.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaQrcode, FaHeart, FaMagic, FaVideo, FaMicrophone, FaWhatsapp } from 'react-icons/fa';

// Import images directly from src/assets
import polaroidDemo from '../assets/images/demo/polaroiddemo.jpeg';
import magicFrameDemo from '../assets/images/demo/magicframedemo.jpeg';
import loveLockDemo from '../assets/images/demo/LLfdemo.jpeg';
import echoHeartDemo from '../assets/images/demo/echoheartframedemo.jpeg';

const Demo = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Demo data with imported images
  const demoProducts = [
    {
      id: 1,
      name: 'Magic Polaroids',
      icon: <FaMagic className="text-3xl" />,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-gradient-to-br from-purple-50 to-pink-50',
      borderColor: 'border-purple-300',
      image: polaroidDemo,
      description: 'Scan the QR code on the polaroid to reveal a hidden video message!',
      message: 'Every picture tells a story...',
      scanMessage: 'Scan me to reveal your hidden video!',
      romanticMessage: 'Some memories are too beautiful to forget. Each polaroid captures a moment that lives forever in your heart. ❤️'
    },
    {
      id: 2,
      name: 'Magic Frames',
      icon: <FaVideo className="text-3xl" />,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-gradient-to-br from-blue-50 to-cyan-50',
      borderColor: 'border-blue-300',
      image: magicFrameDemo,
      description: 'Scan the QR code on the frame to unlock hidden memories!',
      message: 'Hold onto the moments that matter...',
      scanMessage: 'Scan to reveal the hidden memory!',
      romanticMessage: 'I may not be beside you everyday, but I\'m always in your corner, cheering softly, believing loudly. ❤️'
    },
    {
      id: 3,
      name: 'Love Lock Frames',
      icon: <FaHeart className="text-3xl" />,
      color: 'from-pink-500 to-rose-500',
      bgColor: 'bg-gradient-to-br from-pink-50 to-rose-50',
      borderColor: 'border-pink-300',
      image: loveLockDemo,
      description: 'Scan the QR code and enter your special date passcode!',
      message: 'Love is in every detail...',
      scanMessage: 'Enter your special date to unlock!(demo lock (13/02/2022))',
      romanticMessage: 'Every love story is beautiful, but ours is my favorite. Our memories are locked in this frame, waiting to be unlocked with our special date. ❤️'
    },
    {
      id: 4,
      name: 'EchoHeart Frame',
      icon: <FaMicrophone className="text-3xl" />,
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'bg-gradient-to-br from-indigo-50 to-purple-50',
      borderColor: 'border-indigo-300',
      image: echoHeartDemo,
      description: 'Scan the QR code and speak your secret phrase to unlock!',
      message: 'Your voice is the key...',
      scanMessage: 'Your voice is the key!(forever in my heart)',
      romanticMessage: 'Words are not just words when they come from the heart. Your voice unlocks a world of memories that we created together. ❤️'
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-4">
            <FaHeart className="animate-pulse text-red-500" />
            <span className="text-sm font-semibold">Memories Made Magical</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Experience the <span className="text-primary">Magic</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover how our products transform your precious moments into unforgettable memories
          </p>
        </div>

        {/* Product Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {demoProducts.map((product) => (
            <div
              key={product.id}
              className={`bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 ${product.borderColor}`}
            >
              {/* Product Image - Full without cropping */}
              <div className={`relative ${product.bgColor} p-4`}>
                <div className="relative group overflow-hidden rounded-xl">
                  {/* Full image without cropping */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-auto rounded-xl transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      e.target.onerror = null;
                      // Fallback with gradient
                      const canvas = document.createElement('canvas');
                      canvas.width = 800;
                      canvas.height = 600;
                      const ctx = canvas.getContext('2d');
                      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
                      gradient.addColorStop(0, '#8B5CF6');
                      gradient.addColorStop(1, '#EC4899');
                      ctx.fillStyle = gradient;
                      ctx.fillRect(0, 0, canvas.width, canvas.height);
                      ctx.fillStyle = 'white';
                      ctx.font = 'bold 40px Arial';
                      ctx.textAlign = 'center';
                      ctx.textBaseline = 'middle';
                      ctx.fillText(product.name, canvas.width/2, canvas.height/2 - 20);
                      ctx.font = '20px Arial';
                      ctx.fillText('Scan to Experience', canvas.width/2, canvas.height/2 + 50);
                      e.target.src = canvas.toDataURL('image/jpeg');
                    }}
                  />

                  {/* Heartfelt Message Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl flex flex-col justify-end p-6">
                    <div className="text-white">
                      <div className="flex items-center gap-2 mb-2">
                        <FaHeart className="text-red-400 text-xl animate-pulse" />
                        <span className="text-sm font-semibold text-red-300">From the heart</span>
                      </div>
                      <p className="text-sm leading-relaxed opacity-90">
                        {product.romanticMessage}
                      </p>
                    </div>
                  </div>

                  {/* Product Name Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                    <div className="flex items-center gap-2">
                      {product.icon}
                      <span className="font-bold text-gray-800 text-sm">{product.name}</span>
                    </div>
                  </div>

                  {/* Scan Badge */}
                  <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-xs flex items-center gap-1 shadow-lg">
                    <FaQrcode size={12} />
                    <span>Scan</span>
                  </div>
                </div>

                {/* Message below image */}
                <div className="mt-4 text-center">
                  <p className="text-gray-700 font-medium italic text-sm">
                    "{product.message}"
                  </p>
                  <p className="text-xs text-gray-500 mt-1 flex items-center justify-center gap-1">
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    {product.scanMessage}
                  </p>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Link
                    to={`/product/${product.id}`}
                    className="flex-1 bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-purple-700 transition text-center"
                  >
                    View Product
                  </Link>
                  <button
                    onClick={() => {
                      const message = `Hi! I want to order ${product.name}. Can you share more details?`;
                      window.open(`https://wa.me/${process.env.REACT_APP_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
                    }}
                    className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-600 transition flex items-center gap-2"
                  >
                    <FaWhatsapp size={16} />
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Special Love Message Section */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-3xl p-8 text-white text-center shadow-2xl">
            <div className="flex justify-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <FaHeart key={i} className="text-2xl text-white/80 animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
              ))}
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              "I may not be beside you everyday, But I'm always in your corner"
            </h3>
            <p className="text-white/90 mb-6">
              Cheering softly, believing loudly ❤️
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/products"
                className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition shadow-lg"
              >
                Explore All Products
              </Link>
              <button
                onClick={() => {
                  window.open(`https://wa.me/${process.env.REACT_APP_WHATSAPP_NUMBER}`, '_blank');
                }}
                className="bg-green-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-600 transition flex items-center gap-2 justify-center shadow-lg"
              >
                <FaWhatsapp />
                Order on WhatsApp
              </button>
            </div>
            <p className="text-xs text-white/60 mt-4">
              Made with love, for the ones you love ❤️
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;