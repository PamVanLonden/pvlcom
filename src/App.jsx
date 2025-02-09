import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useState } from 'react';

import HomePage from "./modules/HomePage.jsx";
import Slogan from "./modules/Slogan.jsx";

import { IoLogoVenmo } from "react-icons/io5";
import { SiCashapp, SiZelle } from "react-icons/si";

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <h1><a href="/" >PamVan Londen</a></h1>
          <p><Slogan /></p>
          <p className="purchaseIcons"><i><IoLogoVenmo /> <SiZelle /> <SiCashapp /></i></p>
        </header>
        
        
        {/* <Navigation /> */}
          <main>
              <Routes>
                <Route path="/" element={<HomePage />} />

              </Routes>
          </main>
        </Router>

        <footer>
          <p> 
            <Slogan /> 
            &copy; {new Date().getFullYear()} Pam Van Londen 
          </p>
        </footer>
      
    </div>
  );
}

export default App;
