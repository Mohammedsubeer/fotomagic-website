// src/components/common/SizeSelector.jsx
import React, { useState } from 'react';

const SizeSelector = ({ sizes, onSizeChange }) => {
  const [selectedSize, setSelectedSize] = useState(sizes[0]?.id);

  const handleSizeSelect = (size) => {
    setSelectedSize(size.id);
    onSizeChange(size);
  };

  return (
    <div className="mt-4">
      <h4 className="font-semibold mb-2">Select Size:</h4>
      <div className="grid grid-cols-4 gap-2">
        {sizes.map((size) => (
          <button
            key={size.id}
            onClick={() => handleSizeSelect(size)}
            className={`p-3 border-2 rounded-lg text-center transition-all ${
              selectedSize === size.id
                ? 'border-primary bg-primary bg-opacity-10'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <div className="font-bold text-sm">{size.label}</div>
            <div className="text-xs text-gray-500">{size.dimensions}</div>
            <div className="text-primary font-semibold mt-1">₹{size.price}</div>
            {size.originalPrice && (
              <div className="text-xs text-gray-400 line-through">
                ₹{size.originalPrice}
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SizeSelector;
