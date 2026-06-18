import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaWhatsapp, FaEye } from 'react-icons/fa';
import { orderOnWhatsApp } from '../../utils/whatsappHelper';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  const handleOrder = (e) => {
    e.stopPropagation();
    orderOnWhatsApp(product.name, product.price);
  };

  const handleViewDetails = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="card group cursor-pointer animate-fade-in" onClick={handleViewDetails}>
      <div className="relative overflow-hidden">
        <img 
          src={product.images[0]} 
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {discount > 0 && (
          <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-semibold">
            {discount}% OFF
          </div>
        )}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100">
          <button 
            onClick={handleViewDetails}
            className="bg-white text-gray-800 p-3 rounded-full hover:bg-primary hover:text-white transition-colors"
          >
            <FaEye size={20} />
          </button>
          <button 
            onClick={handleOrder}
            className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transition-colors"
          >
            <FaWhatsapp size={20} />
          </button>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-primary">₹{product.price}</span>
            {product.originalPrice && (
              <span className="text-gray-400 line-through text-sm ml-2">₹{product.originalPrice}</span>
            )}
          </div>
          <button
            onClick={handleOrder}
            className="bg-green-500 text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-green-600 transition-colors text-sm"
          >
            <FaWhatsapp size={16} />
            Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;