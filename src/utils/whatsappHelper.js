import { WHATSAPP_NUMBER, WHATSAPP_MESSAGES } from './constants';

export const openWhatsApp = (message) => {
  const encodedMessage = encodeURIComponent(message);
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
  window.open(url, '_blank');
};

export const orderOnWhatsApp = (productName, price) => {
  const message = WHATSAPP_MESSAGES.ORDER(productName, price);
  openWhatsApp(message);
};

export const generalInquiry = () => {
  openWhatsApp(WHATSAPP_MESSAGES.GENERAL);
};

export const contactFormMessage = (name, email, message) => {
  const fullMessage = WHATSAPP_MESSAGES.CUSTOM(name, email, message);
  openWhatsApp(fullMessage);
};