import React, { useState } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  fetchProductsByFilters,
  setFilters,
} from "../../redux/slices/productSlice";

const Seachbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setFilters({ search: searchTerm }));
    dispatch(fetchProductsByFilters({ searchTerm }));
    navigate(`/collections/all?search=${searchTerm}`);
    console.log("Search term :", searchTerm);
  };

  return (
    <>
      <div>
        <form
          onSubmit={handleSearch}
          className="relative flex items-center justify-center w-full "
        >
          <div className="relative  w-3/4 ml-4">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-gray-300 h-70px px-4 border-2 border-lime-500 py-2 pr-12 text-black rounded-[10px] focus:outline-none
                w-full placeholder:text-black-700"
            />
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2
            text-gray-600 hover:text-gray-800   "
            >
              <HiMagnifyingGlass className="h-6 w-6" />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Seachbar;
