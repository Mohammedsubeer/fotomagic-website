import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaInstagram, FaEnvelope, FaHeart, FaFacebook, FaTwitter } from 'react-icons/fa';
import { EMAIL, INSTAGRAM_URL } from '../../utils/constants';
import { generalInquiry } from '../../utils/whatsappHelper';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Contact', path: '/contact' },
  ];

  const productLinks = [
    { name: 'Magic Polaroids', path: '/product/1' },
    { name: 'Magic Frames', path: '/product/2' },
    { name: 'Love Lock Frames', path: '/product/3' },
    { name: 'QR Video Memories', path: '/product/4' },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Foto Magic
            </h3>
            <p className="text-gray-400 mb-4">
              Personalized gifts made with memories. Turn your special moments into magical gifts.
            </p>
            <div className="flex space-x-4">
              <a href={`https://wa.me/${process.env.REACT_APP_WHATSAPP_NUMBER}`} className="text-gray-400 hover:text-green-500 transition-colors">
                <FaWhatsapp size={24} />
              </a>
              <a href={INSTAGRAM_URL} className="text-gray-400 hover:text-pink-500 transition-colors">
                <FaInstagram size={24} />
              </a>
              <a href={`mailto:${EMAIL}`} className="text-gray-400 hover:text-primary transition-colors">
                <FaEnvelope size={24} />
              </a>
              
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-gray-400 hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Products</h4>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-gray-400 hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-2 text-gray-400">
              <p>📞 WhatsApp: +91 {process.env.REACT_APP_WHATSAPP_NUMBER}</p>
              <p>✉️ Email: {EMAIL}</p>
              <p>📍 Coimbatore India (Nationwide Shipping)</p>
            </div>
            <button
              onClick={generalInquiry}
              className="mt-4 bg-primary text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors w-full"
            >
              Contact Us
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Foto Magic. All Rights Reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2 flex items-center justify-center gap-1">
            Made with <FaHeart className="text-red-500 inline" /> for creating magical memories
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;