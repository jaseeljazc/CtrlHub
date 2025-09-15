


import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const FilterSidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    category: "",
    color: "",
    rgb: "",
    brand: [],
    minPrice: "",
    maxPrice: "",
  });

  const [priceRange, setPriceRange] = useState([0, 10000]);

  const categories = ["Gaming Mouse", "Gaming Keyboard"];
  const colors = ["Red", "Blue", "Green", "Yellow", "Gray", "White", "Pink", "Beige", "Black"];
  const rgb = ["No", "Yes"];
  const brands = ["zebronics", "RedGear", "Evofox", "Sony"];

  useEffect(() => {
    const params = Object.fromEntries([...searchParams]);

    setFilters({
      category: params.category || "",
      color: params.color || "",
      rgb: params.rgb || "",
      brand: params.brand ? params.brand.split(",") : [],
      minPrice: params.minPrice || 0,
      maxPrice: params.maxPrice || 10000,
    });

    setPriceRange([0, params.maxPrice || 10000]);
  }, [searchParams]);

  const handleFilterChange = (e) => {
    const { name, value, checked, type } = e.target;
    let newFilters = { ...filters };

    if (type === "checkbox") {
      if (checked) {
        newFilters[name] = [...(newFilters[name] || []), value];
      } else {
        newFilters[name] = newFilters[name].filter((item) => item !== value);
      }
    } else {
      // If "All" is selected, reset that filter
      newFilters[name] = value === "All" ? "" : value;
    }

    setFilters(newFilters);
    updateURLParams(newFilters);
  };

  const updateURLParams = (newFilters) => {
    const params = new URLSearchParams();

    Object.keys(newFilters).forEach((key) => {
      if (Array.isArray(newFilters[key]) && newFilters[key].length > 0) {
        params.append(key, newFilters[key].join(","));
      } else if (newFilters[key]) {
        params.append(key, newFilters[key]);
      }
    });

    setSearchParams(params);
    navigate(`?${params.toString()}`);
  };

  const handlePriceChange = (e) => {
    const newPrice = e.target.value;
    setPriceRange([100, newPrice]);
    const newFilters = { ...filters, minPrice: 100, maxPrice: newPrice };
    setFilters(newFilters);
    updateURLParams(newFilters);
  };

  return (
    <div className="p-4 bg-gray-950">
      <h3 className="text-xl font-medium text-gray-200 mb-4">Filter</h3>

      {/* Category filter */}
      <div className="mb-6">
        <label className="block text-gray-300 font-medium mb-2">Category</label>
        <div className="flex items-center mb-1">
          <input
            type="radio"
            name="category"
            value="All"
            checked={filters.category === ""}
            onChange={handleFilterChange}
            className="mr-2 h-4 w-4 text-blue-200 focus:ring-blue-300 border-gray-500"
          />
          <span className="text-gray-400">All</span>
        </div>
        {categories.map((category) => (
          <div key={category} className="flex items-center mb-1">
            <input
              type="radio"
              name="category"
              value={category}
              checked={filters.category === category}
              onChange={handleFilterChange}
              className="mr-2 h-4 w-4 text-blue-200 focus:ring-blue-300 border-gray-500"
            />
            <span className="text-gray-400">{category}</span>
          </div>
        ))}
      </div>

      {/* RGB filter */}
      <div className="mb-6">
        <label className="block text-gray-100 font-medium mb-2">RGB</label>
        <div className="flex items-center mb-1">
          <input
            type="radio"
            name="rgb"
            value="All"
            checked={filters.rgb === ""}
            onChange={handleFilterChange}
            className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-500"
          />
          <span className="text-gray-400">All</span>
        </div>
        {rgb.map((option) => (
          <div key={option} className="flex items-center mb-1">
            <input
              type="radio"
              name="rgb"
              value={option}
              checked={filters.rgb === option}
              onChange={handleFilterChange}
              className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-500"
            />
            <span className="text-gray-400">{option}</span>
          </div>
        ))}
      </div>

      {/* Color filter */}
      <div className="mb-6">
        <label className="block text-gray-100 font-medium">Color</label>
        <div className="flex flex-wrap gap-2">
          <button
            name="color"
            value="All"
            onClick={(e) =>
              handleFilterChange({ target: { name: "color", value: "All", type: "radio" } })
            }
            className={`px-3 py-1 rounded border ${
              filters.color === "" ? "ring-2 ring-indigo-600" : ""
            }`}
          >
            All
          </button>
          {colors.map((color) => (
            <button
              key={color}
              name="color"
              value={color}
              onClick={(e) =>
                handleFilterChange({ target: { name: "color", value: color, type: "radio" } })
              }
              className={`w-8 h-8 rounded-full border border-gray-300 cursor-pointer transition hover:scale-105 ${
                filters.color === color ? "ring-2 ring-indigo-600" : ""
              }`}
              style={{ backgroundColor: color.toLowerCase() }}
            ></button>
          ))}
        </div>
      </div>

      {/* Brand filter */}
      <div className="mb-6">
        <label className="block text-gray-300 font-medium mb-2">Brand</label>
        <div className="flex items-center mb-1">
          <input
            type="checkbox"
            name="brand"
            value="All"
            checked={filters.brand.length === 0}
            onChange={() => {
              setFilters({ ...filters, brand: [] });
              updateURLParams({ ...filters, brand: [] });
            }}
            className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border border-gray-300"
          />
          <span className="text-gray-400">All</span>
        </div>
        {brands.map((brand) => (
          <div key={brand} className="flex items-center mb-1">
            <input
              type="checkbox"
              name="brand"
              value={brand}
              checked={filters.brand.includes(brand)}
              onChange={handleFilterChange}
              className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border border-gray-300"
            />
            <span className="text-gray-400">{brand}</span>
          </div>
        ))}
      </div>

      {/* Price Range */}
      <div className="mb-8">
        <label className="block text-gray-100 font-medium mb-2">Price Range</label>
        <input
          type="range"
          name="priceRange"
          min={100}
          max={10000}
          value={priceRange[1]}
          onChange={handlePriceChange}
          className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
        />
        <div className="flex justify-between text-gray-400 mt-2">
          <span>₹100</span>
          <span>₹{priceRange[1]}</span>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;

