// import React from 'react';

import Navbar from "../../components/navbar/Navbar";
import SwaperSlider from "../../components/Slider/SwaperSlider";
import GuidSteps from "../../components/guidSteps/GuidSteps";
import HomeProducts from "../../components/HomeProducts/HomeProducts";
import Benefit from "../../components/benefit/Benefit";
import Footer from "../../components/footer/Footer";

const Home = () => {
    return (
        <div>
          <Navbar />
          <SwaperSlider />
          <GuidSteps />
          <HomeProducts />
          <Benefit />
          <Footer />
        </div>
    );
};

export default Home;
