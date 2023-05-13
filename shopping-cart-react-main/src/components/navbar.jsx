import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <h2>Life's Pretty Straight Without Accessory.</h2>
        <Link to="/"> Home </Link>
        {/* <Link to="/contact"> Contact </Link> */}
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};
