import React from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const params = useParams();

  return (
    <>
      <h1>ProductDetails!</h1>
      <p>This is {params.productId}</p>
    </>
  );
}

export default ProductDetails;
