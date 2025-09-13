


import { useEffect, useState } from "react";
import { MdOutlineStarRate } from "react-icons/md";
import { toast } from "sonner";
import ProGrid from "./ProGrid";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProductsByDetails,
  fetchSimilarProducts,
} from "../../redux/slices/productSlice";
import { addToCart } from "../../redux/slices/cartSlice"; // Make sure you have this import

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

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="">
      {selectedProduct && (
        <div className="bg-gradient-to-t from-violet-800 to-black max-w-6xl sm:max-w-xl md:max-w-6xl mx-auto bg-whi p-8 rounded-lg">
          <div className="flex flex-col md:flex-row">
            {/* left thumbnail */}
            <div className="hidden md:flex flex-col space-x-4 mr-6 cursor-pointer">
              {selectedProduct.images.map((image, index) => {
                const imgUrl = image.url.startsWith("http")
                  ? image.url
                  : `${import.meta.env.VITE_BACKEND_URL}${image.url}`;
                return (
                  <img
                    key={index}
                    src={imgUrl}
                    alt={image.altText || `Thumbnail ${index}`}
                    className="w-20 h-20 object-cover mb-3 bg-white rounded-lg cursor-pointer border border-white"
                    onClick={() => setMainImage(imgUrl)}
                  />
                );
              })}
            </div>

            {/* main img */}
            <div className="md:w-1/2">
              <div className="mb-4 border bg-white rounded-lg">
                <img
                  src={mainImage || null}
                  alt="main product"
                  className="rounded-lg border border-white w-full object-contain"
                />
              </div>
            </div>

            {/* mobile thumbnail */}
            <div className="md:hidden flex overflow-x-scroll space-x-4 mb-4">
              {selectedProduct.images.map((image, index) => {
                const imgUrl = image.url.startsWith("http")
                  ? image.url
                  : `${import.meta.env.VITE_BACKEND_URL}${image.url}`;
                return (
                  <img
                    key={index}
                    src={imgUrl}
                    alt={image.altText || `Thumbnail ${index}`}
                    className="w-20 h-20 object-cover mb-2 bg-white rounded-lg cursor-pointer border"
                    onClick={() => setMainImage(imgUrl)}
                  />
                );
              })}
            </div>

            {/* right section */}
            <div className="md:w-1/2 md:ml-10">
              <h1 className="text-2xl md:text-3xl font-semibold mb-2 text-white">
                {selectedProduct.name}
              </h1>

              <div className="price flex space-x-2 items-center">
                <p className="text-3xl mb-2 text-white">
                  ₹{selectedProduct.discountPrice || selectedProduct.price}
                </p>
                {selectedProduct.discountPrice && (
                  <p className="text-gray-400 mb-1 line-through">
                    ₹{selectedProduct.price}
                  </p>
                )}
              </div>

              <p className="text-[#16F467] flex item-center mb-2">
                <MdOutlineStarRate size={"20px"} />
                <span>{selectedProduct.rating}</span>
              </p>

              <p className="text-gray-400 mb-4">
                {selectedProduct.description}
              </p>

              {/* Color selection */}
              <div className="mb-4">
                <p className="text-gray-500">Color:</p>
                <div className="flex gap-2 mt-2">
                  {selectedProduct.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`w-8 h-8 rounded-full border-2 ${
                        selectedColor === color
                          ? "border-gray-50"
                          : "border-gray-700"
                      }`}
                      style={{
                        backgroundColor: color.toLowerCase(),
                        filter: "brightness(0.5)",
                      }}
                    ></button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-6">
                <p className="text-gray-500">Quantity</p>
                <div className="flex items-center space-x-4 mt-2">
                  <button
                    onClick={() => handleQuantity("minus")}
                    className="px-2 py-1 rounded-sm text-white bg-black border border-white"
                  >
                    -
                  </button>
                  <span className="text-lg text-white">{quantity}</span>
                  <button
                    onClick={() => handleQuantity("plus")}
                    className="px-2 py-1 rounded-sm text-white bg-black border border-white"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add to cart */}
              <button
                className={`bg-gray-50 py-2 px-6 hover:bg-transparent hover:border-lime-600 border hover:text-lime-600 rounded w-full mb-4 font-bold transform transition-color ${
                  isbuttonDisabled
                    ? "cursor-not-allowed opacity-50"
                    : "hover:bg-gray-900"
                }`}
                onClick={handleAddCart}
                disabled={isbuttonDisabled}
              >
                {isbuttonDisabled ? "Adding" : "ADD TO CART"}
              </button>

              {/* More details */}
              <div className="mt-10 text-gray-300">
                <h3 className="text-xl font-bold mb-4 text-black">More Details</h3>
                <table className="w-full text-left text-sm text-gray-500">
                  <tbody>
                    <tr>
                      <td className="py-1 text-black font-bold">Brand:</td>
                      <td className="py-1 text-black ">{selectedProduct.brand}</td>
                    </tr>
                    <tr>
                      <td className="py-1 text-black font-bold">Type:</td>
                      <td className="py-1 text-black ">Controller</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Similar products */}
          {/* <div className="mt-20">
            <h2 className="text-3xl text-center font-medium mb-4 text-white">
              You may also like
            </h2>
            <ProGrid
              products={similarProducts}
              loading={loading}
              error={error}
            />
          </div> */}
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
