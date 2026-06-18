// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/home/Hero';
import FeaturedProducts from '../components/home/FeaturedProducts';
import WhyFotoMagic from '../components/home/WhyFotoMagic';
import HowToOrder from '../components/home/HowToOrder';
import CustomerReviews from '../components/home/CustomerReviews';
import Gallery from '../components/home/Gallery';
import FAQ from '../components/home/FAQ';
import FinalCTA from '../components/home/FinalCTA';
import WhatsAppButton from '../components/common/WhatsAppButton';
import { FaQrcode, FaArrowRight, FaHeart, FaMagic, FaVideo, FaMicrophone } from 'react-icons/fa';

const Home = () => {
  // Demo preview data
  const demoPreview = [
    { id: 1, name: 'Magic Polaroids', icon: <FaMagic />, color: 'from-purple-500 to-pink-500' },
    { id: 2, name: 'Magic Frames', icon: <FaVideo />, color: 'from-blue-500 to-cyan-500' },
    { id: 3, name: 'Love Lock Frames', icon: <FaHeart />, color: 'from-pink-500 to-rose-500' },
    { id: 4, name: 'EchoHeart Frame', icon: <FaMicrophone />, color: 'from-indigo-500 to-purple-500' },
  ];

  return (
    <>
      <Hero />
      <FeaturedProducts />
      <WhyFotoMagic />
      <HowToOrder />

      {/* Demo Experience Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 via-pink-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-4">
              <FaQrcode className="animate-pulse" />
              <span className="text-sm font-semibold">AR Experience</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Experience the <span className="text-primary">Magic</span> Before You Buy
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Scan QR codes on our demo products with your phone to experience the magic in AR
            </p>
          </div>

          {/* Product Icons Preview */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {demoPreview.map((product) => (
              <div
                key={product.id}
                className={`bg-gradient-to-r ${product.color} text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2`}
              >
                {product.icon}
                <span className="text-sm font-semibold">{product.name}</span>
              </div>
            ))}
          </div>

          {/* Demo Card */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Left side - Image/Visual */}
                <div className="relative bg-gradient-to-br from-purple-600 to-indigo-600 p-8 flex items-center justify-center min-h-[300px]">
                  <div className="text-center text-white">
                    <div className="relative inline-block">
                      <div className="w-32 h-32 bg-white/20 rounded-2xl p-4 mx-auto backdrop-blur-sm">
                        <div className="w-full h-full bg-white/10 rounded-lg flex items-center justify-center">
                          <FaQrcode className="text-6xl text-white/80" />
                        </div>
                      </div>
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full text-xs whitespace-nowrap">
                        Scan with phone
                      </div>
                    </div>
                    <p className="mt-6 text-sm text-white/80 max-w-xs mx-auto">
                      Scan QR codes on our products to unlock hidden videos and memories
                    </p>
                  </div>
                </div>

                {/* Right side - Content */}
                <div className="p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    See It in Action
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Visit our Demo page to experience how each product works with QR codes.
                    Just scan with your phone and watch the magic happen!
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      to="/demo"
                      className="bg-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-purple-700 transition flex items-center gap-2 justify-center"
                    >
                      Explore Demo
                      <FaArrowRight />
                    </Link>
                    <Link
                      to="/products"
                      className="border-2 border-purple-600 text-purple-600 px-6 py-2 rounded-full font-semibold hover:bg-purple-50 transition text-center"
                    >
                      View Products
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Demo Preview Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-8">
            {demoPreview.map((product) => (
              <Link
                key={product.id}
                to="/demo"
                className={`bg-gradient-to-r ${product.color} text-white p-4 rounded-xl text-center hover:shadow-lg transition transform hover:-translate-y-1`}
              >
                <div className="text-2xl flex justify-center mb-1">{product.icon}</div>
                <span className="text-xs font-semibold">{product.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CustomerReviews />
      <Gallery />
      <FAQ />
      <FinalCTA />
      <WhatsAppButton />
    </>
  );
};

export default Home;