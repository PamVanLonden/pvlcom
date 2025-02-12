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

function App() {
  const { totalItems } = useCart(); 
  return (
    <CartContext> 

      <header>
        <h1><a href="/">Pam Van Londen</a></h1>
        <p><Slogan /></p>
      </header>

      <Router>
        <nav className="fancyButtons">
          <i className="purchaseIcons"><IoLogoVenmo /> <SiZelle /> <SiCashapp /></i>
          <Link to="">Home</Link>
            <Link to="">Commissions</Link>
            <Link to="">Exhibits</Link>
            <Link to="">Publications</Link>
            <Link to="">Résumé</Link>
            <Link to="">About</Link>
            <Link to="">Contact</Link>
            <Link to="/cart" className="cart-icon"><FaShoppingCart /> View Cart ({totalItems})</Link>
            
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
            <Link to="">Legal</Link>
            <Link to="">Social</Link>
          </nav>
        </footer>
      </Router>
    </CartContext>
 
  );
}

export default App;
