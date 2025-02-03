import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useState } from 'react';

import HomePage from "./modules/HomePage.jsx";
import Slogan from "./modules/Slogan.jsx";
import './App.css';

function App() {
  return (
    <div >
      <Router>
        <header>
          <h1>Pam<a href="/" ><i><img src="favicon-32x32.png" alt="Pam Van Londen's paintbrush" className="App-logo" /></i></a>Van Londen</h1>
          <Slogan />
        </header>
        
        
        {/* <Navigation /> */}
          <main>
              <section>
              
                  <Routes>
                    <Route path="/" element={<HomePage />} />

                  </Routes>
                
              </section>
          </main>
        </Router>

        <footer>
        <Slogan /> 
        <p>&copy; {new Date().getFullYear()} Pam Van Londen </p>
        </footer>
      
    </div>
  );
}

export default App;
