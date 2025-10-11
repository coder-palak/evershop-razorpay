import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useCheckout } from '@components/common/context/checkout';

export default function RazorpayPayment({ setting: { razorpayDisplayName } }) {
  const { cartId, orderId, orderPlaced } = useCheckout();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handlePayment = async () => {
    try {
      setLoading(true);
      setError(null);

      // Create Razorpay order
      const createResponse = await fetch('/api/razorpay/createOrder', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ orderId })
      });

      const createData = await createResponse.json();

      if (!createData.success) {
        throw new Error(createData.message || 'Failed to create order');
      }

      // Load Razorpay script
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        const options = {
          key: createData.keyId,
          amount: createData.amount,
          currency: createData.currency,
          order_id: createData.orderId,
          name: 'Purulia Store',
          description: 'Order Payment',
          handler: async function (response) {
            try {
              // Verify payment
              const verifyResponse = await fetch('/api/razorpay/verifyPayment', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  razorpay_order_id: response.razorpay_order_id,
                  razorpay_payment_id: response.razorpay_payment_id,
                  razorpay_signature: response.razorpay_signature,
                  orderId: orderId
                })
              });

              const verifyData = await verifyResponse.json();

              if (verifyData.success) {
                // Payment successful, redirect to success page
                orderPlaced(orderId);
              } else {
                setError(verifyData.message || 'Payment verification failed');
                setLoading(false);
              }
            } catch (err) {
              setError(err.message || 'Payment verification failed');
              setLoading(false);
            }
          },
          modal: {
            ondismiss: function () {
              setLoading(false);
              setError('Payment cancelled');
            }
          },
          theme: {
            color: '#008060'
          }
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
      };

      script.onerror = () => {
        setError('Failed to load Razorpay. Please try again.');
        setLoading(false);
      };
    } catch (err) {
      setError(err.message || 'Something went wrong');
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold">{razorpayDisplayName || 'Razorpay'}</h3>
        <p className="text-sm text-gray-600">Pay securely using UPI, Cards, NetBanking, or Wallets</p>
      </div>

      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded text-red-700 text-sm">
          {error}
        </div>
      )}

      <button
        type="button"
        onClick={handlePayment}
        disabled={loading}
        className="button primary w-full"
      >
        {loading ? 'Processing...' : 'Pay with Razorpay'}
      </button>

      <div className="mt-3 text-xs text-gray-500 text-center">
        Secured by Razorpay
      </div>
    </div>
  );
}

RazorpayPayment.propTypes = {
  setting: PropTypes.shape({
    razorpayDisplayName: PropTypes.string
  }).isRequired
};

export const layout = {
  areaId: 'checkoutPaymentMethodrazorpay',
  sortOrder: 10
};

export const query = `
  query Query {
    setting {
      razorpayDisplayName
    }
  }
`;
