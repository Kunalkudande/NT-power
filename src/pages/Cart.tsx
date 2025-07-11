import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import Header from "@/components/Navbar";
import Footer from "@/components/Footer";

const Cart = () => {
  const navigate = useNavigate();

  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    cartTotal,
  } = useCart();

  const handleCheckoutClick = () => {
    navigate('/checkout');
  };

  return (
    <>
      <Header />

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Jouw Winkelwagen</h1> {/* Your Cart */}

        {cartItems.length === 0 ? (
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gray-100 rounded-full mb-6">
              <ShoppingBag className="w-12 h-12 text-gray-400" />
            </div>
            <h2 className="text-2xl font-medium text-gray-700 mb-4">
              Je winkelwagen is leeg
            </h2> {/* Your cart is empty */}
            <p className="text-gray-500 mb-8">
              Het lijkt erop dat je nog geen producten hebt toegevoegd.
            </p> {/* Looks like you haven't added any products to your cart yet. */}
            <Link
              to="/products"
              className="bg-blue-600 text-white py-3 px-6 rounded-md text-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Verder winkelen
            </Link> {/* Continue Shopping */}
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-6">Winkelwagenitems</h2> {/* Cart Items */}

                  <div className="divide-y divide-gray-200 space-y-4">
                    {cartItems.map((item) => (
                      <div key={item.product.id} className="pt-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <img
                              src={
                                Array.isArray(item.product.images) && item.product.images.length > 0 && item.product.images[0]?.src
                                  ? item.product.images[0].src
                                  : "/placeholder.jpg"
                              }
                              alt={item.product.name || "Productafbeelding"} // Product Image
                              className="w-16 h-16 object-contain bg-gray-50"
                            />
                            <div>
                              <h3 className="font-medium">
                                {item.product.name}
                              </h3>
                              <p className="text-gray-500 text-sm">
                                Prijs per stuk: €{Number(item.product.price).toFixed(2)}
                              </p> {/* Unit price */}
                            </div>
                          </div>

                          <div className="flex items-center space-x-4">
                            <div className="quantity-control flex items-center border rounded">
                              <button 
                                className="quantity-btn p-1"
                                onClick={() => decreaseQuantity(item.product.id)}
                                aria-label="Aantal verlagen"
                              >
                                <Minus className="w-4 h-4" />
                              </button>

                              <span className="w-8 text-center">{item.quantity}</span>

                              <button 
                                className="quantity-btn p-1"
                                onClick={() => increaseQuantity(item.product.id)}
                                aria-label="Aantal verhogen"
                              >
                                <Plus className="w-4 h-4" />
                              </button>
                            </div>

                            <div className="w-24 text-right font-medium">
                              €{(item.product.price * item.quantity).toFixed(2)}
                            </div>

                            <button 
                              className="text-gray-400 hover:text-red-500"
                              onClick={() => removeFromCart(item.product.id)}
                              aria-label="Verwijder item"
                            >
                              <Trash2 className="w-5 h-5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div>
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                <h2 className="text-xl font-semibold mb-6">Bestellingsoverzicht</h2> {/* Order Summary */}

                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotaal</span> {/* Subtotal */}
                    <span>€{cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Verzending</span> {/* Shipping */}
                    <span className="text-green-600">*Onbekend</span> {/* Unknown */}
                  </div>
                  <div className="border-t border-gray-200 pt-4 mt-4">
                    <div className="flex justify-between font-bold">
                      <span>Totaal</span>
                      <span>€{cartTotal.toFixed(2)}</span>
                    </div>
                    <p className="text-gray-500 text-sm mt-1">Inclusief btw</p> {/* Including taxes */}
                  </div>
                </div>

                <button 
                  className="buy-now-btn w-full mt-6 bg-blue-600 text-white py-3 px-4 rounded hover:bg-blue-700 transition-colors"
                  onClick={handleCheckoutClick}
                >
                  Ga naar afrekenen
                </button> {/* Proceed to Checkout */}

                <div className="mt-6 text-center">
                  <Link
                    to="/products"
                    className="text-blue-600 hover:underline text-sm"
                  >
                    Verder winkelen
                  </Link> {/* Continue Shopping */}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default Cart;
