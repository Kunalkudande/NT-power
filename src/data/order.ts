import axios from 'axios';

const createOrderInWooCommerce = async (orderDetails) => {
  try {
    const response = await axios.post('https://yourwebsite.com/wp-json/wc/v3/orders', orderDetails, {
      auth: {
        username: 'ck_d0a4fbaad3911a0fea695b90f4dc09e5bffa8d90',  // Use your actual Consumer Key here
        password: 'cs_5a3a6cba670c1f3fe92ddd3b17e30df0f69d4767', // Use your actual Consumer Secret here
      },
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.data;
  } catch (error) {
    console.error('Fout bij het aanmaken van de bestelling:', error);
    throw error;
  }
};
