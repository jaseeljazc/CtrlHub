// import { useEffect, useState } from "react";
// import { MdOutlineStarRate } from "react-icons/md";
// import { toast } from "sonner";
// import ProGrid from "./ProGrid";
// import { useParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   fetchProductsByDetails,
//   fetchSimilarProducts,
// } from "../../redux/slices/productSlice";
// import { addToCart } from "../../redux/slices/cartSlice"; // Make sure you have this import

// const ProductDetails = ({ productId }) => {
//   const { id } = useParams();
//   const dispatch = useDispatch();
//   const { selectedProduct, loading, error, similarProducts } = useSelector(
//     (state) => state.products
//   );
//   const { user, guestId } = useSelector((state) => state.auth);

//   const [mainImage, setMainImage] = useState("");
//   const [selectedColor, setSelectedColor] = useState("");
//   const [quantity, setQuantity] = useState(1);
//   const [isbuttonDisabled, setIsButtonDisabled] = useState(false);

//   const productFetchId = productId || id;

//   useEffect(() => {
//     if (productFetchId) {
//       dispatch(fetchProductsByDetails(productFetchId));
//       dispatch(fetchSimilarProducts({ id: productFetchId }));
//     }
//   }, [dispatch, productFetchId]);

//   useEffect(() => {
//     if (selectedProduct?.images?.length > 0) {
//       const firstImage = selectedProduct.images[0].url;
//       setMainImage(
//         firstImage.startsWith("http")
//           ? firstImage
//           : `${import.meta.env.VITE_BACKEND_URL}${firstImage}`
//       );
//     }
//   }, [selectedProduct]);

//   const handleQuantity = (action) => {
//     if (action === "plus") setQuantity((prev) => prev + 1);
//     if (action === "minus" && quantity > 1) setQuantity((prev) => prev - 1);
//   };

//   const handleAddCart = () => {
//     if (!selectedColor) {
//       toast.error("Please select the color.", {
//         duration: 1000,
//       });
//       return;
//     }
//     setIsButtonDisabled(true);

//     dispatch(
//       addToCart({
//         productId: productFetchId,
//         quantity,
//         color: selectedColor,
//         guestId,
//         userId: user?._id,
//       })
//     )
//       .then(() => {
//         toast.success("Product added to cart!", {
//           duration: 1000,
//         });
//       })
//       .finally(() => {
//         setIsButtonDisabled(false);
//       });
//   };

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>Error: {error}</p>;
//   }

//   return (
//     <div className="">
//       {selectedProduct && (
//         <div className="mt-15 bg-gradient-to-t from-violet-800 to-black max-w-6xl sm:max-w-xl md:max-w-6xl mx-auto bg-whi p-8 rounded-lg">
//           <div className="flex flex-col md:flex-row">
//             {/* left thumbnail */}
//             <div className="hidden md:flex flex-col space-x-4 mr-6 cursor-pointer">
//               {selectedProduct.images.map((image, index) => {
//                 const imgUrl = image.url.startsWith("http")
//                   ? image.url
//                   : `${import.meta.env.VITE_BACKEND_URL}${image.url}`;
//                 return (
//                   <img
//                     key={index}
//                     src={imgUrl}
//                     alt={image.altText || `Thumbnail ${index}`}
//                     className="w-20 h-20 object-cover mb-3 bg-white rounded-lg cursor-pointer border border-white"
//                     onClick={() => setMainImage(imgUrl)}
//                   />
//                 );
//               })}
//             </div>

//             {/* main img */}
//             <div className="md:w-1/2">
//               <div className="mb-4 border bg-gray-200 rounded-lg">
//                 <img
//                   src={mainImage || null}
//                   alt="main product"
//                   className="rounded-lg border border-white w-full object-contain"
//                 />
//               </div>
//             </div>

//             {/* mobile thumbnail */}
//             <div className="md:hidden flex overflow-x-scroll space-x-4 mb-4">
//               {selectedProduct.images.map((image, index) => {
//                 const imgUrl = image.url.startsWith("http")
//                   ? image.url
//                   : `${import.meta.env.VITE_BACKEND_URL}${image.url}`;
//                 return (
//                   <img
//                     key={index}
//                     src={imgUrl}
//                     alt={image.altText || `Thumbnail ${index}`}
//                     className="w-20 h-20 object-cover mb-2 bg-white rounded-lg cursor-pointer border"
//                     onClick={() => setMainImage(imgUrl)}
//                   />
//                 );
//               })}
//             </div>

