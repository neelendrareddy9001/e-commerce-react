import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  return <div className="text-dark">ProductDetails - {id}</div>;
};

export default ProductDetails;
