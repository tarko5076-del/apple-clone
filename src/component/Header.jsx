import React, { useState } from "react";
import "./Header.css"; 

import logo from "./images/logo/logo.png";
import search from "./images/search/search.png";
import cart from "./images/cart/cart.png";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <nav>
        <div className={`nav-wrapper ${open ? "active" : ""}`}>
          <ul className="nav-ul">
            {/* Logo */}
            <li className="icon logo">
              <a href="#"><img src={logo} alt="logo" /></a>
            </li>

            {/* Navigation links */}
            <li className="dropdown">
              <ul className="dropdown-ul">
                <li className="nav-link"><a href="#">Store</a></li>
                <li className="nav-link"><a href="#">Mac</a></li>
                <li className="nav-link"><a href="#">iPad</a></li>
                <li className="nav-link"><a href="#">iPhone</a></li>
                <li className="nav-link"><a href="#">Watch</a></li>
                <li className="nav-link"><a href="#">Vision</a></li>
                <li className="nav-link"><a href="#">AirPods</a></li>
                <li className="nav-link"><a href="#">TV & Home</a></li>
                <li className="nav-link"><a href="#">Entertainment</a></li>
                <li className="nav-link"><a href="#">Accessories</a></li>
                <li className="nav-link"><a href="#">Support</a></li>
              </ul>
            </li>

            {/* Icons */}
            <li className="icon search">
              <a href="#"><img src={search} alt="search" /></a>
            </li>
            <li className="icon cart">
              <a href="#"><img src={cart} alt="cart" /></a>
            </li>

            {/* Mobile toggle */}
            <li
              className="menu-toggle"
              onClick={() => setOpen(!open)}
            >
              {open ? "✕" : "☰"}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
