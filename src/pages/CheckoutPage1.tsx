// import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
// import { useNavigate } from "react-router-dom";
// import { useCart } from "@/context/CartContext";
// import { createOrder, processRevolutPayment } from "@/api/woocommerce";
// import Header from "@/components/Navbar";
// import Footer from "@/components/Footer";

// type FormData = {
//   firstName: string;
//   lastName: string;
//   address1: string;
//   address2?: string;
//   city: string;
//   state: string;
//   postcode: string;
//   country: string;
//   email: string;
//   phone: string;
// };

// const initialFormData: FormData = {
//   firstName: "",
//   lastName: "",
//   address1: "",
//   address2: "",
//   city: "",
//   state: "",
//   postcode: "",
//   country: "",
//   email: "",
//   phone: "",
// };

// const CheckoutPage: React.FC = () => {
//   const navigate = useNavigate();
//   const { cartItems, cartTotal, clearCart } = useCart();

//   const [formData, setFormData] = useState<FormData>(initialFormData);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   useEffect(() => {
//     if (cartItems.length === 0) {
//       navigate("/cart");
//     }
//   }, [cartItems, navigate]);

//   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (isSubmitting) return;
  
//     setIsSubmitting(true);
  
//     try {
//       const orderData = {
//         payment_method: "revolut",
//         payment_method_title: "Revolut Payment Gateway",
//         set_paid: false,
//         billing: { ...formData },
//         shipping: {
//           first_name: formData.firstName,
//           last_name: formData.lastName,
//           address_1: formData.address1,
//           address_2: formData.address2 || "",
//           city: formData.city,
//           state: formData.state,
//           postcode: formData.postcode,
//           country: formData.country,
//         },
//         line_items: cartItems.map((item) => ({
//           product_id: item.product.id,
//           quantity: item.quantity,
//         })),
//         customer_note: "",
//         total: cartTotal.toString(),
//       };
  
//       const order = await createOrder(orderData);
//       console.log("Order created successfully:", order);
  
//       // Process payment and redirect to Revolut payment page
//       await processRevolutPayment(order.id, parseFloat(cartTotal.toString()), formData.email);
//     } catch (error: any) {
//       console.error("Error processing payment:", error);
//       alert(error?.message || "Failed to process payment. Please try again.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

     

//   return (
//     <>
//       <Header />
//       <div className="container mx-auto px-4 py-8">
//         <h1 className="text-3xl font-bold mb-8">Checkout</h1>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Checkout Form */}
//           <div className="lg:col-span-2">
//             <div className="bg-white rounded-lg shadow-md p-6">
//               <h2 className="text-xl font-semibold mb-6">Shipping & Billing Details</h2>

//               <form onSubmit={handleSubmit}>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//                   {["firstName", "lastName"].map((field) => (
//                     <input
//                       key={field}
//                       type="text"
//                       name={field}
//                       placeholder={field === "firstName" ? "First Name" : "Last Name"}
//                       value={(formData as any)[field]}
//                       onChange={handleChange}
//                       required
//                       className="border p-2 rounded w-full"
//                     />
//                   ))}
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//                   {["address1", "address2"].map((field) => (
//                     <input
//                       key={field}
//                       type="text"
//                       name={field}
//                       placeholder={field === "address1" ? "Address Line 1" : "Address Line 2"}
//                       value={(formData as any)[field]}
//                       onChange={handleChange}
//                       className="border p-2 rounded w-full"
//                       required={field === "address1"}
//                     />
//                   ))}
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//                   {["city", "state"].map((field) => (
//                     <input
//                       key={field}
//                       type="text"
//                       name={field}
//                       placeholder={field === "city" ? "City" : "State"}
//                       value={(formData as any)[field]}
//                       onChange={handleChange}
//                       required
//                       className="border p-2 rounded w-full"
//                     />
//                   ))}
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//                   {["postcode", "country"].map((field) => (
//                     <input
//                       key={field}
//                       type="text"
//                       name={field}
//                       placeholder={field === "postcode" ? "Postcode" : "Country"}
//                       value={(formData as any)[field]}
//                       onChange={handleChange}
//                       required
//                       className="border p-2 rounded w-full"
//                     />
//                   ))}
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//                   {["email", "phone"].map((field) => (
//                     <input
//                       key={field}
//                       type={field === "email" ? "email" : "tel"}
//                       name={field}
//                       placeholder={field === "email" ? "Email" : "Phone Number"}
//                       value={(formData as any)[field]}
//                       onChange={handleChange}
//                       required
//                       className="border p-2 rounded w-full"
//                     />
//                   ))}
//                 </div>

//                 <button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className="w-full bg-blue-600 text-white py-3 px-4 rounded hover:bg-blue-700 transition-colors disabled:opacity-50"
//                 >
//                   {isSubmitting ? "Processing..." : "Proceed to Payment"}
//                 </button>
//               </form>
//             </div>
//           </div>

//           {/* Order Summary */}
//           <div>
//             <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
//               <h2 className="text-xl font-semibold mb-6">Order Summary</h2>

//               <div className="space-y-4">
//                 {cartItems.map((item) => (
//                   <div key={item.product.id} className="flex justify-between items-center">
//                     <span className="text-gray-600">
//                       {item.product.name} × {item.quantity}
//                     </span>
//                     <span>${(item.product.price * item.quantity).toFixed(2)}</span>
//                   </div>
//                 ))}

//                 <div className="border-t border-gray-200 pt-4 mt-4">
//                   <div className="flex justify-between">
//                     <span className="text-gray-600">Subtotal</span>
//                     <span>${cartTotal.toFixed(2)}</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="text-gray-600">Shipping</span>
//                     <span className="text-green-600">Free</span>
//                   </div>
//                   <div className="border-t border-gray-200 pt-4 mt-4">
//                     <div className="flex justify-between font-bold">
//                       <span>Total</span>
//                       <span>${cartTotal.toFixed(2)}</span>
//                     </div>
//                     <p className="text-gray-500 text-sm mt-1">Including taxes</p>
//                   </div>
//                 </div>
//               </div>

//               <div className="mt-6 text-center">
//                 <button
//                   onClick={() => navigate("/cart")}
//                   className="text-blue-600 hover:underline text-sm"
//                 >
//                   Return to Cart
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default CheckoutPage;
