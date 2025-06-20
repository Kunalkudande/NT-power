import axios from 'axios';

// WooCommerce API Configuration
const WOOCOMMERCE_API_BASE_URL = "https://natasha12c4033c0a.wpcomstaging.com/wp-json/wc/v3";
const CONSUMER_KEY = "ck_8f2166ff7faac63ecc14f70da19e774a45de1af2"; // Replace with your actual consumer key
const CONSUMER_SECRET = "cs_14a692c7a1fab65710ee9be83efdff4b78dbd949"; // Replace with your actual consumer secret

// Axios instance for WooCommerce
const woocommerceAxios = axios.create({
  baseURL: WOOCOMMERCE_API_BASE_URL,
  auth: {
    username: CONSUMER_KEY,
    password: CONSUMER_SECRET,
  },
});

// Type definitions
interface OrderData {
  [key: string]: any; // Ideally, define a stricter type if possible
}

interface PaymentData {
  order_id: number;
  amount: number;
  currency: string;
  customer_email: string;
  return_url: string;
  cancel_url: string;
}

interface PaymentResponse {
  payment_url: string;
  order_id: number;
}

// Create a new order in WooCommerce
export const createOrder = async (orderData: OrderData) => {
  try {
    const { data } = await woocommerceAxios.post('/orders', orderData);
    return data;
  } catch (error: any) {
    console.error('Error creating order:', error?.response?.data || error.message);
    throw new Error('Aanmaken van bestelling mislukt.'); // Failed to create order.
  }
};

// Process payment with simulated Revolut gateway
export const processRevolutPayment = async (orderId: number, amount: number, customerEmail: string): Promise<void> => {
  try {
    const paymentData = {
      orderId,
      amount,
      customerEmail,
    };

    const response = await axios.post('https://nt-bms-backend.onrender.com/api/revolut/create-order', paymentData);

    // Extract the checkout URL from the backend response
    const checkoutUrl = response.data.checkoutUrl;

    if (checkoutUrl) {
      // Redirect the user to the payment link provided by Revolut
      window.location.href = checkoutUrl;
    } else {
      throw new Error('Betalings-URL niet ontvangen van backend.'); // Payment URL not received from backend
    }
  } catch (error: any) {
    console.error('Error processing Revolut payment:', error?.response?.data || error.message);
    throw new Error('Verwerken van betaling mislukt.'); // Failed to process payment.
  }
};

// Check the payment status of an order
export const checkPaymentStatus = async (orderId: number): Promise<string> => {
  try {
    const { data } = await woocommerceAxios.get(`/orders/${orderId}`);
    return data.status; // Returns 'processing', 'completed', 'failed', etc.
  } catch (error: any) {
    console.error('Error checking payment status:', error?.response?.data || error.message);
    throw new Error('Controleren van betalingsstatus mislukt.'); // Failed to check payment status.
  }
};

// Update the status of an order in WooCommerce
export const updateOrderStatus = async (orderId: number, status: string): Promise<void> => {
  try {
    const response = await woocommerceAxios.put(`/orders/${orderId}`, {
      status: status, // The new order status like 'completed', 'processing', etc.
    });
    console.log('Order status updated:', response.data);
  } catch (error: any) {
    console.error('Error updating order status:', error?.response?.data || error.message);
    throw new Error('Bijwerken van bestelstatus mislukt.'); // Failed to update order status.
  }
};
