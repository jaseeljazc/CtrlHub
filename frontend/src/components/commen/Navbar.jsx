import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  HiOutlineUser,
  HiOutlineShoppingBag,
  HiBars3BottomRight,
} from "react-icons/hi2";
import { RiMenuLine } from "react-icons/ri";

import { IoMdCart } from "react-icons/io";
import Seachbar from "./Seachbar";
import Cartdrawer from "../layout/Cartdrawer";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [navDrawer, setNavDrawer] = useState(false);
  const { cart } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);
  const cartItemCount = cart?.products?.reduce(
    (total, product) => total + product.quantity,
    0 || 0
  );

  const toggleNavDrawer = () => {
    setNavDrawer(!navDrawer);
  };

  const toggleCartDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  return (
    <>
      {/* <div className="pt-4 md:block hidden"> <Seachbar /></div> */}
      <nav
        className=" overflow-x-hidden container mx-auto flex items-center justify-around
    md:pt-2 md:pb-3 px-1"
      >
        <div
          className="
         md:pt-0 pt-2 sm:pt-4 md:pl-5 md:mt-5"
        >
          <Link
            to="/"
            className="text-xl md:text-2xl animate-gradient-tex  font-keyboar rubik-glitch text-[#00ff00]"
          >
          {/* <img src={logo} alt="" className="bg-white" /> */}
          CTRLHub
          </Link>
        </div>

        <div className="pt-4 hidden sm:block sm:pb-2 md:pb-0">
          {" "}
          <Seachbar />
        </div>

        {/* navlinks */}

        <div className="hidden md:flex space-x-10 ml-5 mt-5">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `relative inline-block after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-green-500 after:transition-all after:duration-300 
      ${
        isActive
          ? "after:w-full text-gray-200"
          : "after:w-0 text-white-700 hover:text-gray hover:after:w-full"
      } 
       font-medium `
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/collections/all"
            className={({ isActive }) =>
              `relative inline-block after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-green-500 after:transition-all after:duration-300 
      ${
        isActive
          ? "after:w-full text-gray-200"
          : "after:w-0 text-white-700 hover:text-gray hover:after:w-full"
      } 
       font-medium `
            }
          >
            Category
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `relative inline-block after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-green-500 after:transition-all after:duration-300 
      ${
        isActive
          ? "after:w-full text-gray-200"
          : "after:w-0 text-white-700 hover:text-gray hover:after:w-full"
      } 
       font-medium `
            }
          >
            About
          </NavLink>

          <NavLink
            to="/support"
            className={({ isActive }) =>
              `relative inline-block after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-green-500 after:transition-all after:duration-300 
      ${
        isActive
          ? "after:w-full text-gray-200"
          : "after:w-0 text-white-700 hover:text-gray hover:after:w-full"
      } 
       font-medium `
            }
          >
            Support
          </NavLink>
        </div>

        {/* nav icons */}
        <div className="flex items-center space-x-3 md:space-x-5 md:ml-5 pt-2 md:pt-0 md:mt-5 md:mr-0 ">
          {user && user.role === "admin" && (
            <Link
              to="/admin"
              className="block bg-white px-2 rounded  text-black"
            >
              Admin
            </Link>
          )}

          <button
            onClick={toggleCartDrawer}
            className="relative hover:text-gray-400"
          >
            <IoMdCart className="h-7 md:h-8 w-7 md:w-8 text-[#00ff00]" />
            {cartItemCount > 0 && (
              <span className="absolute -top-1 bg-red-800 text-shadow-white text-xs rounded-full px-1 py-0.">
                {cartItemCount}
              </span>
            )}
          </button>
          <Link to="/profile" className="hover:text-gray-400">
            <HiOutlineUser className="h-7 md:h-8 w-7 md:w-8 text-white-70 text-[#00ff00]" />
          </Link>
          <button onClick={toggleNavDrawer} className="md:hidden">
            <RiMenuLine className="h-7 md:h-8 w-7 md:w-8 text-[#00ff00]" />
          </button>
        </div>
      </nav>
      <Cartdrawer
        drawerOpen={drawerOpen}
        toggleCartDrawer={toggleCartDrawer}
        className=""
      />

      {/* mobile navigation */}

      <div
        className={` fixed top-0 left-0  w-2/5 sm:w-1/3 h-full bg-[#070707]  shadow-lg transform
        transition-transform duration-300 z-50 
         ${navDrawer ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex justify-end p-4 ">
          <button onClick={toggleNavDrawer}>
            <IoMdClose className="h-6 w-6 text-gray-500" />
          </button>
        </div>
        {/* sidebar */}
        <div className="p-4">
          <h2 className="text-xl  font-semibold mb-8 border-b text-gray-100">
            Menu
          </h2>
          <nav className="space-y-6 flex flex-col">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `relative inline-block after:absolute
               after:left-0 after:-bottom-1 after:h-[2px] after:bg-green-500 after:transition-all after:duration-300 
      ${
        isActive
          ? "after:w-full text-gray"
          : "after:w-0 text-white-700 hover:text-gray hover:after:w-full"
      } 
       font-medium `
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/collections/all"
              className={({ isActive }) =>
                `relative inline-block after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-green-500 after:transition-all after:duration-300 
      ${
        isActive
          ? "after:w-full text-gray-200"
          : "after:w-0 text-white-700 hover:text-gray hover:after:w-full"
      } 
       font-medium `
              }
            >
              Catogory
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `relative inline-block after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-green-500 after:transition-all after:duration-300 
      ${
        isActive
          ? "after:w-full text-gray-200"
          : "after:w-0 text-white-700 hover:text-gray hover:after:w-full"
      } 
       font-medium `
              }
            >
              About
            </NavLink>
            <NavLink
              to="/support"
              className={({ isActive }) =>
                `relative inline-block after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-green-500 after:transition-all after:duration-300 
      ${
        isActive
          ? "after:w-full text-gray-200"
          : "after:w-0 text-white-700 hover:text-gray hover:after:w-full"
      } 
      text- font-medium `
              }
            >
              Support
            </NavLink>
          </nav>
        </div>
      </div>

      <div className=" sm:hidden pb-2 ">
        {" "}
        <Seachbar />
      </div>
    </>
  );
};

export default Navbar;
