import { useCallback } from 'react';
import { openWhatsApp } from '../utils/whatsappHelper';

const useWhatsApp = () => {
  const sendMessage = useCallback((message) => {
    openWhatsApp(message);
  }, []);

  const orderProduct = useCallback((productName, price) => {
    sendMessage(`Hi! I want to order ${productName} (${price}). Please share details on how to proceed.`);
  }, [sendMessage]);

  const sendCustomOrder = useCallback((productName, customization) => {
    sendMessage(`Hi! I want to order ${productName} with these details: ${customization}`);
  }, [sendMessage]);

  return { sendMessage, orderProduct, sendCustomOrder };
};

export default useWhatsApp;