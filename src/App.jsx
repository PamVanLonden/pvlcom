import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useCart } from "react-use-cart"; 

import CartContext from "./modules/cart/CartProvider"; 
import HomePage from "./modules/HomePage.jsx";
import Cart from "./modules/cart/Cart.jsx"; 
import Checkout from "./modules/cart/Checkout.jsx"; 
import Slogan from "./modules/Slogan.jsx";

import { IoLogoVenmo } from "react-icons/io5";
import { SiCashapp, SiZelle } from "react-icons/si";
import { FaShoppingCart } from "react-icons/fa"; 

import './App.css';

function App() {
  return (
    <Router>
      <CartContext> {/* Wrap the entire app to ensure `totalItems` updates */}
        <header>
          <h1><a href="/">Pam Van Londen</a></h1>
          <p><Slogan /></p>
        </header>

        <nav className="fancyButtons">
          <i className="purchaseIcons"><IoLogoVenmo /> <SiZelle />  </i>
          <Link to="/">Home</Link>
          <Link to="/commissions">Commissions</Link>
          <Link to="/exhibits">Exhibits</Link>
          <Link to="/publications">Publications</Link>
          <Link to="/resume">Résumé</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <CartLink /> {/* CartLink component ensures `totalItems` updates */}
        </nav>

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </main>

        <footer>
          <nav id="footer">
            &copy; {new Date().getFullYear()} Pam Van Londen
            <Link to="/legal">Legal</Link>
            <Link to="/social">Social</Link>
          </nav>
        </footer>
      </CartContext>
    </Router>
  );
}

/*  Separate CartLink to ensure `totalItems` updates when the cart is cleared */
const CartLink = () => {
  const { totalItems } = useCart(); // Dynamically updates

  return (
    <Link to="/cart" className="cart-icon">
      <FaShoppingCart /> View Cart ({totalItems})
    </Link>
  );
};

export default App;
