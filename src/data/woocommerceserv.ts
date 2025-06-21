import axios from 'axios';

const apiUrl = "https://natasha12c4033c0a.wpcomstaging.com/wp-json/wc/v3/products";

const consumerKey = "ck_8f2166ff7faac63ecc14f70da19e774a45de1af2"; // replace with your consumer key
const consumerSecret = "cs_14a692c7a1fab65710ee9be83efdff4b78dbd949"; // replace with your consumer secret

export const fetchProducts = async () => {
  try {
    const response = await axios.get(apiUrl, {
      params: {
        consumer_key: consumerKey,
        consumer_secret: consumerSecret,
        per_page: 100,
      },
    });

        // Sort products by name (ascending)
      const sortedProducts = response.data.sort((a: any, b: any) => {
          return a.name.localeCompare(b.name); // Ascending alphabetical order
      });
    return response.data;
  } catch (error: any) {
    console.error("Fout bij het ophalen van producten uit WooCommerce:", error.response?.data || error.message);
    throw error;
  }
};
