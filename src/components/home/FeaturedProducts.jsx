import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import { orderOnWhatsApp } from '../../utils/whatsappHelper';
import { products } from '../../utils/productsData';

const FeaturedProducts = () => {
  const navigate = useNavigate();
  
  // Get only first 3 products for featured section
  const featuredProducts = products.slice(0, 3);

  // Get starting price for a product (lowest price among sizes or base price)
  const getStartingPrice = (product) => {
    if (product.sizes && product.sizes.length > 0) {
      const prices = product.sizes.map(size => size.price);
      return Math.min(...prices);
    }
    return product.price;
  };

  // Get original price for discount display
  const getOriginalPrice = (product) => {
    if (product.sizes && product.sizes.length > 0) {
      const originalPrices = product.sizes.map(size => size.originalPrice);
      return Math.max(...originalPrices);
    }
    return product.originalPrice;
  };

  // Check if product has multiple sizes
  const hasSizes = (product) => {
    return product.sizes && product.sizes.length > 0;
  };

  const handleOrder = (product) => {
    const startingPrice = getStartingPrice(product);
    orderOnWhatsApp(product.name, startingPrice);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Products
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our most loved personalized gifts that have created thousands of magical moments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => {
            const startingPrice = getStartingPrice(product);
            const originalPrice = getOriginalPrice(product);
            const hasSizeOptions = hasSizes(product);
            const discount = Math.round(((originalPrice - startingPrice) / originalPrice) * 100);

            return (
              <div 
                key={product.id} 
                className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                onClick={() => navigate(`/product/${product.id}`)}
              >
                {/* Product Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={product.images[0]} 
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {discount > 0 && (
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      {discount}% OFF
                    </div>
                  )}
                  {hasSizeOptions && (
                    <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-2">
                      {product.sizes.map((size) => (
                        <span 
                          key={size.id} 
                          className="bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-xs font-semibold"
                        >
                          {size.label}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Price Section */}
                  <div className="flex items-end gap-2 mb-4">
                    <span className="text-2xl font-bold text-primary">
                      ₹{startingPrice}
                    </span>
                    {hasSizeOptions && (
                      <span className="text-sm text-gray-500 mb-1">
                        Starting from
                      </span>
                    )}
                    {originalPrice && originalPrice > startingPrice && (
                      <span className="text-gray-400 line-through text-sm mb-1">
                        ₹{originalPrice}
                      </span>
                    )}
                  </div>

                  {/* Size Info - Show labels */}
                  {hasSizeOptions && (
                    <div className="flex gap-1 mb-4 flex-wrap">
                      {product.sizes.map((size) => (
                        <span 
                          key={size.id} 
                          className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                        >
                          {size.label}
                        </span>
                      ))}
                      <span className="text-xs text-gray-400 ml-1">
                        (4 sizes available)
                      </span>
                    </div>
                  )}

                  {/* Order Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleOrder(product);
                    }}
                    className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg"
                  >
                    <FaWhatsapp size={18} />
                    Order Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;