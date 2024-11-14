import Carousel from "../../Components/Carousel/Carousel";
import Category from "../../components/Category/Category";
import LayOut from "../../components/LayOut/LayOut";
import Product from "../../components/Product/Product";
import React from "react";

const Landing = () => {
  return (
    <LayOut>
      <Carousel />
      <Category />
      <Product />
    </LayOut>
  );
};

export default Landing;
