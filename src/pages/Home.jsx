import { RotateLeftRounded } from "@material-ui/icons";
import { styled } from "@material-ui/styles";
import React from "react";
import { isStyledComponent } from "styled-components";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Mensfashion from "../components/Menfashion";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";
import Womenfashion from "../components/Womenfashion";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <br />
      <h1>SHOP BY CATEGORY</h1>
      <Categories />
      <h1>POPULAR PRODUCTS</h1>
      <Products/>
      <h1>MEN'S FASHION</h1>
      <Mensfashion/>
      <h1>WOMEN'S FASHION</h1>
      <Womenfashion/>
      <Newsletter/>
      <Footer/>
    </div>
  );
};

export default Home;
