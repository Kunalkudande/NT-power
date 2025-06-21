import axios from 'axios';
import React, { useState, ChangeEvent, FormEvent } from "react";
import { useCart } from "@/context/CartContext";
import { createOrder } from "@/api/woocommerce";

type FormData = {
  firstName: string;
  lastName: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  postcode: string;
  country: string;
  email: string;
  phone: string;
};

type CheckoutFormProps = {
  onSubmitOrder: (formData: FormData) => void;
};

const CheckoutForm: React.FC<CheckoutFormProps> = ({ onSubmitOrder }) => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    postcode: "",
    country: "",
    email: "",
    phone: "",
  });

  const { cartItems, cartTotal, clearCart } = useCart();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckout = async () => {
    try {
      const orderData = {
        payment_method: 'revolut',
        payment_method_title: 'Revolut',
        set_paid: false,
        billing: {
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
        },
        line_items: cartItems.map((item) => ({
          product_id: item.product.id,
          quantity: item.quantity,
        })),
        total: cartTotal.toString(),
      };

      const order = await createOrder(orderData);
      const orderId = order.id;
      const amount = order.total;

      const response = await axios.post('https://your-backend-url/api/revolut/create-payment', {
        orderId,
        amount,
        customerEmail: order.billing.email,
      });

      const paymentUrl = response.data.payment_url;
      window.location.href = paymentUrl;

    } catch (error) {
      console.error('Checkout failed:', error);
      alert('Er is iets misgegaan tijdens het afrekenen. Probeer het opnieuw.');
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const orderData = {
        payment_method: "cod",
        payment_method_title: "Contant bij levering",
        set_paid: false,
        billing: {
          first_name: formData.firstName,
          last_name: formData.lastName,
          address_1: formData.address1,
          address_2: formData.address2,
          city: formData.city,
          state: formData.state,
          postcode: formData.postcode,
          country: formData.country,
          email: formData.email,
          phone: formData.phone,
        },
        shipping: {
          first_name: formData.firstName,
          last_name: formData.lastName,
          address_1: formData.address1,
          address_2: formData.address2,
          city: formData.city,
          state: formData.state,
          postcode: formData.postcode,
          country: formData.country,
        },
        line_items: cartItems.map((item) => ({
          product_id: item.product.id,
          quantity: item.quantity,
        })),
        customer_note: "",
        total: cartTotal.toString(),
      };

      const response = await createOrder(orderData);
      alert("Bestelling succesvol geplaatst! Bestelnummer: " + response.id);
      clearCart();
      onSubmitOrder(formData);

      handleCheckout();
    } catch (error) {
      console.error("Error creating order:", error);
      alert("Bestelling plaatsen mislukt. Probeer het opnieuw.");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Afrekenen</h1>
      <form onSubmit={handleSubmit}>
        {/* Add translated form fields here if needed */}
        <div className="flex justify-end">
          <button type="submit" className="bg-blue-600 text-white py-2 px-6 rounded-md">
            Doorgaan naar betaling
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
