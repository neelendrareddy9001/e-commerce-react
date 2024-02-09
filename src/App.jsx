import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import ProductDetails from "./components/ProductDetails";
import SearchItem from "./components/SearchItem";
import Cart from "./components/Cart";

//Data
import { items } from "./components/Data";

function App() {
  const [data, setData] = useState([...items]);
  const [cart, setCart] = useState();
  return (
    <>
      <Router>
        <Navbar cart={cart} setData={setData} />
        <Routes>
          <Route
            path="/"
            element={<Product items={data} cart={cart} setCart={setCart} />}
          />
          <Route
            path="/product/:id"
            element={<ProductDetails cart={cart} setCart={setCart} />}
          />
          <Route
            path="/search/:term"
            element={<SearchItem cart={cart} setCart={setCart} />}
          />
          <Route
            path="/cart"
            element={<Cart cart={cart} setCart={setCart} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
