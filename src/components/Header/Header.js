//All the imported materials: Imported;
import React from "react";
import logo from "../../images/logo.png";
import "./Header.css";

//Header Components: Created;
const Header = () => {
  return (
    <div>
      <header className="header-area">
        <div className="container">
          <div className="logo-branding">
            <img src={logo} alt="EmaZon-Branding" />
          </div>
        </div>
      </header>
      <nav className="menu-area">
        <div className="container">
          <ul>
            <li><a href="/shop">shop</a></li>
            <li><a href="/order-review">order review</a></li>
            <li><a href="/manage-inventory">manage inventory here</a></li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
