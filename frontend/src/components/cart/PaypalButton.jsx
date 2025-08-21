

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

import React from "react";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

const PaypalButton = ({ amount, onSuccess, onError }) => {
  // Debug: Log the amount being passed
  console.log("PayPal Button - Amount:", amount, typeof amount);

  const initialOptions = {
    "client-id": import.meta.env.VITE_PAYPAL_CLIENT_ID,
    currency: "USD",
    intent: "capture",
    components: "buttons", // ✅ important, ensures buttons are loaded
  };

  // Debug: Log PayPal options
  console.log("PayPal Options:", initialOptions);

  return (
    <PayPalScriptProvider options={initialOptions}>
      <PayPalButtons
        style={{
          layout: "vertical",
          color: "gold",
          shape: "rect",
          label: "paypal",
          height: 40,
        }}
        createOrder={(data, actions) => {
          try {
            const orderAmount = parseFloat(amount).toFixed(2);
            console.log("Creating PayPal order with amount:", orderAmount);

            return actions.order
              .create({
                purchase_units: [
                  {
                    amount: {
                      value: orderAmount,
                      currency_code: "USD",
                    },
                    description: "Purchase from Your Store",
                  },
                ],
                application_context: {
                  shipping_preference: "NO_SHIPPING", // Or GET_FROM_FILE if you need shipping
                },
              })
              .then((orderId) => {
                console.log("PayPal Order ID created:", orderId);
                return orderId;
              });
          } catch (error) {
            console.error("Error creating PayPal order:", error);
            onError(error);
          }
        }}
        onApprove={async (data, actions) => {
          try {
            console.log("PayPal payment approved:", data);
            const order = await actions.order.capture();
            console.log("PayPal order captured successfully:", order);
            onSuccess(order);
          } catch (error) {
            console.error("Error capturing PayPal order:", error);
            onError(error);
          }
        }}
        onError={(err) => {
          console.error("PayPal Button Error:", err);
          onError(err);
        }}
        onCancel={(data) => {
          console.warn("PayPal payment cancelled:", data);
        }}
      />
    </PayPalScriptProvider>
  );
};

export default PaypalButton;
