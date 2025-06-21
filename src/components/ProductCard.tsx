import React, { useState, useEffect } from "react";
import { ShoppingCart, X, CreditCard } from "lucide-react";
import { Product } from "@/types/product";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

interface ProductCardProps {
  product: Product;
  autoOpen?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, autoOpen }) => {
  const [showModal, setShowModal] = useState(false);
  const [isInCart, setIsInCart] = useState(false);
  const { addToCart } = useCart();
  const { toast } = useToast();
  const navigate = useNavigate();
  const { name, price, description, images, categories, features } = product;

  useEffect(() => {
    if (autoOpen) {
      setTimeout(() => {
        setShowModal(true);
      }, 300);
    }
  }, [autoOpen]);

  const handleAddToCart = () => {
    addToCart(product);
    setIsInCart(true);
    toast({
      title: "Toegevoegd aan winkelwagen",
      description: `${name} is toegevoegd.`,
      duration: 1000,
    });
  };

  const handleCheckout = () => {
    setShowModal(false);
    navigate("/cart");
  };

  const imageSrc = images?.[0]?.src || "/placeholder.png";
  const categoryName = categories?.[0]?.name || "Niet-gecategoriseerd";

  return (
    <>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col h-full">
        <div className="w-full aspect-square bg-gray-100 relative">
          <img src={imageSrc} alt={name} className="absolute inset-0 w-full h-full object-contain p-2" />
        </div>
        <div className="p-4 flex flex-col flex-1">
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-sm text-gray-500">{categoryName}</p>
          <p className="text-blue-600 font-bold text-xl mt-1">€{price}</p>
          <button 
            className="mt-4 text-sm bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" 
            onClick={() => setShowModal(true)}
          >
            Nu kopen
          </button>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4 pb-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowModal(false)}></div>

          <div className="bg-white rounded-lg shadow-xl w-full max-w-6xl max-h-[90vh] overflow-y-auto z-10 relative flex flex-col md:flex-row">
            <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-20" onClick={() => setShowModal(false)}>
              <X className="w-6 h-6" />
            </button>

            <div className="md:w-1/3 p-6 bg-gray-50 flex items-center justify-center">
              <img src={imageSrc} alt={name} className="max-w-full max-h-[400px] object-contain" />
            </div>

            <div className="md:w-2/3 p-6 overflow-y-auto max-h-[90vh] md:max-h-[unset]">
              <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
              <p className="text-sm text-gray-500 mb-2">{categoryName}</p>
              <p className="text-blue-600 font-bold text-2xl mb-4">€{price}</p>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2 text-gray-700">Beschrijving</h3>
                <div className="text-gray-600 prose prose-sm" dangerouslySetInnerHTML={{ __html: description }} />
              </div>

              {features && features.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2 text-gray-700">Kenmerken</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {features.map((feat, idx) => (
                      <li key={idx}>{feat}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex space-x-4 mt-6">
                <button
                  className="flex-1 flex items-center justify-center space-x-2 bg-blue-600 text-white rounded p-3 hover:bg-blue-700 transition-colors duration-200"
                  onClick={handleAddToCart}
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span>Voeg toe aan winkelwagen</span>
                </button>
                <button 
                  className={`flex-1 flex items-center justify-center space-x-2 px-4 py-3 rounded transition-colors duration-200 ${
                    isInCart 
                      ? "bg-green-600 text-white hover:bg-green-700" 
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                  onClick={isInCart ? handleCheckout : undefined}
                  disabled={!isInCart}
                >
                  <CreditCard className="w-5 h-5" />
                  <span>Afrekenen</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;
