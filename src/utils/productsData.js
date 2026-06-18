// src/utils/productsData.js

// Import local images from src/assets
import polaroid1 from '../assets/images/products/polaroid-1.PNG';
import polaroid2 from '../assets/images/products/polaroid-2.PNG';
import frame1 from '../assets/images/products/frame-1.PNG';
import frame2 from '../assets/images/products/frame-2.PNG';
import loveLock1 from '../assets/images/products/love-lock-1.PNG';
import loveLock2 from '../assets/images/products/love-lock-2.PNG';
import echoHeart1 from '../assets/images/products/echoheart-1.PNG';
import echoHeart2 from '../assets/images/products/echoheart-2.PNG';

// Size configuration for products
export const SIZES = {
  A6: { id: 'A6', label: 'A6', dimensions: '105 x 148 mm', multiplier: 1 },
  A5: { id: 'A5', label: 'A5', dimensions: '148 x 210 mm', multiplier: 1.5 },
  A4: { id: 'A4', label: 'A4', dimensions: '210 x 297 mm', multiplier: 2 },
  A3: { id: 'A3', label: 'A3', dimensions: '297 x 420 mm', multiplier: 3 }
};

// Base prices for each product (A6 size)
const BASE_PRICES = {
  magicFrames: 399,
  loveLockFrames: 499,
  echoHeartFrames: 499
};

// Price calculator based on size
const getPriceForSize = (basePrice, sizeId) => {
  const size = SIZES[sizeId];
  if (!size) return basePrice;
  return Math.round(basePrice * size.multiplier);
};

