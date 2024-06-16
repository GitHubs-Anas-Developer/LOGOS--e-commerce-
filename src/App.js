import React, { useState } from "react";
import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";
import "./App.css";
import About from "./project/about/About";
import Contact from "./project/contact/Contact";
import Footer from "./project/always-on/footer/Footer";
import NavigationBar from "./project/always-on/navigation-bar/NavigationBar";
import Home from "./project/home/Home";
import CategoriesPage from "./project/categories/CategoriesPage";
import ProductDetails from "./project/product-details/ProductDetails";
import ProductsAll from "./project/products-all/ProductsAll";
import Cart from "./project/cart/Cart";
import Signup from "./project/profile/signup/Signup";
import Login from "./project/profile/login/Login";
import ForgotPassword from "./project/profile/forgot-password/ForgotPassword";
import SearchingList from "./project/searching-list/SearchingList";
import AllCategories from "./project/all-categories/AllCategories";

function AppContent() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const location = useLocation();
  const isAuthPage =
    location.pathname === "/login" ||
    location.pathname === "/signup" ||
    location.pathname === "/forgot-password" ||
    location.pathname === "/";

  return (
    <>
      {!isAuthPage && <NavigationBar />}
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} />} />
        <Route
          path="/category/:slug"
          element={<CategoriesPage handleAddToCart={handleAddToCart} />}
        />
        <Route
          path="/product-details/:productId"
          element={<ProductDetails handleAddToCart={handleAddToCart} />}
        />
        <Route
          path="/products-all"
          element={<ProductsAll handleAddToCart={handleAddToCart} />}
        />
        <Route path="/all-categories" element={<AllCategories />} />
        <Route path="/searching-list" element={<SearchingList />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
      {!isAuthPage && <Footer />}
    </>
  );
}

function App() {
  return (
    <div className="App container-xxl">
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </div>
  );
}

export default App;
