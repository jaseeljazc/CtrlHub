import React from "react";
import {
  FaBoxOpen,
  FaClipboardList,
  FaSignOutAlt,
  FaStore,
  FaUser,
} from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { logout } from "../../redux/slices/authSlice";
import { clearCart } from "../../redux/slices/cartSlice";

const AdminSidbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    dispatch(clearCart());
    navigate("/");
  };
  return (
    <div className=" p-6 ">
      <div className="mb-6">
        <Link to="/admin" className=" text-2xl font-medium text-[#16F467]">
          Ctrlhub
        </Link>
      </div>
      {/* <h2 className=" text-xl font-medium mb-6 text-center text-lime-500">
        Admin Dashboard
      </h2> */}
      <nav className="flex flex-col space-y-2 ">
        <NavLink
          to="/admin/users"
          className={({ isActive }) =>
            isActive
              ? " bg-gray-800  py-3 px-4 text-[#16F467] rounded flex items-center space-x-2"
              : "text-gray-300 hover:bg-gray-800 hover:text-[#16F467] py-3 px-4 rounded flex items-center space-x-2"
          }
        >
          <FaUser />
          <span>Users</span>
        </NavLink>
        <NavLink
          to="/admin/products"
          className={({ isActive }) =>
            isActive
              ? " bg-gray-800 text-[#16F467] py-3 px-4 rounded flex items-center space-x-2"
              : "text-gray-300 hover:bg-gray-800 hover:text-[#16F467] py-3 px-4 rounded flex items-center space-x-2"
          }
        >
          <FaBoxOpen />
          <span>Products</span>
        </NavLink>
        <NavLink
          to="/admin/orders"
          className={({ isActive }) =>
            isActive
              ? " bg-gray-800 text-[#16F467] py-3 px-4 rounded flex items-center space-x-2"
              : "text-gray-300 hover:bg-gray-800 hover:text-[#16F467] py-3 px-4 rounded flex items-center space-x-2"
          }
        >
          <FaClipboardList />
          <span>Orders</span>
        </NavLink>

        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? " bg-gray-800 text-[#16F467] py-3 px-4 rounded flex items-center space-x-2"
              : "text-gray-300 hover:bg-gray-800 hover:text-[#16F467] py-3 px-4 rounded flex items-center space-x-2"
          }
        >
          <FaStore />
          <span>Shop</span>
        </NavLink>
      </nav>
      <div className="mt-6">
        <button
          onClick={handleLogout}
          className=" w-full bg-[#00FF00] hover:bg-red-600 font-bold text-black
        py-2 px-4 rounded flex items-center justify-center space-x-2 transition-colors"
        >
          <FaSignOutAlt />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default AdminSidbar;
