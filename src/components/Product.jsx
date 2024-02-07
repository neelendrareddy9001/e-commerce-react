import React from "react";
// import { items } from "./Data";
import { Link } from "react-router-dom";

const Product = ({ items, cart, setCart }) => {
  const addToCart = ({ id, price, title, description, imgSrc }) => {
    const obj = {
      id,
      price,
      title,
      description,
      imgSrc,
    };
    setCart([...cart, obj]);
    console.log("Cart Element", cart);
  };

  return (
    <div className="container my-5">
      <div className="row">
        {items.map((product) => {
          return (
            <>
              <div
                className="col-lg-4 col-md-6 com-sm-12 my-3 text-center"
                key={product.id}
              >
                <div className="card " style={{ width: "18rem" }}>
                  <Link
                    to={`/product/${product.id}`}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={product.imgSrc}
                      className="card-img-top"
                      alt=".."
                    />
                  </Link>

                  <div className="card-body ">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                    <button
                      className="btn btn-primary mx-3"
                      onClick={() =>
                        addToCart(
                          product.id,
                          product.price,
                          product.title,
                          product.description,
                          product.imgSrc
                        )
                      }
                    >
                      {product.price}
                      {""} ₹
                    </button>
                    <button className="btn btn-warning">Add To Cart</button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Product;
