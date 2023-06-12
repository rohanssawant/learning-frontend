import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigateToProducts = useNavigate();
  const navigationHandler = () => {
    navigateToProducts("/product");
  };
  return (
    <>
      <h1>This is my home page</h1>
      <button onClick={navigationHandler}>Navigate to Product</button>
    </>
  );
};

export default Home;
