

// import React from "react";
// import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

// const PaypalButton = ({ amount, onSuccess, onError }) => {
//   // Debug: Log the amount being passed
//   console.log("PayPal Button - Amount:", amount, typeof amount);
  
//   const initialOptions = {
//     "client-id": import.meta.env.VITE_PAYPAL_CLIENT_ID,
//     currency: "USD",
//     intent: "capture",
//     // Explicitly set to sandbox if needed
//     "data-sdk-integration-source": "developer-studio",
//   };

//   // Debug: Log PayPal options
//   console.log("PayPal Options:", initialOptions);

//   return (
//     <PayPalScriptProvider options={initialOptions}>
//       <PayPalButtons
//         style={{
//           layout: "vertical",
//           color: "gold",
//           shape: "rect",
//           label: "paypal",
//           height: 40
//         }}
//         createOrder={(data, actions) => {
//           const orderAmount = parseFloat(amount).toFixed(2);
//           console.log("Creating PayPal order with amount:", orderAmount);
          
//           return actions.order.create({
//             purchase_units: [
//               {
//                 amount: {
//                   value: orderAmount,
//                   currency_code: "USD"
//                 },
//                 description: "Purchase from Your Store"
//               }
//             ],
//             application_context: {
//               shipping_preference: "NO_SHIPPING" // Set to GET_FROM_FILE if you need shipping
//             }
//           }).then((orderId) => {
//             console.log("PayPal Order ID created:", orderId);
//             return orderId;
//           }).catch((error) => {
//             console.error("Error creating PayPal order:", error);
//             throw error;
//           });
//         }}
//         onApprove={async (data, actions) => {
//           try {
//             console.log("PayPal payment approved:", data);
//             const order = await actions.order.capture();
//             console.log("PayPal order captured successfully:", order);
//             onSuccess(order);
//           } catch (error) {
//             console.error("Error capturing PayPal order:", error);
//             onError(error);
//           }
//         }}
//         onError={(err) => {
//           console.error("PayPal Button Error:", err);
//           onError(err);
//         }}
//         onCancel={(data) => {
//           console.log("PayPal payment cancelled:", data);
//         }}
//       />
//     </PayPalScriptProvider>
//   );
// };

// export default PaypalButton;

import React, { useEffect, useRef, useState } from 'react';

const PaypalButton = ({ amount, onSuccess, onError }) => {
  const paypalRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const clientId = import.meta.env.VITE_PAYPAL_CLIENT_ID;

  useEffect(() => {
    let mounted = true;

    const loadPayPal = async () => {
      if (!mounted) return;

      try {
        // Remove any existing PayPal scripts
        const existingScript = document.querySelector('script[src*="paypal.com/sdk"]');
        if (existingScript) {
          existingScript.remove();
        }

        // Clear the container
        if (paypalRef.current) {
          paypalRef.current.innerHTML = '';
        }

        // Wait a moment for DOM to be stable
        await new Promise(resolve => setTimeout(resolve, 100));

        if (!mounted || !paypalRef.current) return;

        // Create and load PayPal script
        const script = document.createElement('script');
        script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}&currency=USD`;
        script.async = true;

        script.onload = () => {
          if (!mounted || !window.paypal || !paypalRef.current) return;

          try {
            window.paypal.Buttons({
              createOrder: (data, actions) => {
                const orderAmount = parseFloat(amount).toFixed(2);
                return actions.order.create({
                  purchase_units: [{
                    amount: {
                      value: orderAmount,
                      currency_code: 'USD'
                    }
                  }]
                });
              },
              onApprove: async (data, actions) => {
                try {
                  const order = await actions.order.capture();
                  if (mounted) {
                    console.log('Payment successful:', order);
                    onSuccess && onSuccess(order);
                  }
                } catch (err) {
                  if (mounted) {
                    console.error('Capture error:', err);
                    onError && onError(err);
                  }
                }
              },
              onError: (err) => {
                if (mounted) {
                  console.error('PayPal error:', err);
                  onError && onError(err);
                }
              }
            }).render(paypalRef.current).then(() => {
              if (mounted) {
                setIsLoading(false);
              }
            }).catch((err) => {
              if (mounted) {
                console.error('Render error:', err);
                setError('Failed to load PayPal button');
                setIsLoading(false);
              }
            });
          } catch (err) {
            if (mounted) {
              console.error('PayPal initialization error:', err);
              setError('PayPal initialization failed');
              setIsLoading(false);
            }
          }
        };

        script.onerror = () => {
          if (mounted) {
            setError('Failed to load PayPal SDK');
            setIsLoading(false);
          }
        };

        document.head.appendChild(script);
      } catch (err) {
        if (mounted) {
          console.error('Script loading error:', err);
          setError('Failed to initialize PayPal');
          setIsLoading(false);
        }
      }
    };

    loadPayPal();

    return () => {
      mounted = false;
      // Clean up
      if (paypalRef.current) {
        paypalRef.current.innerHTML = '';
      }
    };
  }, [clientId, amount]);

  if (!clientId) {
    return (
      <div style={{ 
        padding: '20px', 
        border: '2px solid #ff4444', 
        borderRadius: '8px',
        backgroundColor: '#ffe6e6',
        color: '#cc0000',
        textAlign: 'center'
      }}>
        PayPal Client ID is missing from environment variables
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ 
        padding: '20px', 
        border: '2px solid #ff4444', 
        borderRadius: '8px',
        backgroundColor: '#ffe6e6',
        color: '#cc0000',
        textAlign: 'center'
      }}>
        {error}
        <br />
        <button 
          onClick={() => window.location.reload()} 
          style={{ 
            marginTop: '10px', 
            padding: '8px 16px',
            backgroundColor: '#0070f3',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '50px' }}>
      {isLoading && (
        <div style={{
          padding: '20px',
          textAlign: 'center',
          border: '2px solid #0070f3',
          borderRadius: '8px',
          backgroundColor: '#f0f8ff',
          color: '#0070f3'
        }}>
          Loading PayPal payment options...
        </div>
      )}
      <div ref={paypalRef} />
    </div>
  );
};

export default PaypalButton;