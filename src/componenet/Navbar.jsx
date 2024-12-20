import React, { useState } from 'react';
// import './NavbarAndCard.css'; // Ensure to import the CSS file

export const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <div>
      {/* Navbar */}
      <div className="navbar">
        <div className="navbar-content">
          <h1>Realme</h1>
          <ul className="nav-links">
            <li><a href="#">Realme Smartphone</a></li>
            <li><a href="#">Narzo Smartphone</a></li>
            <li><a href="#">Audio</a></li>
            <li><a href="#">Accessories</a></li>
            <li><a href="#">Brand</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">Community</a></li>
          </ul>
        </div>
      </div>

      
      <div className="bg"></div>




    </div>
        
  );
};
