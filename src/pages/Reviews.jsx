import React, { useState } from 'react';
import { FaStar, FaUser, FaCalendar, FaThumbsUp, FaWhatsapp } from 'react-icons/fa';
import { generalInquiry } from '../utils/whatsappHelper';

const allReviews = [
  {
    id: 1,
    name: 'Priya Sharma',
    location: 'Mumbai',
    rating: 5,
    title: 'Absolutely magical!',
    text: 'The Magic Frame I ordered for my parents\' anniversary was a huge hit. The quality is exceptional and the surprise reveal brought tears to their eyes.',
    date: '2025-12-15',
    helpful: 45,
    product: 'Magic Frames'
  },
  {
    id: 2,
    name: 'Rahul ',
    location: 'Tamilnadu',
    rating: 5,
    title: 'Best gift ever!',
    text: 'The QR video memory feature is genius. I added our wedding video to the frame, and my wife was speechless. Highly recommended!',
    date: '2026-01-10',
    helpful: 38,
    product: 'QR Video Memories'
  },
  // Add more reviews as needed
];

const Reviews = () => {
  const [filter, setFilter] = useState('all');
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredReviews = filter === 'all' 
    ? allReviews 
    : allReviews.filter(r => r.rating === parseInt(filter));

  const loadMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Customer <span className="text-primary">Reviews</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See what our customers are saying about their magical experiences
          </p>
        </div>

        {/* Rating Summary */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8 text-center">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="text-5xl font-bold">4.4</span>
            <div className="text-yellow-400 text-xl">★★★★★</div>
          </div>
          <p className="text-gray-600">Based on 360 reviews</p>
          <div className="flex justify-center gap-2 mt-4">
            {[5,4,3,2,1].map(star => (
              <button
                key={star}
                onClick={() => setFilter(star.toString())}
                className={`px-3 py-1 rounded-full text-sm ${
                  filter === star.toString() 
                    ? 'bg-primary text-white' 
                    : 'bg-gray-200 text-gray-700'
                }`}
              >
                {star} ★
              </button>
            ))}
            {filter !== 'all' && (
              <button
                onClick={() => setFilter('all')}
                className="px-3 py-1 rounded-full text-sm bg-gray-200 text-gray-700"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Reviews List */}
        <div className="space-y-6">
          {filteredReviews.slice(0, visibleCount).map((review) => (
            <div key={review.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center">
                    <FaUser className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{review.name}</h3>
                    <p className="text-sm text-gray-500">{review.location}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-yellow-400">{'★'.repeat(review.rating)}</div>
                  <div className="text-xs text-gray-400 flex items-center gap-1 mt-1">
                    <FaCalendar size={12} />
                    {review.date}
                  </div>
                </div>
              </div>
              <h4 className="font-semibold mb-2">{review.title}</h4>
              <p className="text-gray-600 mb-3">{review.text}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-primary">Product: {review.product}</span>
                <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-primary transition-colors">
                  <FaThumbsUp /> Helpful ({review.helpful})
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        {visibleCount < filteredReviews.length && (
          <div className="text-center mt-8">
            <button
              onClick={loadMore}
              className="bg-primary text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-colors"
            >
              Load More Reviews
            </button>
          </div>
        )}

        {/* Write Review CTA */}
        <div className="mt-12 bg-gradient-to-r from-primary to-secondary rounded-lg p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-2">Share Your Experience</h3>
          <p className="mb-4">Have you received a gift from Foto Magic? We'd love to hear your story!</p>
          <button
            onClick={generalInquiry}
            className="bg-white text-primary px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
          >
            <FaWhatsapp />
            Share Your Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;