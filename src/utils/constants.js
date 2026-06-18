export const WHATSAPP_NUMBER = process.env.REACT_APP_WHATSAPP_NUMBER || '919876543210';
export const COMPANY_NAME = process.env.REACT_APP_COMPANY_NAME || 'Foto Magic';
export const EMAIL = process.env.REACT_APP_EMAIL || 'hello@fotomagic.com';
export const INSTAGRAM_URL = process.env.REACT_APP_INSTAGRAM_URL || 'https://instagram.com/fotomagic';

export const WHATSAPP_MESSAGES = {
  GENERAL: 'Hi! I want to know more about Foto Magic products.',
  ORDER: (productName, price) => `Hi! I want to order ${productName} (${price}). Please share details.`,
  CUSTOM: (name, email, message) => `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
};

export const ROUTES = {
  HOME: '/',
  PRODUCTS: '/products',
  PRODUCT_DETAIL: '/product/:id',
  REVIEWS: '/reviews',
  CONTACT: '/contact',
  ORDER_SUCCESS: '/order-success',
};

export const DELIVERY_INFO = {
  MIN_DAYS: 5,
  MAX_DAYS: 7,
  SHIPPING_COST: 0,
  FREE_SHIPPING_ABOVE: 999,
};