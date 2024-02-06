import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { items } from "./Data";
import Product from "./Product";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [relatedProduct, setRelatedProduct] = useState([]);
  useEffect(() => {
    const filteredProduct = items.filter((product) => product.id == id);
    // console.log(filteredProduct);
    setProduct(filteredProduct[0]);

    const relatedproduct = items.filter(
      (item) => item.category == product.category
    );
    // console.log("related product : ", relatedproduct);
    setRelatedProduct(relatedproduct);
  }, [id, product.category]);
  return (
    <>
      <div className="container p-container">
        <div className="img">
          <img src={product.imgSrc} alt="product_img" />
        </div>
        <div className="text-center">
          <h1 className="card-title my-3 fw-bold">{product.title}</h1>
          <p className="card-text ">{product.description}</p>
          <button className="btn btn-primary mx-4 p-2 px-4 fw-bold">
            {product.price} {""} ₹{" "}
          </button>
          <button className="btn btn-warning fw-bold">Add To Cart</button>
        </div>
      </div>
      <Product items={relatedProduct} />
    </>
  );
};

export default ProductDetails;
