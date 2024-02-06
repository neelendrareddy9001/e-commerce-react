import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div className="nav-bar">
        <div className="brand">
          <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
            {" "}
            E-Cart
          </Link>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search Products" />
        </div>
        <div className="cart">
          <Link to={"/cart"} style={{ textDecoration: "none", color: "white" }}>
            Cart
          </Link>
        </div>
      </div>
      <div className="nav-bar-wrapper">
        <div className="items">Filter by{"->"}</div>
        <div className="items">No Filter</div>
        <div className="items">Mobiles</div>
        <div className="items">Laptops</div>
        <div className="items">Tablets</div>
        <div className="items">{">="}29999</div>
        <div className="items">{">="}49999</div>
        <div className="items">{">="}69999</div>
        <div className="items">{">="}89999</div>
      </div>
    </header>
  );
};

export default Navbar;
