import React from "react";
import { Link } from "react-router-dom";
import { items } from "./Data";

const Navbar = ({ setData }) => {
  const filterByCategory = (category) => {
    const element = items.filter((product) => product.category === category);
    // console.log(element);
    setData(element);
  };
  return (
    <header className="sticky-top">
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
        <div className="items" onClick={() => setData(items)}>
          No Filter
        </div>
        <div className="items" onClick={() => filterByCategory("mobiles")}>
          Mobiles
        </div>
        <div className="items" onClick={() => filterByCategory("laptops")}>
          Laptops
        </div>
        <div className="items" onClick={() => filterByCategory("tablets")}>
          Tablets
        </div>
        <div className="items">{">="}29999</div>
        <div className="items">{">="}49999</div>
        <div className="items">{">="}69999</div>
        <div className="items">{">="}89999</div>
      </div>
    </header>
  );
};

export default Navbar;
