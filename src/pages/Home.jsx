import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Mensfashion from "../components/Menfashion";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";
import Womenfashion from "../components/Womenfashion";
import Login from "./Login";
import Register from "./Register";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <h1>Popular Products</h1>
      <Products/>
      <h1>Mens Fashion</h1>
      <Mensfashion/>
      <h1>Women Fashion</h1>
      <Womenfashion/>
      <Newsletter/>
      <Footer/>
    </div>
  );
};

export default Home;
