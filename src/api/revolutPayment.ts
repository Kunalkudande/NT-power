import axios from 'axios';

export const createRevolutPayment = async (orderId: number, amount: number, customerEmail: string) => {
  const response = await axios.post('https://your-backend-url/api/revolut/create-payment', {
    orderId,
    amount,
    customerEmail,
  });

  return response.data.payment_url;
};
