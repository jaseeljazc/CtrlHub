import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineStarRate } from "react-icons/md";

const ProGrid = ({ products, loading, error }) => {
  if (loading) {
    return <p>Loading</p>;
  }

  if (error) {
    return <p>Error:{error}</p>;
  }
  return (
<div className="flex flex-wrap justify-center gap-4">
      {products.map((product, index) => {
        console.log("Product image URL:", product?.images?.[0]?.url);

        return (
          <Link key={index} to={`/product/${product._id}`} className="block">
            {/* <div className=" w-75 bg-gradient-to-tr h-[390px] from-gray-[#b5b5b5] to-[#1b1b1b] p-4 rounded-lg border sm:border-transparent border-transparent border-b-gray-800"> */}
              <div className="w-75 h-[390px]  bg-gradient-to-bl from-gray-700/30 to-black/50 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl shadow-black/50 p-6 overflow-hidden transition-all duration-300 hover:bg-gradient-to-br hover:from-black hover:via-violet-400/5 hover:to-black/25 hover:border-violet/20 hover:shadow-gray-700/50 hover:-translate-y-2 hover:scale-[1.02]">              {" "}
{/* </div> */}
         

              <div className="w-full h-56 mb-4">
                <img
                  src={
                    product?.images?.[0]?.url &&
                    product.images[0].url.trim() !== ""
                      ? product.images[0].url.startsWith("http")
                        ? product.images[0].url // Cloudinary / external image
                        : `${import.meta.env.VITE_BACKEND_URL}${
                            product.images[0].url
                          }` // Local backend image
                      : "/images/FutureTour.jpeg" // Fallback image
                  }
                  alt={
                    product?.images?.[0]?.altText || product?.name || "Product"
                  }
                  className="w-full h-full object-contain rounded-lg transform transition-transform duration-300 hover:scale-110"
                />
              </div>

              {/* Product Info */}
              <h3 className="text-md mb-2 text-gray-300 truncate-2-lines text-left">
                {product.name}
              </h3>

              {/* Rating + Reviews */}
              <div className="flex gap-1 items-baseline">
                <p className="text-[#16F467] flex items-center text-lg">
                  {product.rating}
                  <MdOutlineStarRate size={16} />
                </p>
                <p className="flex items-center gap-1 text-xs">
                  ({product.numReviews})
                </p>
              </div>

              {/* Price Section */}
              <div className="flex gap-3 items-baseline justify-end">
                <p className="text-gray-50 font-medium text-lg tracking-tighter mt-1">
                  ₹{product.discountPrice}
                </p>
                <p className="text-gray-400 font-medium text-xs tracking-tighter mt-1 line-through">
                  ₹{product.price}
                </p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ProGrid;
