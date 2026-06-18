import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { products } from '../utils/productsData';
import { FaSearch, FaWhatsapp } from 'react-icons/fa';
import { orderOnWhatsApp } from '../utils/whatsappHelper';

const Products = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Get unique categories
  const categories = ['all', ...new Set(products.map(p => p.category))];

  // Get starting price for a product (lowest price among sizes or base price)
  const getStartingPrice = (product) => {
    if (product.sizes && product.sizes.length > 0) {
      const prices = product.sizes.map(size => size.price);
      return Math.min(...prices);
    }
    return product.price;
  };

  // Get discount for display
  const getDiscount = (product) => {
    if (product.sizes && product.sizes.length > 0) {
      const prices = product.sizes.map(size => size.price);
      const originalPrices = product.sizes.map(size => size.originalPrice);
      const minPrice = Math.min(...prices);
      const maxOriginal = Math.max(...originalPrices);
      if (maxOriginal > minPrice) {
        return Math.round(((maxOriginal - minPrice) / maxOriginal) * 100);
      }
    }
    return product.discount || 0;
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-primary">Products</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our collection of personalized gifts that create magical moments
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:border-primary"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors text-sm ${
                    selectedCategory === cat
                      ? 'bg-primary text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {cat === 'all' ? 'All' : cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => {
              const startingPrice = getStartingPrice(product);
              const discount = getDiscount(product);
              const hasSizes = product.sizes && product.sizes.length > 0;

              return (
                <div 
                  key={product.id} 
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
                  onClick={() => navigate(`/product/${product.id}`)}
                >
                  {/* Product Image */}
                  <div className="relative overflow-hidden">
                    <img 
                      src={product.images[0]} 
                      alt={product.name}
                      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Discount Badge */}
                    {discount > 0 && (
                      <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                        {discount}% OFF
                      </div>
                    )}
                    {/* Category Badge */}
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-700">
                      {product.category}
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-1 line-clamp-1">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
                    
                    {/* Price Section */}
                    <div className="flex items-end gap-2 mb-3">
                      <span className="text-2xl font-bold text-primary">₹{startingPrice}</span>
                      {hasSizes && (
                        <span className="text-sm text-gray-500 mb-1">Starting from</span>
                      )}
                      {product.originalPrice && product.originalPrice > startingPrice && (
                        <span className="text-gray-400 line-through text-sm mb-1">₹{product.originalPrice}</span>
                      )}
                    </div>

                    {/* Size Info */}
                    {hasSizes && (
                      <div className="flex gap-1 mb-3 flex-wrap">
                        {product.sizes.map((size) => (
                          <span key={size.id} className="text-xs bg-gray-100 px-2 py-1 rounded">
                            {size.label}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Order Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        orderOnWhatsApp(product.name, startingPrice);
                      }}
                      className="w-full bg-green-500 text-white py-2 rounded-lg font-semibold hover:bg-green-600 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <FaWhatsapp size={16} />
                      Order Now
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No products found matching your criteria.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="mt-4 text-primary hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;