import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { checkPaymentStatus, updateOrderStatus } from '@/api/woocommerce';

const PaymentSuccess: React.FC = () => {
  const [orderStatus, setOrderStatus] = useState<string>('processing');
  const [orderId, setOrderId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    const verifyPayment = async () => {
      try {
        // Get the pending order ID from localStorage
        const pendingOrderId = localStorage.getItem('pendingOrderId');
        setOrderId(pendingOrderId);
        
        if (!pendingOrderId) {
          throw new Error('No pending order found');
        }

        // Check payment status
        const status = await checkPaymentStatus(parseInt(pendingOrderId));
        setOrderStatus(status);
        
        // Clear the pending order from localStorage
        localStorage.removeItem('pendingOrderId');
        
        // If payment was successful, clear the cart
        if (status === 'processing' || status === 'completed') {
          // Update order status to 'completed' in WooCommerce
          await updateOrderStatus(parseInt(pendingOrderId), 'completed');
        }
      } catch (error) {
        console.error('Error verifying payment:', error);
        setOrderStatus('failed');
      } finally {
        setIsLoading(false);
      }
    };

    verifyPayment();
  }, []);

  const handleContinueShopping = () => {
    navigate('/');
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
        <p className="mt-4 text-lg">Verifying your payment...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16 text-center">
      {orderStatus === 'processing' || orderStatus === 'completed' ? (
        <>
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold mb-4">Payment Successful!</h1>
          <p className="text-lg mb-6">Thank you for your purchase. Your order #{orderId} has been confirmed.</p>
        </>
      ) : (
        <>
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold mb-4">Payment Failed</h1>
          <p className="text-lg mb-6">We couldn't process your payment. Please try again or contact customer support.</p>
        </>
      )}
      
      <button 
        onClick={handleContinueShopping}
        className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
      >
        Continue Shopping
      </button>
    </div>
  );
};

export default PaymentSuccess;
