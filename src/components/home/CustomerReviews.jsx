// src/components/home/CustomerReviews.jsx
import React, { useState, useEffect } from 'react';
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const reviews = [
  {
    id: 1,
    name: 'Priya Sharma',
    location: 'Mumbai',
    rating: 5,
    text: 'Absolutely loved the surprise reveal! The Magic Frame I ordered for my parents\' anniversary brought tears to their eyes. The quality is exceptional.',
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
    product: 'Magic Frames'
  },
  {
    id: 2,
    name: 'Rahul Mehta',
    location: 'Delhi',
    rating: 5,
    text: 'The QR video memory idea was amazing. I added our wedding video to the frame, and my wife was speechless. Best gift ever! Highly recommended.',
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
    product: 'QR Video Memories'
  },
  {
    id: 3,
    name: 'Neha Gupta',
    location: 'Bangalore',
    rating: 5,
    text: 'Best personalized gift I have purchased. The Love Lock Frame with our names and photo is stunning. Customer service was very helpful too.',
    image: 'https://randomuser.me/api/portraits/women/3.jpg',
    product: 'Love Lock Frames'
  },
  {
    id: 4,
    name: 'Amit Kumar',
    location: 'Pune',
    rating: 5,
    text: 'The Magic Polaroids are beautiful! I ordered 10 for my friends, and everyone loved them. Fast delivery and great packaging.',
    image: 'https://randomuser.me/api/portraits/men/4.jpg',
    product: 'Magic Polaroids'
  },
  {
    id: 5,
    name: 'Sneha Reddy',
    location: 'Hyderabad',
    rating: 5,
    text: 'The EchoHeart Frame is a game-changer! My husband was so surprised when his voice unlocked our wedding video. Truly magical experience!',
    image: 'https://randomuser.me/api/portraits/women/5.jpg',
    product: 'EchoHeart Frame'
  }
];

const CustomerReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-slide every 5 seconds
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    setIsAutoPlaying(false);
    // Resume autoplay after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  // Get visible reviews (3 for desktop, 2 for tablet, 1 for mobile)
  const getVisibleReviews = () => {
    const visible = [];
    const total = reviews.length;
    const count = window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;
    
    for (let i = 0; i < count; i++) {
      const index = (currentIndex + i) % total;
      visible.push({ ...reviews[index], index });
    }
    return visible;
  };

  const [visibleReviews, setVisibleReviews] = useState(getVisibleReviews());

  useEffect(() => {
    const handleResize = () => {
      setVisibleReviews(getVisibleReviews());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setVisibleReviews(getVisibleReviews());
  }, [currentIndex]);

  return (
    <section className="py-16 bg-gradient-to-r from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="text-primary">Customers Say</span>
          </h2>
          <p className="text-gray-600">
            Join thousands of happy customers who've created magical memories
          </p>
        </div>

        {/* Reviews Carousel */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-4 md:-ml-6 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
            aria-label="Previous review"
          >
            <FaChevronLeft className="text-primary" size={20} />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 -mr-4 md:-mr-6 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
            aria-label="Next review"
          >
            <FaChevronRight className="text-primary" size={20} />
          </button>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
            {visibleReviews.map((review) => (
              <div
                key={review.id}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 animate-fade-in"
              >
                <FaQuoteLeft className="text-primary text-opacity-30 text-3xl mb-4" />
                
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-4 italic line-clamp-4">{review.text}</p>
                
                <div className="flex items-center gap-3 mt-4">
                  <img 
                    src={review.image} 
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover"
                    onError={(e) => {
                      e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(review.name)}&background=8B5CF6&color=fff&size=48`;
                    }}
                  />
                  <div>
                    <h4 className="font-semibold">{review.name}</h4>
                    <p className="text-sm text-gray-500">{review.location}</p>
                    <p className="text-xs text-primary mt-1">Purchased: {review.product}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>

          {/* Review Counter */}
          <div className="text-center mt-4">
            <p className="text-sm text-gray-500">
              {currentIndex + 1} - {Math.min(currentIndex + 3, reviews.length)} of {reviews.length} reviews
            </p>
          </div>
        </div>

        {/* Overall Rating */}
        <div className="text-center mt-8">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 shadow-md">
            <span className="text-yellow-400 text-xl">★★★★★</span>
            <span className="font-semibold">4.9</span>
            <span className="text-gray-600">based on 1,234 reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;