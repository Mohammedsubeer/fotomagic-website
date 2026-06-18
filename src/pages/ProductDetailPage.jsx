import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductById } from '../utils/productsData';
import { FaWhatsapp, FaStar, FaTruck, FaShieldAlt, FaUndo, FaHeart, FaShare, FaChevronLeft, FaChevronRight, FaCheck } from 'react-icons/fa';
import { openWhatsApp } from '../utils/whatsappHelper';
import WhatsAppButton from '../components/common/WhatsAppButton';

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = getProductById(id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(product?.price || 0);
  const [selectedOriginalPrice, setSelectedOriginalPrice] = useState(product?.originalPrice || 0);

  // Initialize selected size if product has sizes
  useEffect(() => {
    if (product && product.sizes && product.sizes.length > 0) {
      setSelectedSize(product.sizes[0]);
      setSelectedPrice(product.sizes[0].price);
      setSelectedOriginalPrice(product.sizes[0].originalPrice);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="pt-20 text-center py-12">
        <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
        <button onClick={() => navigate('/products')} className="text-primary hover:underline">
          Back to Products
        </button>
      </div>
    );
  }

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
    setSelectedPrice(size.price);
    setSelectedOriginalPrice(size.originalPrice);
  };

  // Generate detailed WhatsApp message with proper formatting
  const generateWhatsAppMessage = () => {
    const productName = product.name;
    const sizeInfo = selectedSize ? `${selectedSize.label} (${selectedSize.dimensions})` : 'Standard';
    const unitPrice = selectedPrice;
    const totalPrice = unitPrice * quantity;
    
    let message = '🛍️ *NEW ORDER - ' + productName.toUpperCase() + '*\n\n';
    message += '📋 *Order Details:*\n';
    message += '• Product: ' + productName + '\n';
    message += '• Size: ' + sizeInfo + '\n';
    message += '• Quantity: ' + quantity + '\n';
    message += '• Unit Price: ₹' + unitPrice + '\n';
    message += '• Total Price: ₹' + totalPrice + '\n\n';
    
    // Add customization details based on product type
    message += '🎨 *Customization Details:*\n';
    if (product.id === 1) {
      message += '• Upload 1 photos for the polaroid\n';
            message += '• Add a video audio also included maximum 30secs\n';
      message += '• Add a personalized message (optional)\n';

    } else if (product.id === 2) {
      message += '• Upload photo for the frame\n';
      message += '• Upload video memory\n';
      message += '• Add a personalized message (optional)\n';
    } else if (product.id === 3) {
      message += '• Upload couple photo\n';
      message += '• Upload love video\n';
      message += '• Set passcode (special date)\n';
      message += '• Provide names (e.g., Rahul & Priya)\n';
      message += '• Add love message (optional)\n';
    } else if (product.id === 4) {
      message += '• Upload photo\n';
      message += '• Upload video memory\n';
      message += '• Set secret voice phrase eg "Happy Birthday my love!"\n';
      message += '• Add personalized message (optional)\n';
    }
    
    message += '\n📞 *Contact Information:*\n';
    message += '• Name: \n';
    message += '• Phone: \n';
    message += '• Email: \n\n';
    
    message += '📍 *Delivery Address:*\n';
    message += '• Address Line 1: \n';
    message += '• Address Line 2: \n';
    message += '• City: \n';
    message += '• State: \n';
    message += '• Pincode: \n\n';
    
    message += '📝 *Additional Notes:*\n';
    message += '• \n\n';
    
    message += '🙏 *Thank you for choosing Foto Magic!*';

    return message;
  };

  const handleOrder = () => {
    const message = generateWhatsAppMessage();
    openWhatsApp(message);
  };

  // Check if product has sizes
  const hasSizes = product.sizes && product.sizes.length > 0;

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-6">
          <button onClick={() => navigate('/')} className="hover:text-primary">Home</button>
          <span className="mx-2">/</span>
          <button onClick={() => navigate('/products')} className="hover:text-primary">Products</button>
          <span className="mx-2">/</span>
          <span className="text-gray-700">{product.name}</span>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name}
                className="w-full h-96 object-cover"
              />
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
                  >
                    <FaChevronLeft />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
                  >
                    <FaChevronRight />
                  </button>
                </>
              )}
            </div>
            <div className="flex gap-2 overflow-x-auto">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                    selectedImage === idx ? 'border-primary' : 'border-transparent'
                  }`}
                >
                  <img src={img} alt={`${product.name} ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{product.name}</h1>
              {product.tagline && (
                <p className="text-primary font-semibold text-sm mb-2">{product.tagline}</p>
              )}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => <FaStar key={i} />)}
                </div>
                <span className="text-gray-600">(128 reviews)</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-3xl font-bold text-primary">₹{selectedPrice}</span>
                {selectedOriginalPrice && selectedOriginalPrice > selectedPrice && (
                  <span className="text-gray-400 line-through text-xl">₹{selectedOriginalPrice}</span>
                )}
                {product.discount && (
                  <span className="bg-red-500 text-white px-2 py-1 rounded-full text-sm">
                    Save {product.discount}%
                  </span>
                )}
              </div>
              {hasSizes && selectedSize && (
                <p className="text-sm text-gray-500 mt-1">
                  Size: {selectedSize.label} ({selectedSize.dimensions})
                </p>
              )}
            </div>

            <p className="text-gray-600 leading-relaxed">{product.longDescription}</p>

            {/* Size Selector */}
            {hasSizes && (
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <h3 className="font-semibold mb-3">Select Size:</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size.id}
                      onClick={() => handleSizeSelect(size)}
                      className={`p-3 border-2 rounded-lg text-center transition-all ${
                        selectedSize?.id === size.id
                          ? 'border-primary bg-primary bg-opacity-10 shadow-md'
                          : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      <div className="font-bold text-lg">{size.label}</div>
                      <div className="text-xs text-gray-500">{size.dimensions}</div>
                      <div className="text-primary font-semibold mt-1">₹{size.price}</div>
                      {size.originalPrice && size.originalPrice > size.price && (
                        <div className="text-xs text-gray-400 line-through">
                          ₹{size.originalPrice}
                        </div>
                      )}
                      {selectedSize?.id === size.id && (
                        <div className="mt-1 text-primary">
                          <FaCheck className="inline" size={12} />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Features */}
            <div className="bg-gray-100 rounded-lg p-4">
              <h3 className="font-semibold mb-2">Key Features:</h3>
              <ul className="space-y-1">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm">
                    <span className="text-primary">✓</span> {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Workflow */}
            {product.workflow && (
              <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                <h3 className="font-semibold text-purple-700 mb-1">✨ How It Works:</h3>
                <p className="text-purple-700 text-sm">{product.workflow}</p>
              </div>
            )}

            {/* Step by Step Guide */}
            {product.howItWorks && (
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <h3 className="font-semibold text-blue-700 mb-3">📋 Steps to Use:</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {product.howItWorks.map((step) => (
                    <div key={step.step} className="text-center">
                      <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-1 text-sm font-bold">
                        {step.step}
                      </div>
                      <h4 className="font-bold text-sm text-blue-700">{step.title}</h4>
                      <p className="text-xs text-gray-600">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="flex items-center gap-4">
              <span className="font-semibold">Quantity:</span>
              <div className="flex items-center gap-2 border rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-1 hover:bg-gray-100"
                >
                  -
                </button>
                <span className="w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-1 hover:bg-gray-100"
                >
                  +
                </button>
              </div>
            </div>

            {/* Total Price */}
            <div className="bg-gray-50 rounded-lg p-3">
              <div className="flex justify-between items-center">
                <span className="font-semibold">Total:</span>
                <span className="text-2xl font-bold text-primary">₹{selectedPrice * quantity}</span>
              </div>
            </div>

            {/* Order Summary Preview */}
            <div className="bg-green-50 rounded-lg p-3 border border-green-200">
              <h4 className="font-semibold text-green-700 mb-1">📝 Order Summary:</h4>
              <p className="text-sm text-green-700">
                {product.name} × {quantity} = ₹{selectedPrice * quantity}
                {selectedSize && ` (${selectedSize.label})`}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button
                onClick={handleOrder}
                className="flex-1 bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <FaWhatsapp size={20} />
                Order Now
              </button>
              <button className="px-6 py-3 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary hover:text-white transition-all duration-300 flex items-center gap-2">
                <FaHeart />
                Wishlist
              </button>
              <button className="px-4 py-3 border rounded-full hover:bg-gray-100 transition-colors">
                <FaShare />
              </button>
            </div>

            {/* Shipping Info */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t">
              <div className="flex items-center gap-2 text-sm">
                <FaTruck className="text-primary" />
                <span>Free Shipping*</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <FaShieldAlt className="text-primary" />
                <span>Secure Payment</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <FaUndo className="text-primary" />
                <span>Easy Returns</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <FaWhatsapp className="text-primary" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <WhatsAppButton />
    </div>
  );
};

export default ProductDetailPage;