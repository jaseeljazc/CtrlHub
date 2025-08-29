import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import CartContent from "../cart/CartContent";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Cartdrawer = ({ drawerOpen, toggleCartDrawer }) => {
  const navigate = useNavigate();
  const { user, guestId } = useSelector((state) => state.auth);
  const { cart } = useSelector((state) => state.cart);
  const userId = user ? user._id : null;

  const handleCheckout = () => {
    toggleCartDrawer();
    if (!user) {
      navigate("/login?redirect=checkout");
    } else {
      navigate("/checkout");
    }
  };

  return (
    <div
      className={`fixed top-0 right-0 md:w-[25rem] w-3/4 sm:w-1/2 h-full bg-black shadow-lg transform
    transition-transform duration-300 flex flex-col z-50 
    ${drawerOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      {/* close button  */}
      <div className="flex justify-end p-4">
        <button onClick={toggleCartDrawer}>
          <IoMdClose className="h-6 w-6 text-gray-200" />
        </button>
      </div>
      {/* scollable cart content */}
      <div className="flex-grow p-4 overflow-y-auto ">
        <h2 className="text-xl text-white font-semibold mb-4">Your cart</h2>
        {/* cart component  */}
        {cart && cart?.products?.length > 0 ? (
          <CartContent cart={cart} userId={userId} guestId={guestId} />
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>

      {/* fixed checkout button */}
      <div className="p-4 text-gray-950 sticky bottom-0">
        {cart && cart?.products?.length > 0 && (
          <>
          <button
          onClick={handleCheckout}
          className="w-full bg-white text-black  py-3 rounded-lg font-bold
        hover:bg-black hover:text-white hover:border-white border transition"
        >
          Checkout
        </button>
        <p className="text-gray-500 text-sm tracking-tighter mb-2 text-center">
        Shipping, taxes, and discount codes calculated at checkout.
      </p>
          
          </>
        )}
        
      </div>
      
    </div>
  );
};

export default Cartdrawer;
