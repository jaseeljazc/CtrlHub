


import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProduct } from "../../redux/slices/adminProductSlice"; // adjust path

const AddProduct = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.adminProducts);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    discountPrice:"",
    countInStock: "",
    sku: "",
    category: "",
    brand: "",
    colors: "",
    collections: "",
    rgb: "",
  });

  const [images, setImages] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [success, setSuccess] = useState(""); // ✅ for success message
  const [localError, setLocalError] = useState(""); // ✅ for local errors

  // handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // handle image upload
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const fd = new FormData();
    fd.append("image", file);

    try {
      setUploading(true);
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/upload`, {
        method: "POST",
        body: fd,
      });

      const data = await res.json();

      if (res.ok) {
        setImages((prev) => [...prev, data.imageUrl]);
      } else {
        setLocalError(data.message || "Image upload failed");
      }
    } catch (err) {
      console.error("Upload error:", err);
      setLocalError("Image upload error");
    } finally {
      setUploading(false);
    }
  };

  // submit product
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess("");
    setLocalError("");

    const productData = {
      ...formData,
      price: Number(formData.price),
      countInStock: Number(formData.countInStock),
      colors: formData.colors
        ? formData.colors.split(",").map((c) => c.trim())
        : [],
      collections: formData.collections
        ? formData.collections.split(",").map((c) => c.trim())
        : [],
      images: images.map((img) => ({ url: img })),
    };

    try {
      await dispatch(createProduct(productData)).unwrap(); // ✅ unwrap catches rejectWithValue
      setSuccess("✅ Product created successfully!");
      setFormData({
        name: "",
        description: "",
        price: "",
        countInStock: "",
        sku: "",
        category: "",
        brand: "",
        colors: "",
        collections: "",
        rgb: "",
      });
      setImages([]);
    } catch (err) {
      setLocalError(err); // will show "SKU already exists..."
    }
  };

  return (
    <div className="flex justify-center items-center py-10">
      <div className="w-full max-w-5xl bg-gray-800 shadow-lg rounded-md p-8 ">
        <h2 className="text-2xl font-bold text-[#00ff00] mb-6 text-center ">
          Add New Product
        </h2>

        {/* ✅ Error message */}
        {(error || localError) && (
          <p className="bg-red-100 text-red-700 px-4 py-2 mb-4 rounded-lg">
            {localError || error}
          </p>
        )}

        {/* ✅ Success message */}
        {success && (
          <p className="bg-green-100 text-green-700 px-4 py-2 mb-4 rounded-lg">
            {success}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {Object.keys(formData).map((field) => (
            <div key={field}>
              <label className="block text-gray-200 font-medium capitalize mb-1">
                {field}
              </label>
              <input
                type="text"
                name={field}
                value={formData[field]}
                onChange={handleChange}
                placeholder={`Enter ${field}`}
                className="w-full border border-gray-300  rounded-lg p-2 focus:ring-2 focus:ring-[#00ff00] text-gray-400 outline-none"
              />
            </div>
          ))}

          {/* Image Upload */}
          <div>
            <label className="block text-gray-200 font-medium mb-1 ">
              Upload Images
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="w-full border border-gray-100 rounded-lg p-2 cursor-pointer text-white"
            />
            {uploading && (
              <p className="text-sm text-gray-500 mt-2">Uploading...</p>
            )}
            <div className="flex flex-wrap gap-3 mt-3">
              {images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt="Uploaded"
                  className="w-20 h-20 object-cover rounded-lg border"
                />
              ))}
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#00ff00] hover:bg-indigo-700 text-black font-bold py-2 px-4 rounded-lg transition duration-200"
          >
            {loading ? "Adding..." : "Add Product"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;