//             {/* right section */}
//             <div className="md:w-1/2 md:ml-10">
//               <h1 className="text-2xl md:text-3xl font-semibold mb-2 text-white">
//                 {selectedProduct.name}
//               </h1>

//               <div className="price flex space-x-2 items-center">
//                 <p className="text-3xl mb-2 text-white">
//                   ₹{selectedProduct.discountPrice || selectedProduct.price}
//                 </p>
//                 {selectedProduct.discountPrice && (
//                   <p className="text-gray-400 mb-1 line-through">
//                     ₹{selectedProduct.price}
//                   </p>
//                 )}
//               </div>

//               <p className="text-[#16F467] flex item-center mb-2">
//                 <MdOutlineStarRate size={"20px"} />
//                 <span>{selectedProduct.rating}</span>
//               </p>

//               <p className="text-gray-400 mb-4">
//                 {selectedProduct.description}
//               </p>

//               {/* Color selection */}
//               <div className="mb-4">
//                 <p className="text-gray-500">Color:</p>
//                 <div className="flex gap-2 mt-2">
//                   {selectedProduct.colors.map((color) => (
//                     <button
//                       key={color}
//                       onClick={() => setSelectedColor(color)}
//                       className={`w-8 h-8 rounded-full border-2 ${
//                         selectedColor === color
//                           ? "border-gray-50"
//                           : "border-gray-700"
//                       }`}
//                       style={{
//                         backgroundColor: color.toLowerCase(),
//                         filter: "brightness(0.5)",
//                       }}
//                     ></button>
//                   ))}
//                 </div>
//               </div>

//               {/* Quantity */}
//               <div className="mb-6">
//                 <p className="text-gray-500">Quantity</p>
//                 <div className="flex items-center space-x-4 mt-2">
//                   <button
//                     onClick={() => handleQuantity("minus")}
//                     className="px-2 py-1 rounded-sm text-white bg-black border border-black"
//                   >
//                     -
//                   </button>
//                   <span className="text-lg text-white">{quantity}</span>
//                   <button
//                     onClick={() => handleQuantity("plus")}
//                     className="px-2 py-1 rounded-sm text-white bg-black border border-black"
//                   >
//                     +
//                   </button>
//                 </div>
//               </div>

//               {/* Add to cart */}
//               <button
//                 className={`bg-black text-white border-black py-2 px-6 hover:bg-transparent border-2 hover:border-[#00ff00]  hover:text-[#00ff00] rounded w-full mb-4 font-bold transform transition-color ${
//                   isbuttonDisabled
//                     ? "cursor-not-allowed opacity-50"
//                     : "hover:bg-gray-900"
//                 }`}
//                 onClick={handleAddCart}
//                 disabled={isbuttonDisabled}
//               >
//                 {isbuttonDisabled ? "Adding" : "ADD TO CART"}
//               </button>

//               {/* More details */}
//               <div className="mt-10 text-gray-300">
//                 <h3 className="text-xl font-bold mb-4 text-black">
//                   More Details
//                 </h3>
//                 <table className="w-full text-left text-sm text-gray-500">
//                   <tbody>
//                     <tr>
//                       <td className="py-1 text-black font-bold">Brand:</td>
//                       <td className="py-1 text-black ">
//                         {selectedProduct.brand}
//                       </td>
//                     </tr>
//                     <tr>
//                       <td className="py-1 text-black font-bold">Type:</td>
//                       <td className="py-1 text-black ">Controller</td>
//                     </tr>
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>

//           {/* Similar products */}
//         </div>
//       )}
//      <div className="mt-20">
//   {similarProducts && similarProducts.length > 0 && (
//     <>
//       <h2 className="text-3xl text-center font-medium mb-4 text-white">
//         You may also like
//       </h2>
//       <ProGrid products={similarProducts} loading={loading} error={error} />
//     </>
//   )}
// </div>

//     </div>
//   );
// };