export const products = [
  {
    id: 1,
    name: 'Magic Polaroids',
    category: 'Polaroids',
    description: 'Large 6 x 4 inch size personalized with your special moments. Perfect for gifting and preserving memories.',
    longDescription: 'Our Magic Polaroids are high-quality prints that capture your precious moments. Each polaroid is 6x4 inches, printed on premium photo paper with vibrant colors that last a lifetime. When you scan the QR code on the back, a hidden video message plays, making it a truly magical gift.',
    price: 199,
    originalPrice: 249,
    discount: 20,
    images: [polaroid1, polaroid2],
    features: [
      
      'High-quality photo paper',
      'Personalized with your photos',
      'Perfect for gifting',
      'Vibrant, long-lasting colors',
      'QR code reveals hidden video'
    ],
    workflow: 'Scan the QR code on your polaroid to reveal a hidden video message!',
    whatsappMsg: 'Hi! I want to order Magic Polaroids (₹199). Please share details.'
  },
  {
    id: 2,
    name: 'Magic Frames',
    category: 'Frames',
    description: 'Reveal hidden memories with our premium magic frames. Unique gift experience that surprises every time.',
    longDescription: 'Magic Frames create an unforgettable unboxing experience. The hidden photo reveals itself when you open the frame, and a video plays when you scan the QR code. It\'s the perfect surprise gift that keeps on giving.',
    basePrice: BASE_PRICES.magicFrames,
    images: [frame1, frame2],
    features: [
      'Hidden photo reveal technology',
      'Premium wooden finish',
      'Unique gift experience',
      'Customizable message',
      'Ready to hang',
      'QR code unlocks video memory'
    ],
    workflow: 'Scan the QR code on the frame to reveal the hidden photo and play your video memory!',
    whatsappMsg: 'Hi! I want to order Magic Frames. Please share details.',
    // Size options with REVISED prices
    sizes: [
      { 
        id: 'A6', 
        label: 'A6', 
        dimensions: '105 x 148 mm',
        price: 399,
        originalPrice: 499
      },
      { 
        id: 'A5', 
        label: 'A5', 
        dimensions: '148 x 210 mm',
        price: 499,
        originalPrice: 699
      },
      { 
        id: 'A4', 
        label: 'A4', 
        dimensions: '210 x 297 mm',
        price: 699,
        originalPrice: 999
      },
      { 
        id: 'A3', 
        label: 'A3', 
        dimensions: '297 x 420 mm',
        price: 999,
        originalPrice: 1299
      }
    ]
  },
  {
    id: 3,
    name: 'Love Lock Frames',
    category: 'Couple Gifts',
    description: 'Personalized couple gift with custom names and photos. Perfect for anniversaries and special occasions.',
    longDescription: 'Love Lock Frames symbolize eternal love. Personalize with your names, special date, and favorite photo. A perfect gift for weddings, anniversaries, or just because. Enter your special date passcode to unlock a beautiful video memory.',
    basePrice: BASE_PRICES.loveLockFrames,
    images: [loveLock1, loveLock2],
    features: [
      'Custom names and photos',
      'Personalized love message',
      'High-quality materials',
      'Beautiful gift packaging',
      'Perfect for couples',
      'Date passcode unlocks video'
    ],
    workflow: 'Enter your special date passcode (anniversary, first meeting, etc.) to unlock the love video hidden inside the frame!',
    whatsappMsg: 'Hi! I want to order Love Lock Frames. Please share details.',
    // Size options with REVISED prices
    sizes: [
      { 
        id: 'A6', 
        label: 'A6', 
        dimensions: '105 x 148 mm',
        price: 499,
        originalPrice: 699
      },
      { 
        id: 'A5', 
        label: 'A5', 
        dimensions: '148 x 210 mm',
        price: 699,
        originalPrice: 999
      },
      { 
        id: 'A4', 
        label: 'A4', 
        dimensions: '210 x 297 mm',
        price: 899,
        originalPrice: 1299
      },
      { 
        id: 'A3', 
        label: 'A3', 
        dimensions: '297 x 420 mm',
        price: 1299,
        originalPrice: 1699
      }
    ]
  },
  {
    id: 4,
    name: 'EchoHeart Frame',
    category: 'Smart Frames',
    tagline: "YOUR VOICE. YOUR KEY. YOUR MEMORY.",
    description: "The world's first voice unlock memory frame. Freeze moments, live memories.",
    longDescription: 'The EchoHeart Frame is a revolutionary voice-activated memory frame that unlocks your precious memories with your unique voice. Record a secret phrase, and only the right voice can reveal the hidden memory inside. Perfect for proposals, anniversaries, and creating unforgettable moments with your special someone.',
    basePrice: BASE_PRICES.echoHeartFrames,
    images: [echoHeart1, echoHeart2],
    features: [
      'Voice Unlock Technology - Your voice is the only key',
      'HD Video Memory - Crystal clear videos that touch hearts',
      'Private & Secure - Only the right voice can unlock it',
      'Made with Love - Perfect for your special one',
      'QR Code Integration - Scan to set up your voice key',
      'Freeze Moments, Live Memories - Capture your precious moments forever'
    ],
    workflow: 'Scan the QR code, speak your secret phrase, and unlock your video memory with your voice!',
    howItWorks: [
      { step: 1, title: 'SCAN', description: 'Scan the QR code on the frame.' },
      { step: 2, title: 'SPEAK', description: 'Say the secret phrase.' },
      { step: 3, title: 'UNLOCK', description: 'Your memory unlocks instantly with your voice.' },
      { step: 4, title: 'RELIVE', description: 'Relive your beautiful moments.' }
    ],
    whatsappMsg: 'Hi! I want to order the EchoHeart Frame - Voice Unlock Memory Frame. Please share details.',
    // Size options with REVISED prices
    sizes: [
      { 
        id: 'A6', 
        label: 'A6', 
        dimensions: '105 x 148 mm',
        price: 499,
        originalPrice: 699
      },
      { 
        id: 'A5', 
        label: 'A5', 
        dimensions: '148 x 210 mm',
        price: 699,
        originalPrice: 999
      },
      { 
        id: 'A4', 
        label: 'A4', 
        dimensions: '210 x 297 mm',
        price: 899,
        originalPrice: 1299
      },
      { 
        id: 'A3', 
        label: 'A3', 
        dimensions: '297 x 420 mm',
        price: 1299,
        originalPrice: 1699
      }
    ]
  }
];

export const getProductById = (id) => {
  return products.find(product => product.id === parseInt(id));
};

export const getProductsByCategory = (category) => {
  return products.filter(product => product.category === category);
};

// Helper function to get size options for a product
export const getProductSizes = (productId) => {
  const product = getProductById(productId);
  return product?.sizes || [];
};

// Helper function to get price for specific size
export const getProductPriceForSize = (productId, sizeId) => {
  const product = getProductById(productId);
  if (!product || !product.sizes) return null;
  const size = product.sizes.find(s => s.id === sizeId);
  return size || null;
};