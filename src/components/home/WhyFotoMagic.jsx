import React from 'react';
import { FaCheckCircle, FaCamera, FaQrcode, FaTruck, FaHeart, FaStar } from 'react-icons/fa';

const features = [
  {
    icon: <FaCamera className="text-xl md:text-3xl" />,
    title: 'Premium Print Quality',
    description: 'High-resolution prints with vibrant, long-lasting colors'
  },
  {
    icon: <FaHeart className="text-xl md:text-3xl" />,
    title: 'Personalized Designs',
    description: 'Custom designs tailored to your special moments'
  },
  {
    icon: <FaQrcode className="text-xl md:text-3xl" />,
    title: 'Video Memory Integration',
    description: 'Add QR codes to play your precious video memories'
  },
  {
    icon: <FaStar className="text-xl md:text-3xl" />,
    title: 'QR Scan Experience',
    description: 'Interactive experience with every gift'
  },
  {
    icon: <FaCheckCircle className="text-xl md:text-3xl" />,
    title: 'Perfect for Occasions',
    description: 'Birthdays, Anniversaries, Weddings & More'
  },
  {
    icon: <FaTruck className="text-xl md:text-3xl" />,
    title: 'Fast Processing',
    description: 'Quick turnaround and nationwide delivery'
  }
];

const WhyFotoMagic = () => {
  return (
    <section className="py-8 md:py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4">
            Why Choose <span className="text-primary">Foto Magic?</span>
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
            We're committed to creating magical experiences with every gift
          </p>
        </div>

        {/* Mobile: 2-column grid, Desktop: 3-column grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group text-center p-3 md:p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/50 hover:bg-white"
            >
              <div className="inline-flex p-2 md:p-4 bg-primary bg-opacity-10 rounded-full text-primary mb-1 md:mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xs sm:text-sm md:text-xl font-semibold mb-0.5 md:mb-2 leading-tight">
                {feature.title}
              </h3>
              <p className="text-[10px] sm:text-xs md:text-base text-gray-600 leading-tight">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyFotoMagic;