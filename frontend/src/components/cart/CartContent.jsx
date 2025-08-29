import React, { use } from "react";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  updateCartItemQuantity,
} from "../../redux/slices/cartSlice";

const CartContent = ({ cart, userId, guestId }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (productId, delta, quantity, color) => {
    const newQuantity = quantity + delta;
    if (newQuantity >= 1) {
      dispatch(
        updateCartItemQuantity({
          productId,
          quantity: newQuantity,
          guestId,
          userId,
          color,
        })
      );
    }
  };

  const handleRemoveFromCart = (productId, color) => {
    dispatch(removeFromCart({ productId, guestId, color, userId }));
  };

  return (
    <div>
      {cart.products.map((product, index) => (
        <div
          key={index}
          className="flex text-gray-950 items-start justify-between
        py-4 border-b border-gray-500"
        >
          <div className="flex items-start">
            {/* <img
              src={`${import.meta.env.VITE_BACKEND_URL}${product.image}`}
              alt={product.name}
              className="w-20 h-24 object-cover mr-4 rounded"
            /> */}

            <img
              src={
                product?.image && product.image.trim() !== ""
                  ? product.image.startsWith("http")
                    ? product.image // Cloudinary / external image
                    : `${import.meta.env.VITE_BACKEND_URL}${product.image}` // Local backend/public image
                  : "/images/FutureTour.jpeg" // Fallback image
              }
              alt={product?.name || "Product"}
              className="w-20 h-24 object-cover mr-4 rounded"
            />

            <div>
              <h3 className="text-gray-100 font-bold">{product.name}</h3>
              <p className="text-sm text-gray-300">{product.color}</p>
              <div className="flex items-center mt-2">
                <button
                  onClick={() =>
                    handleAddToCart(
                      product.productId,
                      -1,
                      product.quantity,
                      product.color
                    )
                  }
                  className="border border-white text-white rounded px-2 py- text-xl font-medium"
                >
                  -
                </button>
                <span className="mx-2 text-white">{product.quantity}</span>
                <button
                  onClick={() =>
                    handleAddToCart(
                      product.productId,
                      1,
                      product.quantity,
                      product.color
                    )
                  }
                  className="border border-white text-white rounded px-2 py- text-xl font-medium"
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <div>
            <p className="text-white">${product.price.toLocaleString()}</p>
            <button
              onClick={() =>
                handleRemoveFromCart(product.productId, product.color)
              }
            >
              <MdDeleteForever className="w-6 h-6 mt-7 ml-5 text-red-600" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartContent;
