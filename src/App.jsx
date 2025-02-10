import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useCart } from "react-use-cart"; // Import useCart

import HomePage from "./modules/HomePage.jsx";
import Slogan from "./components/Slogan.jsx";
import Cart from "./components/Cart.jsx"; 
import Checkout from "./components/Checkout.jsx"; 

import { IoLogoVenmo } from "react-icons/io5";
import { SiCashapp, SiZelle } from "react-icons/si";
import { FaShoppingCart } from "react-icons/fa"; // Import cart icon

import './App.css';

function Header() {
  const { totalItems } = useCart(); 
  const location = useLocation(); // Get current route

  // Hide header on cart page
  if (location.pathname === "/cart") return null; 
  if (location.pathname === "/checkout") return null;

  return (
    <header>
      <h1><a href="/">PamVan Londen</a></h1>
      <p><Slogan /></p>
      <p className="purchaseIcons"><i><IoLogoVenmo /> <SiZelle /> <SiCashapp /></i></p>

      {/* Cart Icon with Item Count */}
      <p className="cart-icon">
        <Link to="/cart">
          <FaShoppingCart /> View Cart ({totalItems})
        </Link>
      </p>
    </header>
  );
}

function Footer() {
  const location = useLocation();

  // Hide footer on cart page
  if (location.pathname === "/cart") return null; 
  if (location.pathname === "/checkout") return null;

  return (
    <footer>
      <p><Slogan /> &copy; {new Date().getFullYear()} Pam Van Londen</p>
    </footer>
  );
}

function App() {
  return (
    <div className="App">
      <Router>
        <Header /> {/* Conditionally renders header */}
        
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </main>

        <Footer /> {/* Conditionally renders footer */}
      </Router>
    </div>
  );
}

export default App;
