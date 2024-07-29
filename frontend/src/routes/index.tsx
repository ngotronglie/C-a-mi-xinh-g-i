import { Route, Routes } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../pages/Home";
import ListProduct from "../pages/ListProduct";
import ProductDetail from "../pages/ProductDetail";
import Wishlist from "../pages/Wishlist";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import ProfileDashboard from "../pages/MyAccount/Dashboard";
import ProfileLayout from "../Layout/ProfileLayout";
import MyOrders from "../pages/MyAccount/ListOrder";
import OrderDetail from "../pages/MyAccount/OrderDetail";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/products" element={<ListProduct />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/profile" element={<ProfileLayout />}>
          <Route index element={<ProfileDashboard />} />
          <Route path="orders" element={<MyOrders />} />
          <Route path="orders/:id" element={<OrderDetail />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default Router;
