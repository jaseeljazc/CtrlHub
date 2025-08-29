import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineStarRate } from "react-icons/md";
import axios from "axios";

const NewItems = () => {
  const [newArrivals, setNewArrivals] = useState([]);

  useEffect(() => {
    const fetchNewArrivals = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/products/new-arrivals`
        );
        setNewArrivals(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchNewArrivals();
  }, []);

  return (
    

    <section className=" sm:px-5 md:px-20 my-10 py-5 flex flex-col items-center text-white">
      <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {newArrivals.map((product) => (
          <Link key={product._id} to={`/product/${product._id}`} className="block">
            <div
              
              className="bg-gradient-to-tr from-gray-[#b5b5b5] to-[#1b1b1b]  p-4 rounded-lg"
            >
              {/* Product Image */}
              {/* <div className="w-full h-56 mb-4">
                <img
                  src={
                    product?.images?.[0]?.url &&
                    product.images[0].url.trim() !== ""
                      ? `${import.meta.env.VITE_BACKEND_URL}${
                          product.images[0].url
                        }`
                      : "/images/FutureTour.jpeg"
                  }
                  alt={product?.name || "Product"}
                  className="w-full h-full object-contain rounded-lg transform transition-transform duration-300 hover:scale-110"
                />
              </div> */}



              {/* Product Image */}
<div className="w-full h-56 mb-4">
  <img
    src={
      product?.images?.[0]?.url && product.images[0].url.trim() !== ""
        ? product.images[0].url.startsWith("http")
          ? product.images[0].url // Cloudinary (or any external URL)
          : `${import.meta.env.VITE_BACKEND_URL}${product.images[0].url}` // Local backend image
        : "/images/FutureTour.jpeg" // Fallback image
    }
    alt={product?.images?.[0]?.altText || product?.name || "Product"}
    className="w-full h-full object-contain rounded-lg transform transition-transform duration-300 hover:scale-110"
  />
</div>


              {/* Product Info */}
              <h3 className="text-md mb-2 text-gray-300 truncate-2-lines">
                {product.name}
              </h3>
              <div className="flex gap-1 items-baseline">
                <p className="text-[#16F467] flex items-center  text-lg">
                  {product.rating}
                  <MdOutlineStarRate size={16} />
                </p>
                <p className="flex items-center gap-1 text-xs">
                  ({product.numReviews})
                </p>
              </div>

              <div className="flex gap-3 items-baseline justify-end">
                <p className="text-gray-50 font-medium text-lg  tracking-tighter mt-1">
                  ₹{product.discountPrice}
                </p>
                <p className="text-gray-400 font-medium text-xs  tracking-tighter mt-1 line-through">
                  ₹{product.price}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default NewItems;
