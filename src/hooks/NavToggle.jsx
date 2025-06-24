import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import CartLink from './CartLink'; // Adjust the path as needed
import { IoMenu } from "react-icons/io5";

function NavToggle() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleMenu}><IoMenu /></button>
      {isOpen && (
         <nav >
          <Link to="/">Home</Link>
          <Link to="/social">Social</Link>
          <Link to="/commissions">Commissions</Link>
          <Link to="/exhibits">Exhibits</Link>
          <Link to="/publications">Publications</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      )}
    </div>
  );
}

export default NavToggle;