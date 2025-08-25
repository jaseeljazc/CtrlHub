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
    // <section className="px-4 my-10 py-5 flex flex-col items-center text-white">
    //   <div className="container flex flex-wrap justify-evenly xl:px-15 gap-5 lg:-[125px]">
    //     {newArrivals.map((product) => (
    //       <div
    //         key={product._id}
    //         className="mb-6 pb-5 mt-10 w-full sm:w-[48%] md:w-[48%] lg:w-[40%] xl:w-[30%] overflow-hidden"
    //       >
    //         <div
    //           className="md:w-full w-200px mx-10 sm:mx-auto
    //         bg-gradient-to-tr from-gray-[#b5b5b5] to-[#1b1b1b]
    //          h-[350px] rounded-lg overflow-hidden p-3"
    //         >
    //           <img
    //             // src={product.images[0]?.src}
    //             src={`${import.meta.env.VITE_BACKEND_URL}${product.images[0]?.url}`}

    //             alt={product.images[0]?.altText || product.name}
    //             className="w-full h-full object-contain rounded-2xl transform transition-transform duration-300 hover:scale-110"
    //           />

    //         </div>

    //         <div className="text-white px-10 md:px-2 py-5 h-[150px] text-xl break-words">
    //           <Link to={`/product/${product._id}`} className="block">
    //             <h2 className="truncate-2-lines text-gray-300">
    //               {product.name}
    //             </h2>
    //             <p className="text-[#16F467] flex items-center pt-3">
    //               {product.rating}
    //               <MdOutlineStarRate />
    //             </p>
    //             <p className="mt-1 flex justify-end">₹{product.price}</p>
    //           </Link>
    //           <div className="border-b pb-5 border-[#3F3E3E]"></div>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </section>

    <section className=" sm:px-5 md:px-20 my-10 py-5 flex flex-col items-center text-white">
      <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {newArrivals.map((product) => (
          <Link key={product._id} to={`/product/${product._id}`} className="block">
            <div
              
              className="bg-gradient-to-tr from-gray-[#b5b5b5] to-[#1b1b1b]  p-4 rounded-lg"
            >
              {/* Product Image */}
              <div className="w-full h-56 mb-4">
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
