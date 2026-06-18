import React, { useState } from 'react';
import { FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import { contactFormMessage, generalInquiry } from '../utils/whatsappHelper';
import { EMAIL, INSTAGRAM_URL } from '../utils/constants';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const fullMessage = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nSubject: ${formData.subject}\n\nMessage: ${formData.message}`;
    contactFormMessage(formData.name, formData.email, fullMessage);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <FaWhatsapp className="text-green-500 text-xl mt-1" />
                  <div>
                    <p className="font-semibold">WhatsApp</p>
                    <p className="text-gray-600">+91 {process.env.REACT_APP_WHATSAPP_NUMBER?.slice(2)}</p>
                    <p className="text-sm text-gray-500">Response within 2 hours</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaEnvelope className="text-primary text-xl mt-1" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-600">{EMAIL}</p>
                    <p className="text-sm text-gray-500">We reply within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaPhone className="text-blue-500 text-xl mt-1" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-gray-600">+91 {process.env.REACT_APP_WHATSAPP_NUMBER?.slice(2)}</p>
                    <p className="text-sm text-gray-500">Mon-Sat, 10 AM - 7 PM</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-red-500 text-xl mt-1" />
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-gray-600">India (Nationwide Shipping)</p>
                    <p className="text-sm text-gray-500">We ship to all cities</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Business Hours</h2>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <FaClock className="text-primary" />
                  <div>
                    <p className="font-semibold">Monday - Saturday</p>
                    <p className="text-gray-600">10:00 AM - 7:00 PM</p>
                  </div>
                </div>
                <p className="text-gray-500 text-sm mt-2">Sunday: Closed (WhatsApp messages will be replied on Monday)</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
              <div className="flex gap-4">
                <a href={INSTAGRAM_URL} className="w-12 h-12 bg-pink-500 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                  <FaInstagram size={24} />
                </a>
                <a href="#" className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                  <FaFacebook size={24} />
                </a>
                <a href="#" className="w-12 h-12 bg-blue-400 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                  <FaTwitter size={24} />
                </a>
                <a href={`https://wa.me/${process.env.REACT_APP_WHATSAPP_NUMBER}`} className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                  <FaWhatsapp size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-1">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-1">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-1">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-1">Subject *</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary"
                      placeholder="Order Inquiry"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-1">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary resize-none"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>

                <div className="flex gap-4">
                  <button
                    type="submit"
                    className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 flex items-center gap-2"
                  >
                    <FaWhatsapp />
                    Send via WhatsApp
                  </button>
                  <button
                    type="button"
                    onClick={generalInquiry}
                    className="border-2 border-primary text-primary px-6 py-3 rounded-full font-semibold hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    Quick Chat
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12 bg-white rounded-lg shadow-md overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2799151237!2d74.30882791112191!3d18.562424398755178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2e4f8d7e0f5b9%3A0x4f8a5c9e2d6f8e7d!2sIndia!5e0!3m2!1sen!2sin!4v1644567890123!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Foto Magic Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;