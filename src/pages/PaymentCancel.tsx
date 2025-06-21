import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentCancel: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear the pending order ID from localStorage
    localStorage.removeItem('pendingOrderId');
  }, []);

  const handleReturnToCheckout = () => {
    // Navigate back to the checkout page or cart
    navigate('/cart');
  };

  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      </div>
      <h1 className="text-3xl font-bold mb-4">
        {/* Payment Cancelled */}
        Betaling Geannuleerd
      </h1>
      <p className="text-lg mb-6">
        {/* Your payment has been cancelled. No charges have been made. */}
        Je betaling is geannuleerd. Er zijn geen kosten in rekening gebracht.
      </p>
      
      <button 
        onClick={handleReturnToCheckout}
        className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
      >
        {/* Return to Checkout */}
        Terug naar de kassa
      </button>
    </div>
  );
};

export default PaymentCancel;