// export default ProductDetails;
import { useEffect, useState } from "react";
import { MdOutlineStarRate, MdFavorite, MdFavoriteBorder, MdShare, MdInfo, MdLocalShipping, MdSecurity, MdVerified } from "react-icons/md";
import { toast } from "sonner";
import ProGrid from "./ProGrid";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProductsByDetails,
  fetchSimilarProducts,
} from "../../redux/slices/productSlice";
import { addToCart } from "../../redux/slices/cartSlice";

const ProductDetails = ({ productId }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { selectedProduct, loading, error, similarProducts } = useSelector(
    (state) => state.products
  );
  const { user, guestId } = useSelector((state) => state.auth);

  const [mainImage, setMainImage] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isbuttonDisabled, setIsButtonDisabled] = useState(false);
  const [activeTab, setActiveTab] = useState("description");
  const [isFavorite, setIsFavorite] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const productFetchId = productId || id;

  useEffect(() => {
    if (productFetchId) {
      dispatch(fetchProductsByDetails(productFetchId));
      dispatch(fetchSimilarProducts({ id: productFetchId }));
    }
  }, [dispatch, productFetchId]);

  useEffect(() => {
    if (selectedProduct?.images?.length > 0) {
      const firstImage = selectedProduct.images[0].url;
      setMainImage(
        firstImage.startsWith("http")
          ? firstImage
          : `${import.meta.env.VITE_BACKEND_URL}${firstImage}`
      );
    }
  }, [selectedProduct]);

  const handleQuantity = (action) => {
    if (action === "plus") setQuantity((prev) => prev + 1);
    if (action === "minus" && quantity > 1) setQuantity((prev) => prev - 1);
  };

  const handleAddCart = () => {
    if (!selectedColor) {
      toast.error("Please select the color.", {
        duration: 1000,
      });
      return;
    }
    setIsButtonDisabled(true);

    dispatch(
      addToCart({
        productId: productFetchId,
        quantity,
        color: selectedColor,
        guestId,
        userId: user?._id,
      })
    )
      .then(() => {
        toast.success("Product added to cart!", {
          duration: 1000,
        });
      })
      .finally(() => {
        setIsButtonDisabled(false);
      });
  };

  const calculateDiscount = () => {
    if (selectedProduct?.discountPrice && selectedProduct?.price) {
      return Math.round(((selectedProduct.price - selectedProduct.discountPrice) / selectedProduct.price) * 100);
    }
    return 0;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="flex flex-col items-center space-y-6">
          <div className="relative">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-gray-800 border-t-white"></div>
            <div className="absolute inset-0 rounded-full h-16 w-16 border-4 border-transparent border-t-red-500 animate-spin" style={{animationDelay: '0.15s'}}></div>
          </div>
          <div className="text-center">
            <h3 className="text-white text-xl font-semibold">Loading Product</h3>
            <p className="text-gray-400">Please wait while we fetch the details...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="bg-red-950/50 backdrop-blur-lg border border-red-800/50 rounded-2xl p-8 text-center max-w-md">
          <div className="w-16 h-16 bg-red-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-red-400 text-2xl">⚠</span>
          </div>
          <h2 className="text-2xl font-bold text-red-300 mb-2">Something went wrong</h2>
          <p className="text-red-200">Error: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-blac">
      {selectedProduct && (
        <>
      

          {/* Main Product Section */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="bg-gradient-to-br from-gray-700/50 to-black backdrop-blur-xl border border-gray-700/30 rounded-3xl shadow-2xl shadow-black/50 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-8 lg:p-12">
                
                {/* Enhanced Dark Image Section */}
                <div className="space-y-6">
                  {/* Main Image Container */}
                  <div className="relative group">
                    <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-gray-600/30 shadow-2xl shadow-black/50">
                      <img
                        src={mainImage || ""}
                        alt="main product"
                        className={`w-full h-full object-cover transition-all duration-500 ${
                          isImageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                        } group-hover:scale-110`}
                        onLoad={() => setIsImageLoaded(true)}
                      />
                      
                      {/* Dark Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    
                

                    
                  </div>

                  {/* Enhanced Dark Thumbnail Images */}
                  <div className="flex space-x-4 overflow-x-auto pb-2 scrollbar-thin scrollbar-track-gray-800 scrollbar-thumb-gray-600">
                    {selectedProduct.images.map((image, index) => {
                      const imgUrl = image.url.startsWith("http")
                        ? image.url
                        : `${import.meta.env.VITE_BACKEND_URL}${image.url}`;
                      return (
                        <button
                          key={index}
                          onClick={() => setMainImage(imgUrl)}
                          className={`flex-shrink-0 w-24 h-24 rounded-xl overflow-hidden border-2 transition-all duration-300 hover:scale-105 ${
                            mainImage === imgUrl 
                              ? 'border-white shadow-lg shadow-white/25' 
                              : 'border-gray-600/50 hover:border-gray-500'
                          }`}
                        >
                          <img
                            src={imgUrl}
                            alt={image.altText || `Thumbnail ${index}`}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Enhanced Dark Product Info Section */}
                <div className="space-y-8">
                  {/* Product Title & Rating */}
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-l from-white to-[#00ff00] bg-clip-text text-transparent leading-tight">
                        {selectedProduct.name}
                      </h1>
                    </div>
                    
                    <div className="flex items-center space-x-6">
                      <div className="flex items-center space-x-2 bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-700/50">
                        <MdOutlineStarRate className="w-5 h-5 text-[#00ff00]" />
                        <span className="font-bold text-white">{selectedProduct.rating}</span>
                        <span className="text-gray-400 text-sm">(1.2k reviews)</span>
                      </div>
                      <div className="flex items-center space-x-2 bg-green-900/50 backdrop-blur-sm px-4 py-2 rounded-full border border-green-700/50">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-green-400 font-semibold text-sm">In Stock</span>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Dark Price Section */}
                  <div className="space-y-2">
                    <div className="flex items-baseline space-x-4">
                      <span className="text-4xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                        ₹{selectedProduct.discountPrice || selectedProduct.price}
                      </span>
                      {selectedProduct.discountPrice && (
                        <span className="text-2xl text-gray-500 line-through opacity-75">
                          ₹{selectedProduct.price}
                        </span>
                      )}
                    </div>
                    {selectedProduct.discountPrice && (
                      <p className="text-[#00ff00] text-sm font-medium">
                        You save ₹{selectedProduct.price - selectedProduct.discountPrice}
                      </p>
                    )}
                  </div>

                  {/* Enhanced Dark Color Selection */}
                  <div className="space-y-4">
                    <label className="block text-lg font-semibold text-white">
                      Color: {selectedColor && <span className="text-gray-300 capitalize ml-2">{selectedColor}</span>}
                    </label>
                    <div className="flex space-x-4">
                      {selectedProduct.colors.map((color) => (
                        <button
                          key={color}
                          onClick={() => setSelectedColor(color)}
                          className={`relative w-10 h-10 rounded-full border-4 transition-all duration-300 hover:scale-110 ${
                            selectedColor === color
                              ? "border-violet-800 scale-110 shadow-lg shadow-violet-700/30"
                              : "border-gray-600 hover:border-gray-500"
                          }`}
                          style={{
                            backgroundColor: color.toLowerCase(),
                          }}
                          title={color}
                        >
                          {selectedColor === color && (
                            <div className="absolute inset-0 rounded-full border-2 border-purple-500 animate-ping"></div>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Enhanced Dark Quantity Selection */}
                  <div className="space-y-4">
                    <label className="block text-lg font-semibold text-white">Quantity</label>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center bg-gray-900/80 backdrop-blur-lg border border-gray-700/50 rounded-2xl overflow-hidden">
                        <button
                          onClick={() => handleQuantity("minus")}
                          className="px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800/80 transition-all duration-300 disabled:opacity-50"
                          disabled={quantity <= 1}
                        >
                          <span className="text-xl font-bold">−</span>
                        </button>
                        <div className="px-6 py-2 border-x border-gray-700/50 bg-gray-800/50">
                          <span className="text-xl font-bold text-white">{quantity}</span>
                        </div>
                        <button
                          onClick={() => handleQuantity("plus")}
                          className="px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800/80 transition-all duration-300"
                        >
                          <span className="text-xl font-bold">+</span>
                        </button>
                      </div>
                      <div className="text-right">
                        <p className="text-gray-400 text-sm">Total Price</p>
                        <p className="text-2xl font-bold text-white">
                          ₹{quantity * (selectedProduct.discountPrice || selectedProduct.price)}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Dark Action Buttons */}
                  <div className="space-y-4">
                    <button
                      className={`w-full py-4 px-8 rounded-2xl font-bold text-lg transition-all duration-300 transform ${
                        isbuttonDisabled
                          ? "bg-gray-700/50 text-gray-500 cursor-not-allowed"
                          : "bg-gradient-to-r from-gray-800 to-black border border-gray-600 hover:border-violet-700 text-white shadow-2xl hover:shadow-violet-700/50 hover:-translate-y-1 hover:scale-[1.02]"
                      }`}
                      onClick={handleAddCart}
                      disabled={isbuttonDisabled}
                    >
                      {isbuttonDisabled ? (
                        <span className="flex items-center justify-center space-x-2">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                          <span>Adding to Cart...</span>
                        </span>
                      ) : (
                        <span className="flex items-center justify-center space-x-2">
                          <span>🛒</span>
                          <span>Add to Cart</span>
                        </span>
                      )}
                    </button>
                    
                 
                  </div>

                </div>
              </div>

              {/* Enhanced Dark Product Details Tabs */}
              <div className="border-t border-gray-700/50">
                <div className="flex space-x-1 px-8 lg:px-12 py-6">
                  {[
                    { id: 'description', label: 'Description',  },
                    { id: 'specifications', label: 'Specifications',},
                    { id: 'reviews', label: 'Reviews', }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                        activeTab === tab.id
                          ? 'bg-gray-800 text-white border border-gray-600 shadow-lg'
                          : 'text-gray-400 hover:text-white hover:bg-gray-900/50'
                      }`}
                    >
                      <span>{tab.icon}</span>
                      <span>{tab.label}</span>
                    </button>
                  ))}
                </div>

                <div className="px-8 lg:px-12 pb-12">
                  {activeTab === 'description' && (
                    <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30">
                      <h3 className="text-xl font-bold text-white mb-4 flex items-center space-x-2">
                        <span>Product Description</span>
                      </h3>
                      <p className="text-gray-300 leading-relaxed text-lg">{selectedProduct.description}</p>
                    </div>
                  )}
                  
                  {activeTab === 'specifications' && (
                    <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30">
                      <h3 className="text-xl font-bold text-white mb-6 flex items-center space-x-2">
                        <span>Technical Specifications</span>
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                          {[
                            { label: 'Brand', value: selectedProduct.brand },
                            { label: 'Type', value: 'Controller' },
                            { label: 'Available Colors', value: selectedProduct.colors.join(', ') },
                            { label: 'Rating', value: `${selectedProduct.rating}/5 Stars` }
                          ].map((spec, index) => (
                            <div key={index} className="flex justify-between items-center py-3 border-b border-gray-700/50">
                              <span className="font-semibold text-gray-400">{spec.label}:</span>
                              <span className="text-white font-medium">{spec.value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {activeTab === 'reviews' && (
                    <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30">
                      <h3 className="text-xl font-bold text-white mb-6 flex items-center space-x-2">
                        <span>Customer Reviews</span>
                      </h3>
                      <div className="text-center py-12">
                        <div className="w-16 h-16 bg-gray-800/50 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-2xl">🌟</span>
                        </div>
                        <p className="text-gray-300 text-lg">No reviews yet</p>
                        <p className="text-gray-400 mt-2">Be the first to review this amazing product!</p>
                        <button className="mt-6 px-6 py-3 bg-gradient-to-r from-gray-800 to-black border border-gray-600 text-white rounded-xl font-semibold hover:border-white hover:shadow-lg transition-all duration-300">
                          Write a Review
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Dark Similar Products Section */}
          {similarProducts && similarProducts.length > 0 && (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
                  You might also like
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-white to-gray-400 mx-auto rounded-full"></div>
                <p className="text-gray-400 mt-4 text-lg">Discover more amazing products in our collection</p>
              </div>
              <ProGrid products={similarProducts} loading={loading} error={error} />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ProductDetails;