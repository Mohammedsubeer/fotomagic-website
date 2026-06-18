import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { generalInquiry } from '../../utils/whatsappHelper';

const faqs = [
  {
    q: 'How do I place an order?',
    a: 'You can place an order by clicking the "Order on WhatsApp" button anywhere on our website. Simply select your product, send your photos via WhatsApp, confirm the design preview, complete payment, and receive your personalized gift at your doorstep.'
  },
  {
    q: 'Can I customize the photos?',
    a: 'Absolutely! All our products are fully customizable. You can send your preferred photos via WhatsApp, and our design team will create a personalized preview for your approval before printing.'
  },
  {
    q: 'How many photos can I upload?',
    a: 'For Magic Polaroids: Up to 5 photos per order. For Magic Frames and Love Lock Frames: 1-2 photos depending on the design. For QR Video Memories: You can upload videos up to 30 seconds long.'
  },
  {
    q: 'How long does delivery take?',
    a: 'Delivery typically takes 5-7 business days after order confirmation. We ship across India with tracking provided. Express delivery options are available on request.'
  },
  {
    q: 'Can I order from anywhere in India?',
    a: 'Yes! We ship to all cities and towns across India. Shipping is free on orders above ₹999, otherwise applies based on your location.'
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept all major payment methods including UPI (Google Pay, PhonePe, Paytm), Credit/Debit Cards, NetBanking, and Bank Transfers. Payment is collected after design confirmation.'
  },
  {
    q: 'What if I don\'t like the design?',
    a: 'We provide unlimited design revisions until you\'re 100% satisfied. Your approval is taken before we proceed to printing, ensuring you love the final product.'
  },
  {
    q: 'Do you offer bulk orders for events?',
    a: 'Yes! We specialize in bulk orders for weddings, corporate events, and parties. Contact us via WhatsApp for special pricing and customization options.'
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-gray-600">
            Everything you need to know about ordering from Foto Magic
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full text-left bg-white rounded-lg shadow-md p-4 flex justify-between items-center hover:shadow-lg transition-shadow"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-lg">{faq.q}</span>
                {openIndex === index ? 
                  <FaChevronUp className="text-primary" /> : 
                  <FaChevronDown className="text-gray-400" />
                }
              </button>
              {openIndex === index && (
                <div className="bg-white rounded-b-lg p-4 mt-1 text-gray-600 animate-fade-in">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <button
            onClick={generalInquiry}
            className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 inline-flex items-center gap-2"
          >
            Ask on WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;