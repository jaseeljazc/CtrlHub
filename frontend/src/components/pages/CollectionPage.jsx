import React, { useEffect, useRef, useState } from "react";
import { FaFilter } from "react-icons/fa";
import FilterSidebar from "./FilterSidebar";
import SortOption from "../products/SortOption";
import NewItems from "../products/NewItems";
import { useParams, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsByFilters } from "../../redux/slices/productSlice";
import ProGrid from "../products/ProGrid";

const CollectionPage = () => {
  const { collection } = useParams();
const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  const {products, loading, error} = useSelector((state) => state.products);
  const queryParams = Object.fromEntries([...searchParams]);

  const sidebarRef = useRef(null);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchProductsByFilters({ collection, ...queryParams }));
  }, [dispatch, collection, searchParams]);

  const toggleSidebar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  const handleClickOutside = (e) => {
    // close sidebar if clicked out sidebar
    // if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
    //   setIsSideBarOpen(false);
    // }

    if (
      isSideBarOpen &&
      sidebarRef.current &&
      !sidebarRef.current.contains(e.target)
    ) {
      setIsSideBarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSideBarOpen]); // Optional dependency


  return (
    <div className=" flex flex-col lg:flex-row text-gray-500">
      {/* mobile filter button */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden border p-2 flex justify-center
    items-center"
      >
        <FaFilter className="mr-2" />
      </button>

      {/* filter sidbar */}
      <div
        ref={sidebarRef}
        className={`
         ${isSideBarOpen ? "translate-x-0 bg-black" : "-translate-x-full"}
        fixed inset-y-0 z-50 w-64   overflow-y-auto
        transition-transform duration-300 lg:static lg:translate-x-0
  `}
      >
        <FilterSidebar />
      </div>

      {/* Main Content */}
      <div className="flex-grow p-4">
        <h2 className="text-2xl uppercase mb-4 text-center text-[#00ff00] mt-5">All Products</h2>

        {/* sort option */}
        <SortOption />

        {/* product grid */}
        <div className="container text-center relative">
          <ProGrid products={products} loading={loading} error={error}/>
          {/* <h2 className="text-3xl font-bold text-white">All Items</h2> */}
        </div>

        {/* <NewItems products={products} /> */}
      </div>
    </div>
  );
};

export default CollectionPage;
