import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { items } from "./Data";
import { BsFillCartCheckFill } from "react-icons/bs";

const Navbar = ({ setData }) => {
  const [searchTerm, setSearchTerm] = useState();
  const navigate = useNavigate();
  const filterByCategory = (category) => {
    const element = items.filter((product) => product.category === category);
    // console.log(element);
    setData(element);
  };
  const filterByPrice = (price) => {
    const element = items.filter((product) => product.price >= price);
    setData(element);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
    setSearchTerm("");
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
        <form className="search-bar" onSubmit={handleSubmit}>
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            type="text"
            placeholder="Search Products"
          />
        </form>
        <div className="cart">
          <Link
            to={"/cart"}
            style={{ textDecoration: "none", color: "white", maxWidth: "24px" }}
          >
            <button
              type="button"
              className="btn btn-primary position-relative text-center"
            >
              <BsFillCartCheckFill size={30} />
              <span className="positon-absolute top-0  translate-middle badge rounded-pill bg-danger">
                99+
                <span className="visually-hidden"></span>
              </span>
            </button>
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
        <div className="items" onClick={() => filterByPrice(29999)}>
          {">="}29999
        </div>
        <div className="items" onClick={() => filterByPrice(49999)}>
          {">="}49999
        </div>
        <div className="items" onClick={() => filterByPrice(69999)}>
          {">="}69999
        </div>
        <div className="items" onClick={() => filterByPrice(89999)}>
          {">="}89999
        </div>
      </div>
    </header>
  );
};

export default Navbar;
