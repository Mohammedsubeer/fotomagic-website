import React from 'react';
import { FaWhatsapp, FaImage, FaPaintBrush, FaCreditCard, FaBox, FaArrowRight } from 'react-icons/fa';

const steps = [
  {
    icon: <FaWhatsapp className="text-xl md:text-3xl" />,
    title: 'Choose Product',
    description: 'Select your favorite personalized gift'
  },
  {
    icon: <FaImage className="text-xl md:text-3xl" />,
    title: 'Send Photos',
    description: 'Share photos via WhatsApp for customization'
  },
  {
    icon: <FaPaintBrush className="text-xl md:text-3xl" />,
    title: 'Confirm Design',
    description: 'Review and approve the design preview'
  },
  {
    icon: <FaCreditCard className="text-xl md:text-3xl" />,
    title: 'Complete Payment',
    description: 'Secure payment via UPI, Card or NetBanking'
  },
  {
    icon: <FaBox className="text-xl md:text-3xl" />,
    title: 'Receive Gift',
    description: 'Get your magical gift delivered to your doorstep'
  }
];

const HowToOrder = () => {
  return (
    <section className="py-8 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4">
            How to <span className="text-primary">Order</span>
          </h2>
          <p className="text-sm md:text-base text-gray-600">
            Simple 5-step process to create your magical gift
          </p>
        </div>

        {/* Desktop: Connected Boxes */}
        <div className="hidden md:block">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <React.Fragment key={index}>
                {/* Step Box */}
                <div className="flex-1 text-center relative group">
                  <div className="bg-white rounded-xl shadow-lg p-4 border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 mx-2">
                    <div className="relative inline-block">
                      <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center text-primary mx-auto mb-2 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        {step.icon}
                      </div>
                      <div className="absolute -top-2 -right-2 w-7 h-7 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xs shadow-lg">
                        {index + 1}
                      </div>
                    </div>
                    <h3 className="font-semibold text-sm mb-1">{step.title}</h3>
                    <p className="text-gray-600 text-xs">{step.description}</p>
                  </div>
                </div>
                
                {/* Arrow between boxes */}
                {index < steps.length - 1 && (
                  <div className="flex-shrink-0 px-1">
                    <div className="w-8 h-0.5 bg-gradient-to-r from-primary/40 to-primary/20 relative">
                      <FaArrowRight className="absolute -right-2 -top-2 text-primary/40 text-sm" />
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Mobile: Connected Cards */}
        <div className="md:hidden space-y-0">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step Card */}
              <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="relative flex-shrink-0">
                  <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center text-primary">
                    {step.icon}
                  </div>
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-white rounded-full flex items-center justify-center font-bold text-[10px] shadow-md">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-sm">{step.title}</h3>
                  <p className="text-gray-600 text-xs">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="text-primary/30 flex-shrink-0">
                    <FaArrowRight className="text-sm" />
                  </div>
                )}
              </div>
              
              {/* Vertical Connector */}
              {index < steps.length - 1 && (
                <div className="flex justify-center py-0.5">
                  <div className="w-0.5 h-4 bg-gradient-to-b from-primary/40 to-primary/20"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToOrder;