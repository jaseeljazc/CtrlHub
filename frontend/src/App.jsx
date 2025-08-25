import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLayout from "./components/layout/UserLayout";
import Home from "./components/pages/Home";
import "./App.css";
import { Toaster } from "sonner";
import Login from "./components/pages/LoginPage";
import Register from "./components/pages/Register";
import Profile from "./components/pages/Profile";
import CollectionPage from "./components/pages/CollectionPage";
import ProductDetails from "./components/products/ProductDetails";
import Checkout from "./components/cart/Checkout";
import OrderConfirmationPage from "./components/pages/OrderConfirmationPage";
import OrderDetails from "./components/pages/OrderDetailsPage";
import MyOrder from "./components/pages/MyOrdersPage";
import AdminLayout from "./components/admin/AdminLayout";
import AdminHomePage from "./components/admin/AdminHomePage";
import UserManagement from "./components/admin/UserManagement";
import ProductManagement from "./components/admin/ProductManagement";
import EditProductPage from "./components/admin/EditProductPage";
import OrderManagement from "./components/admin/OrderManagement";

import { Provider } from "react-redux";
import store from "./redux/store";
import ProtectedRoute from "./components/commen/ProtectedRoute";
import About from "./components/pages/About";
import SupportPage from "./components/pages/SupportPage";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Toaster position="top-right" />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/" element={<UserLayout />}>
            <Route index element={<Home />} />
            <Route path="profile" element={<Profile />} />
            <Route
              path="collections/:collection"
              element={<CollectionPage />}
            />
            <Route path="product/:id" element={<ProductDetails />} />
            <Route path="about" element={<About />} />
            <Route path="support" element={<SupportPage />} />
            <Route path="checkout" element={<Checkout />} />
            <Route
              path="order-confirmation"
              element={<OrderConfirmationPage />}
            />
            <Route path="order/:id" element={<OrderDetails />} />
            <Route path="my-orders" element={<MyOrder />} />

            {/* user route */}
          </Route>
          <Route path="/admin" element={<AdminLayout />}>
            <Route
              index
              element={
                <ProtectedRoute role="admin" >
                  <AdminHomePage />
                </ProtectedRoute>
              }
            />
            <Route path="users" element={<UserManagement />} />
            <Route path="products" element={<ProductManagement />} />
            <Route path="products/:id/edit" element={<EditProductPage />} />
            <Route path="orders" element={<OrderManagement />} />
            {/* admin route */}
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
