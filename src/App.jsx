import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useCart } from "react-use-cart"; // Import useCart

import CartContext from "./modules/cart/CartProvider.jsx"; 
import HomePage from "./modules/HomePage.jsx";
import Cart from "./modules/cart/Cart.jsx"; 
import Checkout from "./modules/cart/Checkout.jsx"; 
import Slogan from "./modules/cart/Slogan.jsx";

import { IoLogoVenmo } from "react-icons/io5";
import { SiCashapp, SiZelle } from "react-icons/si";
import { FaShoppingCart } from "react-icons/fa"; // Import cart icon

import './App.css';

function Header() {
  const { totalItems } = useCart(); 

  return (
    <header className="header">
      {/* Left side content */}
      <div className="header-left">
        <h1><a href="/">PamVan Londen</a></h1>
        <p><Slogan /></p>
      </div>

      {/* Right side content */}
      <div className="header-right">
        <p className="cart-icon">
          <Link to="/cart">
            <FaShoppingCart /> View Cart ({totalItems})
          </Link>
        </p>
        <p className="purchaseIcons">
          <IoLogoVenmo /> <SiZelle /> <SiCashapp />
        </p>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer>
      <p><Slogan /> &copy; {new Date().getFullYear()} Pam Van Londen</p>
    </footer>
  );
}

function App() {
  return (
    <CartContext> 
      <Router>
        <Header /> 
        
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </main>

        <Footer /> 
      </Router>
    </CartContext>
  );
}

export default App;
